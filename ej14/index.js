var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Este request/response está OK')
    return res.sendStatus(200);
})


app.get('/products', function(req, res){
    res.send('Ha ocurrido un error en el servidor');
    return res.sendStatus(500);
})

app.get('/contacto', function(req, res){
    res.send('404 No Encontrado');
    return res.sendStatus(404);
})

if(app.listen(3000,function (){
})){
    console.log('Servidor corriendo en el puerto 3000')
}else{
    console.log('No se pudo levantar el servidor en el puerto 3000')
}