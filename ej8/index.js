let http = require('http');
const { listenerCount } = require('process');
http.createServer(function(req, res){
    res.write('Bienvenidos a Node.js server side');
    res.end();
}).listen(3001)
console.log('Servidor corriendo en el puerto 3001 ' )

