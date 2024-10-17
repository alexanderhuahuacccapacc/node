const fs = require('fs');

fs.writeFile('./nuevo.pdf','hola mundo', function(erro){
 if(erro){
    console.log('ocurrio un error')
 }else{
    console.log('archivo creado')
 }
});
