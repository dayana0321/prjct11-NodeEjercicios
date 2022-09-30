var express = require('express');
var app = express();


var items = [
    {
        nombre: 'taza de Star Wars' , 
        precio: 300
    },
    {
        nombre: 'FIFA 22 PS4' , 
        precio: 1000
    },
    {
        nombre: 'Playera IronMan' , 
        precio: 100
    },
    {
        nombre: 'Zacapa Centenario' , 
        precio: 200
    },
    {
        nombre: 'Caja de estampas del mundual' , 
        precio: 120
    },
    {
        nombre: 'Kit Gamer+' , 
        precio: 220
    }
]

app.get('/', function(req, res){
    
    res.send('Hola, esta es la página principal del ejercicio 12. Ingresa a /api/products')

})
app.get('/api/products', function(req, res){
    
        res.send(items)
    
})

if(app.listen(3000,function (){
})){
    console.log('Servidor corriendo en el puerto 3000')
}else{
    console.log('No se pudo levantar el servidor en el puerto 3000')
}