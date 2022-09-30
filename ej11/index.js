var express = require('express');
var app = express();
const path = require('path');

app.get('/', function(req, res){

    res.sendFile(path.resolve(__dirname, 'index.html'))
})



app.get('/productos', function(req, res){

        res.sendFile(path.resolve(__dirname, 'productos.html'))
})


if(app.listen(3000,function (){
})){
    console.log('Servidor corriendo en el puerto 3000')
}else{
    console.log('No se pudo levantar el servidor en el puerto 3000')
}