function hola(nombre){
	return new Promise(function (resolve, reject){
			setTimeout(function() {
				console.log('Hola ' + nombre);
				resolve(nombre);
        //reject("el error es: 404");
			}, 2000);
	});
}

function hablar(){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('bla bla bla');
            resolve();
		}, 3000);
	});
}

function adios(nombre){
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('adios ' + nombre);
			//resolve();
            reject(nombre);
		}, 1000);
	});
}

let error2;
async function main(){
    // dentro de la funcion async principal podemos
    // llamar funciones de manera no asincrona quitando await
    hablar();
	hablar();
    // Llamamos funciones asincronas con await
	hablar();
    let nombre = await hola('Carlos');

    await adios(nombre)
    .catch((error) =>{error2 = error} );
    console.log(error2);
}

console.log('iniciamos');
main();
console.log('terminamos');