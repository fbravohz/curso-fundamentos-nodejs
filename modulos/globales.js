console.log(global);

console.log(setInterval);


let i = 0;
let intervalo = setInterval(function(){
	console.log('hola' + i);
	if(i === 3)
		clearInterval(intervalo);
	i++;
}, 1000);

setImmediate(function(){
	console.log('Hola inmediato');
})

require();

console.log(process);

console.log(__dirname);

console.log(__filename);

//si puedes no usar variables globales MEJOR!
//puedes crear modiulos, archivos de configuracion e imprtarlos

//crear variable global
global.miVariable = "elvalor";
console.log(miVariable);