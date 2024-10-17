const readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

rl.question('¿Cómo te llamas? ', (nombre) => {
  console.log(`Hola, ${nombre}!`); 
  rl.close(); 
});
