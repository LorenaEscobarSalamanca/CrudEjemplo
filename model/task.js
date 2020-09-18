//Aquí se encuentra la configuración de la base de datos
const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
const TASKSCHEMA = new SCHEMA({
    namePerson: String,
    descriptionTask: String,
    state: String
})

module.exports = MONGOOSE.model('Tasks', TASKSCHEMA);