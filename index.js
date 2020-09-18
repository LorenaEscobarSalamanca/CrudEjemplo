const MONGOOSE = require('mongoose');
const APP =  require('./app');
const PORT = 3000;
const URI = 'mongodb://localhost:27017/listToDo';
MONGOOSE.connect(URI, (err,res)=>{
    if(err){
        console.log(`El error es: ${err}`);
    } else {
        console.log('Conexion Exitosa!!');
        APP.listen(PORT, ()=>{
            console.log(`Puerto: ${PORT}`);
        })
    }
})