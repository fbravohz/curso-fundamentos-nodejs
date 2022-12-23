const { exec, spawn } = require('child_process');

// exec('ls -al', (err, stdout, sterr) => {
// 	if (err) {
// 		console.error(err);
// 		return false;
// 	}
// 	console.log(stdout);
// });

//Puedes ejecutar archivos de otros lenguajes de programacion
// y obtener la salida correspondiente de dicho script

// exec('node modulos/console.js', (err, stdout, sterr) => {
// 	if (err) {
// 		console.error(err);
// 		return false;
// 	}
// 	console.log(stdout);
// });

// invocar un proceso nuevo de nodejs
let proceso = spawn('ls', ['-al']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log(dato.toString());
})

proceso.on