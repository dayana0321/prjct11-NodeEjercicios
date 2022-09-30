var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Bienvenidos a Node.js Server Side');
})

if(app.listen(3000,function (){
})){
    console.log('Servidor corriendo en el puerto 3000')
}else{
    console.log('No se pudo levantar el servidor en el puerto 3000')
}