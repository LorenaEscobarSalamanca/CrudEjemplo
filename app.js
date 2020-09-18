//Se realizan las configuraciones 
const EXPRESS = require('express');
const CORS = require('cors');
const APP = EXPRESS();

//Declarar las rutas de la API
const TASKROUTE = require('./routes/tasksRoute');
//Middlewares
APP.use(EXPRESS.json());
APP.use(CORS());

//consumo de las rutas
APP.use('/api', TASKROUTE);
module.exports = APP;
