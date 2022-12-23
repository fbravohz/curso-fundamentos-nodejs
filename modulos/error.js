function serompe(){
	return 3 + z;
}

try{
	serompe();
} catch(err) {
	console.error('vaya, algo ase ha roto...');
	console.error(err);
}

console.log('esto es el final');

//Los errores se escalan de funcion en funcion hasta
//arriba para encontrar un manejador para dicho error

//manejo de errores asincronos

function seRompeAsincrona(cb){
	setTimeout(function(){
		try{
			return 3 + z;
		} catch(err) {
			console.error('error en funcion asincrona');
			console.error(err.message);
			cb(err);
		}
	});
}

seRompeAsincrona(function(){
	console.log('SE ROMPIO TODO');
});
