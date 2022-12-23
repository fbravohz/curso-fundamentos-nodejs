console.info('info');
console.error('error');
console.warn('warn');

let tabla = [
	{
		a: 1,
		b: 'Z'
	},
	{
		a: 2,
		b: 'Y'
	},
	{
		a: 3,
		b: 'X'
	}
]

console.table(tabla);

console.group('Conversacion');
console.log('hola');
console.log('blabla');
console.log('anunaki');
console.log('adios');
console.groupEnd('Conversacion');

//ejemplo de console.group en funciones

function function1(){
	console.group('function1');
	console.log('parte de function 1');
	function2();
	console.groupEnd('function1');
}

function function2(){
	console.group('function2');
	console.log('parte de function 2');
	console.groupEnd('function2');
}

function1();


console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
