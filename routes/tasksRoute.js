//Aquí se asignan las rutas correspondientes a cada tarea que existe en el controlador
const EXPRESS = require('express');
const TASKCONTROL = require('../controllers/TasksController');
let api = EXPRESS.Router();

//Route ADD homework
api.post('/', TASKCONTROL.createTask);
//Route QUERY homework
api.get('/',TASKCONTROL.getTask);
//Route UPDATE homework
api.put('/:id', TASKCONTROL.updateTaks);
//Route DELETE homework
api.delete('/:id', TASKCONTROL.deleteTask);

module.exports = api;