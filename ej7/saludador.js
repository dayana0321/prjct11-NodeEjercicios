let myCallBack = () =>{
    console.log('Luego de saludar se ejecuta el callback')
}

let saludar = (nombre, apellido, myCallBack) =>{
    console.log(`Hola ${nombre} ${apellido}`);
    myCallBack();
}

module.exports = {
    "saludar": saludar,
    "myCallBack": myCallBack
}