
# API ecommercer de un salon de belleza

Esta api tiene la logica de un centro de belleza, donde los usuarios pueden realizar reservas tanto de productos de belleza como de servicios, colocan la fecha y hora, y su cita esta separada.

El dominio desplegado en vercel es el siguiente:

```http
  https://api-ecommerce-node-js.vercel.app/api
```

## Referencias API

#### Obtener todos los productos

```http
  GET api/v1/productos
```

#### Obtener producto

```http
  GET /api/v1/productos/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idProducto`      | `string` | **Required**. Id del producto a buscar |

#### Crear producto

```http
  POST /api/v1/productos
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `nombreProducto`      | `string` | **Required**. Nombre del producto a buscar |
| `precioProducto`      | `string` | **Required**. Precio del producto a buscar |
| `descripcionProducto`      | `string` | **Required**. Descripción del producto a buscar |
| `stockProducto`      | `string` | **Required**. Stock del producto a buscar |
| `imagenProducto`      | `string` | **Required**. Imagen del producto a buscar |
| `categoriaProducto`      | `string` | **Required**. Categoría del producto a buscar ['producto', 'servicio'] |

#### Actualizar producto

```http
  PATCH /api/v1/productos/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idProducto`      | `string` | **Required**. Id del producto a buscar |
| `nombreProducto`      | `string` | Nombre del producto a buscar |
| `precioProducto`      | `string` | Precio del producto a buscar |
| `descripcionProducto`      | `string` | Descripción del producto a buscar |
| `stockProducto`      | `string` | Stock del producto a buscar |
| `imagenProducto`      | `string` | Imagen del producto a buscar |
| `categoriaProducto`      | `string` | Categoría del producto a buscar ['producto', 'servicio'] |

#### Eliminar producto

```http
  Delete /api/v1/productos/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idProducto`      | `string` | **Required**. Id del producto a buscar |

#### Obtener todos los usuarios

```http
  GET api/v1/usuarios
```

#### Obtener usuario

```http
  GET /api/v1/usuarios/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idUsuario`      | `string` | **Required**. Id del usuario a buscar |

#### Crear usuario

```http
  POST /api/v1/usuarios
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idUsuario`      | `string` | **Required**. Id del producto a buscar |
| `nombreUsuario`      | `string` | **Required**. Nombre del usuario a buscar |
| `apellidoUsuario`      | `string` | **Required**. Apellido del usuario a buscar |
| `correoUsuario`      | `string` | **Required**. Correo del usuario a buscar |
| `contraseniaUsuario`      | `string` | **Required**. contrasenia del usuario a buscar [8 caracteres] |
| `telefonoUsuario`      | `string` | **Required**. Telefono del usuario a buscar |
| `direccionUsuario`      | `string` | **Required**. Dirección del usuario a buscar ['producto', 'servicio'] |

#### Actualizar usuario

```http
  PATCH /api/v1/usuarios/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idUsuario`      | `string` | **Required**. Id del producto a buscar |
| `nombreUsuario`      | `string` | Nombre del usuario a buscar |
| `apellidoUsuario`      | `string` | Apellido del usuario a buscar |
| `correoUsuario`      | `string` | Correo del usuario a buscar |
| `contraseniaUsuario`      | `string` | contrasenia del usuario a buscar [8 caracteres] |
| `telefonoUsuario`      | `string` | Telefono del usuario a buscar |
| `direccionUsuario`      | `string` | Dirección del usuario a buscar ['producto', 'servicio'] |

#### Eliminar usuario

```http
  Delete /api/v1/usuarios/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idUsuario`      | `string` | **Required**. Id del usuario a buscar |

#### Obtener todas las reservas

```http
  GET api/v1/reservas
```

#### Obtener reserva

```http
  GET /api/v1/reservas/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idReserva`      | `string` | **Required**. Id de la reserva a buscar |

#### Crear reserva

```http
  POST /api/v1/reservas
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idProducto`      | `string` | **Required**. Id del producto a buscar |
| `idUsuario`      | `string` | **Required**. Id del usuario a buscar |
| `fechaReserva`      | `string` | **Required**. fecha de la reserva a buscar formato iso "2023-10-30T14:30:00" |
| `estadoReserva`      | `string` | **Required**. Estado de la reserva ('pendiente', 'confirmada', 'cancelada', 'recogida')|
| `cantidadReserva`      | `string` | **Required**. Cantidad de la reserva a buscar min(1)|

#### Actualizar reserva

```http
  PATCH /api/v1/reservas/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idReserva`      | `string` | **Required**. Id de la reserva  a buscar |
| `idProducto`      | `string` | Id del producto a buscar |
| `idUsuario`      | `string` | Id del usuario a buscar |
| `fechaReserva`      | `string` | fecha de la reserva a buscar formato iso "2023-10-30T14:30:00" |
| `estadoReserva`      | `string` | Estado de la reserva ('pendiente', 'confirmada', 'cancelada', 'recogida')|
| `cantidadReserva`      | `string` | Cantidad de la reserva a buscar min(1)|

#### ELiminar reserva

```http
  Delete /api/v1/reservas/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `idReserva`      | `string` | **Required**. Id de la reserva a buscar |

## Deployment

To deploy this project run

```bash
  npm init -y
  npm i express
  npm i @faker-js/faker
  npm i @hapi/boom
  npm i joi
  npm i cors
  npm run dev
```


## Tech Stack

**Vercel:** Se configuro para que pueda ser desplegado en Vercel y obtenga la implementación y despliegue continúo (CI/CD)

**NodeJS:** El frameworl base

**Express:** Framework usado para el servidor

**Faker:** Framework para la data fake en el servicio

**Boom:** Framework para manejar errores en el middleware

**Joi:** Framework para validar datos en esquema

**Cors:** Framework para que pueda ser compatible con todos los dominios

