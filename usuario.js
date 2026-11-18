var empleados = [
    {nombre: "Lency Lorena Arredondo Pimienta",
    cargo:"Auxiliar administrativo en salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"lency.arredondop@fundacioncub.edu.co",
    contacto:"Tel 4455900 ext. 1608"
    },
    {nombre: "Luis Fernando Bohorquez Uribe",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"luisf.bohorquez@fundacioncub.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Ruth Molly Sepulveda Mejia",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"ruth.sepuveda@fundacioncub.edu.co",
    contacto:"Tel 4455900 ext. 1604"
    },
    {nombre: "Claudia Patricia Bedoya Munoz",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"claudia.bedoya@fundacioncub.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Ángel Gómez Taboada",
    cargo:"Tecnólogo Administrativo en Salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"angel.gomezt@fundacioncub.edu.co",
    contacto:"Tel 4455900 ext. 1609"
    },
    {nombre: "Silvia Elena Betancur Alvarez",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"silviae.betancur@fundacioncub.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    /*{nombre: "Vanessa Viana Sáenz",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Fundación Clínica Universitaria Bolivariana",
    correo:"vanessa.viana@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },*/
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

var usuario1 ="Lency"
var usuario2 ="Fernando"
var usuario3 ="Molly"
var usuario4 ="Claudia"
var usuario5 ="Angel"
var usuario6 ="Silvia"
/*var usuario7 ="Vanessa"*/

function mostrarNombreUsuario(usuario){
    var Lency = nombreEmpleados[0];
    var Fernando = nombreEmpleados[1];
    var Molly = nombreEmpleados[2];
    var Claudia = nombreEmpleados[3];
    var Angel = nombreEmpleados[4];
    var Silvia = nombreEmpleados[5];
    /*var Vanessa = nombreEmpleados[6];*/

    if(usuario === usuario1){
        return Lency
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Molly
    };
    if(usuario === usuario4){
        return Claudia
    };
    if(usuario === usuario5){
        return Angel
    };
    if(usuario === usuario6){
        return Silvia
    };
    /*if(usuario === usuario7){
    return Vanessa
    };*/
};

function mostrarNombreCargo(usuario){
    var Lency = nombreCargo[0];
    var Fernando = nombreCargo[1];
    var Molly = nombreCargo[2];
    var Claudia = nombreCargo[3];
    var Angel = nombreCargo[4];
    var Silvia = nombreCargo[5];
    /*var Vanessa = nombreCargo[6];*/

    if(usuario === usuario1){
        return Lency
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Molly
    };
    if(usuario === usuario4){
        return Claudia
    };
    if(usuario === usuario5){
        return Angel
    };
    if(usuario === usuario6){
        return Silvia
    };
    /*if(usuario === usuario7){
    return Vanessa
    };*/
};

function mostrarNombreCorreo(usuario){
    var Lency = nombreCorreo[0];
    var Fernando = nombreCorreo[1];
    var Molly = nombreCorreo[2];
    var Claudia = nombreCorreo[3];
    var Angel = nombreCorreo[4];
    var Silvia = nombreCorreo[5];
    /*var Vanessa = nombreCorreo[6];*/

    if(usuario === usuario1){
        return Lency
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Molly
    };
    if(usuario === usuario4){
        return Claudia
    };
    if(usuario === usuario5){
        return Angel
    };
    if(usuario === usuario6){
        return Silvia
    };
    /*if(usuario === usuario7){
        return Vanessa
    };*/
};

var motivo1 ="Cercanía"
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
        return "Paciente el cual durante la hospitalización y tratamiento quirúrgico superó el tope establecido por el SOAT y requiere seguir la atención y/o excedentes en su EPS."
    };
    if(motivo === motivo6){
        return "Paciente solicita corte de cuenta para trámites legales."
    };
    if(motivo === motivo7){
        return ""
    };
};
