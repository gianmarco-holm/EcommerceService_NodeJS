const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandles');

const app = express();
const port = 3000;

app.use(express.json());

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

// Da acceso a todos los origenes
app.use(cors());

app.get('/', (req, res) => {
  res.send('API DE GIANMARCO HOLGADO MURGA');
});

routerApi(app);

// los middlewares se usa despues de declarar el router
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' + port);
});

