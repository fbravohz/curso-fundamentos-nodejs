//lo extrae directamente del core de node
const fs = require('fs');

// Filesystem es un asincrona, aunque hay alternativas
// sincronas, no se recomienda por que bloquean el hilo
// principal y ralentizas el proyecto

function leer(ruta, callback){
	fs.readFile(ruta, (err, data) => {
		callback(data.toString());
	});
}

leer(__dirname + '/archivo.txt', console.log);

function escribir(ruta, contenido, callback){
	fs.writeFile(ruta, contenido, function(err){
		if(err)
			console.error('no se pudo escribir ', err);
		else
			console.log('se ha escrito correctamente');
	});
}

escribir(__dirname + '/archivo2.txt', 'soy un archivo nuevo', console.log);

function borrar(ruta, callback){
	fs.unlink(ruta, callback);
}

borrar(__dirname + '/archivo2.txt', console.log);
