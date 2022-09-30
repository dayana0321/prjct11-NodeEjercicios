var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hola, Bienvenido :)');
})

//Productos
app.get('/productos', function(req, res){
    res.send('Listado de productos');
})

app.post('/productos', function(req, res){
    res.send('Crear un producto');
})

app.put('/productos', function(req, res){
    res.send('Actualizar un producto ');
})

app.delete('/productos', function(req, res){
    res.send('Borar un producto ');
})

//Usuarios
app.get('/usuarios', function(req, res){
    res.send('Listado de usuarios');
})

app.post('/usuarios', function(req, res){
    res.send('Crear un usuario');
})

app.put('/usuarios', function(req, res){
    res.send('Actualizar un usuario');
})

app.delete('/usuarios', function(req, res){
    res.send('Borrar un usuario');
})


if(app.listen(3000,function (){
})){
    console.log('Servidor corriendo en el puerto 3000')
}else{
    console.log('No se pudo levantar el servidor en el puerto 3000')
}