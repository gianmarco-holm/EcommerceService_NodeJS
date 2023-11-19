const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandles');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Da acceso a todos los origenes
app.use(cors());

app.get('/api', (req, res) => {
  res.send('API DE GIANMARCO HOLGADO MURGA');
});

routerApi(app);

// los middlewares se usa despues de declarar el router
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' + port);
});


// Configuracion de CORS para dar acceso algunos origenes
// const whitelist = ['http://localhost:8080', 'https://myapp.co'];
// const options = {
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin)){
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'))
//     }
//   }
// }

