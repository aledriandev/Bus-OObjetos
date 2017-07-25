var celdas = document.getElementsByTagName('td');
var _nombre = document.getElementById("nombre");
var _apellido = document.getElementById("apellido");
var _dni = document.getElementById("dni");
var _asiento = document.getElementById("mostrar").textContent.substr(11,2);

for (var i = 0; i < celdas.length; i++) {
    celdas[i].onclick = function (event) {
    	bus.celdaSeleccionada(event.target);
    };
}

function Usuario(){
	this.nombre = _nombre.value;
	this.apellido = _apellido.value;
	this.dni = _dni.value;
	this.asiento = _asiento
}

function Bus (){
	this.celdas = document.getElementsByTagName('td');
	this.celda = undefined;
	this.usuarios = [];
	this.celdaSeleccionada = function (asientoSeleccionado){
		this.celda = asientoSeleccionado;
		var mensaje=" esta desocupado"
		document.getElementById("mostrar").innerHTML = "El asiento " + (event.target.textContent)+mensaje;
		
		

		for (var i = 0; i < this.usuarios.length; i++) {
			if(this.celda == undefined)
	    		mensaje=" esta ocupado"    	
		}
/*
		if(mensaje==" esta ocupado"){
			for(var i=0; i<this.usuarios.length; i++){
				if(usuarios[i].n==_asiento){
					_nombre.placeholder=usuarios[i].nombre;
					_apellido.placeholder=usuarios[i].apellido;
					_dni.placeholder=usuarios[i].dni;
				}	
			}
	    	_nombre.readOnly = true;
			_apellido.readOnly = true;
			_dni.readOnly = true;
	    }else{
	    	_nombre.placeholder="Nombre de Usuario";
			_apellido.placeholder="Apellido de Usuario";
			_dni.placeholder="DNI de Usuario";
	    	_nombre.readOnly = false;
			_apellido.readOnly = false;
			_dni.readOnly = false;
	    }

		limpiar();*/
		}
	this.reservar = function(){
		const persona = new Usuario();
		this.usuarios.push(persona);	
	}

}

var bus = new Bus();

var reservarButton = document.getElementById("buttonReservar");
reservarButton.onclick = function(){
	bus.reservar();
	bus.celda.style.backgroundColor = "DodgerBlue";
};