//este archivo contiene los controladores de ver, actualizar, eliminar y crear

const TASK = require('../model/task');

//Create task
function createTask(req,res){
    let task = new TASK();
    let params = req.body;
    task.namePerson = params.namePerson;
    task.descriptionTask = params.descriptionTask;
    task.state = params.state;
    task.save((err, newTask)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!newTask){
                res.status(200).send({message: "No fue posible realizar el registro de la nueva tarea"});
            } else {
                res.status(200).send({
                    status: 'Tarea Creada',
                    tasks: newTask
                })
            }
        }
    })
}
//Get task
function getTask(req, res){
    TASK.find((err, findTask) => {
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!findTask){
                res.status(200).send({message: "No fue posible encontrar la tarea"});
            } else {
                res.status(200).send({
                    status: 'Tareas Encontrar',
                    tasks: findTask
                })
            }
        }
    })
}
//update Task
function updateTaks(req,res){
    let taskId = req.params.id;
    let newDataTask = req.body;
    TASK.findByIdAndUpdate(taskId, newDataTask, (err, updateDataTask)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!updateDataTask){
                res.status(200).send({message: "No fue posible actualizar la tarea"});
            } else {
                res.status(200).send({
                    status: 'Tarea Actualizada',
                    taks: newDataTask
                })
            }
        }
    })
}
//delete Task
function deleteTask(req,res){
    let taskId = req.params.id;
    TASK.findByIdAndDelete(taskId,(err, deteleDataTask)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        } else {
            if (!deteleDataTask){
                res.status(404).send({message: "No fue posible eliminar la tarea"});
            } else {
                res.status(200).send({
                    status: 'Tarea Eliminada',
                    tasks: deteleDataTask
                })
            }
        }
    })
}
//Export the function
module.exports = {
    createTask,
    getTask,
    updateTaks,
    deleteTask
}