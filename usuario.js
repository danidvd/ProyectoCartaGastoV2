var empleados = [
    {nombre: "Ruth Molly Sepulveda Mejia",
    cargo:"Tecnologo Administrativo en salud",
    ips:"Clinica Universitaria Bolivariana",
    correo:"ruth.sepulveda@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Luis Fernando Bohorquez Uribe",
    cargo:"Tecnologo Administrativo en salud",
    ips:"Clinica Universitaria Bolivariana",
    correo:"luisf.bohorquez@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Catalina Martinez Betancur",
    cargo:"Tecnologo Administrativo en salud",
    ips:"Clinica Universitaria Bolivariana",
    correo:"catalinam.martinez@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Diana Carolina Lopez Aristizabal",
    cargo:"Tecnologo Administrativo en salud",
    ips:"Clinica Universitaria Bolivariana",
    correo:"dianaca.lopez@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Daniel David Usuga",
    cargo:"Tecnico Administrativo en salud",
    ips:"Clinica Universitaria Bolivariana",
    correo:"daniel.usuga@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
];

// Me trae nombre de Empleados

var nombreEmpleados = empleados.map(function(empleado){
    return empleado.nombre;
});

// Me trae datos de cargo

var nombreCargo = empleados.map(function(empleado){
    return empleado.cargo
});

// Me trae datos e correo

var nombreCorreo = empleados.map(function(empleado){
    return empleado.correo
});

//Filtro me trae datos de objeto 

var empleadosFiltrados = empleados.filter(function(empleado){
    return empleado.nombre
});

// Me trae informacion de arrays

var encuentraEmpleados = empleados.find(function(empleado){
    return empleado.nombre === nombreEmpleados;
});

console.log(nombreEmpleados);
console.log(nombreCargo);
console.log(nombreCorreo);
console.log(empleadosFiltrados);

// Aqui van los datos del funcionario

var usuario1 ="Molly"
var usuario2 ="Fernando"
var usuario3 ="Catalina"
var usuario4 ="Carolina"
var usuario5 ="Daniel"

function mostrarNombreUsuario(usuario){
    var Molly = nombreEmpleados[0];
    var Fernando = nombreEmpleados[1];
    var Catalina = nombreEmpleados[2];
    var Carolina = nombreEmpleados[3];
    var Daniel = nombreEmpleados[4];

    if(usuario === usuario1){
        return Molly
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Catalina
    };
    if(usuario === usuario4){
        return Carolina
    };
    if(usuario === usuario5){
        return Daniel
    };
};

function mostrarNombreCargo(usuario){
    var Molly = nombreCargo[0];
    var Fernando = nombreCargo[1];
    var Catalina = nombreCargo[2];
    var Carolina = nombreCargo[3];
    var Daniel = nombreCargo[4];

    if(usuario === usuario1){
        return Molly
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Catalina
    };
    if(usuario === usuario4){
        return Carolina
    };
    if(usuario === usuario5){
        return Daniel
    };
};

function mostrarNombreCorreo(usuario){
    var Molly = nombreCorreo[0];
    var Fernando = nombreCorreo[1];
    var Catalina = nombreCorreo[2];
    var Carolina = nombreCorreo[3];
    var Daniel = nombreCorreo[4];

    if(usuario === usuario1){
        return Molly
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Catalina
    };
    if(usuario === usuario4){
        return Carolina
    };
    if(usuario === usuario5){
        return Daniel
    };
};

var motivo1 ="Cercania"
var motivo2 ="Disponibilidad"
var motivo3 ="Oportunidad"
var motivo4 ="Tope (ambulatorio)"
var motivo5 ="Tope (Hospitalario)"
var motivo6 ="Tramites"
var motivo7 ="Otra"

function mostrarMotivo(motivo){
    if(motivo === motivo1){
        return ", se expide carta, ya que paciente indica que gestionara servicio con institución cercana a su lugar de residencia."
    };
    if(motivo === motivo2){
        return ", se expide carta, ya que la institución no cuenta con el servicio."
    };
    if(motivo === motivo3){
        return ", se expide carta, ya que la institución no cuenta con disponibilidad de citas, paciente indica que gestionara servicio con otra institución."
    };
    if(motivo === motivo4){
        return "Paciente que supera tope de SOAT, se expide carta para gestión de servicios por parte de la EPS."
    };
    if(motivo === motivo5){
        return "Paciente que supera tope de SOAT durante atención intrahospitalaria, se expide carta para gestión de servicios por parte de la EPS."
    };
    if(motivo === motivo6){
        return "Paciente solicita corte de cuenta para trámites legales."
    };
    if(motivo === motivo7){
        return ""
    };
};
