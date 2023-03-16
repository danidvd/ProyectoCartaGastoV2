var mesAccidente = [
    {nombre:"01",
    nombreMes:"enero"
    },
    {nombre:"02",
    nombreMes:"febrero"
    },
    {nombre:"03",
    nombreMes:"marzo"
    },
    {nombre:"04",
    nombreMes:"abril"
    },
    {nombre:"05",
    nombreMes:"mayo"
    },
    {nombre:"06",
    nombreMes:"junio"
    },
    {nombre:"07",
    nombreMes:"julio"
    },
    {nombre:"08",
    nombreMes:"agosto"
    },   
    {nombre:"09",
    nombreMes:"septiembre"
    },
    {nombre:"10",
    nombreMes:"octubre"
    },
    {nombre:"11",
    nombreMes:"noviembre"
    },
    {nombre:"12",
    nombreMes:"diciembre"
    },
];

var nombreMesAccidenteNumero = mesAccidente.map(function(mesAto){
    return mesAto.nombre;
});

var nombreMesAccienteLetra = mesAccidente.map(function(mesAto){
    return mesAto.nombreMes;
});

var mes1 = "01";
var mes2 = "02";
var mes3 = "03";
var mes4 = "04";
var mes5 = "05";
var mes6 = "06";
var mes7 = "07";
var mes8 = "08";
var mes9 = "09";
var mes10 = "10";
var mes11 = "11";
var mes12 = "12";

function mostrarNombreMes(mes){
    var mesAccidente1 = nombreMesAccienteLetra[0];
    var mesAccidente2 = nombreMesAccienteLetra[1];
    var mesAccidente3 = nombreMesAccienteLetra[2];
    var mesAccidente4 = nombreMesAccienteLetra[3];
    var mesAccidente5 = nombreMesAccienteLetra[4];
    var mesAccidente6 = nombreMesAccienteLetra[5];
    var mesAccidente7 = nombreMesAccienteLetra[6];
    var mesAccidente8 = nombreMesAccienteLetra[7];
    var mesAccidente9 = nombreMesAccienteLetra[8];
    var mesAccidente10 = nombreMesAccienteLetra[9];
    var mesAccidente11 = nombreMesAccienteLetra[10];
    var mesAccidente12 = nombreMesAccienteLetra[11];

    if(mes === mes1){return mesAccidente1};
    if(mes === mes2){return mesAccidente2};
    if(mes === mes3){return mesAccidente3};
    if(mes === mes4){return mesAccidente4};
    if(mes === mes5){return mesAccidente5};
    if(mes === mes6){return mesAccidente6};
    if(mes === mes7){return mesAccidente7};
    if(mes === mes8){return mesAccidente8};
    if(mes === mes9){return mesAccidente9};
    if(mes === mes10){return mesAccidente10};
    if(mes === mes11){return mesAccidente11};
    if(mes === mes12){return mesAccidente12};
};

