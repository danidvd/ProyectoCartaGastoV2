
// Funcion para mostrar nuevo elemento cuando fecha de ingreso a la institucion es diferente a la fecha del accidente

function mostrarFechaIngreso(){
    const newElement = document.createElement("div");
    newElement.classList.add("divElemento2");
    newElement.innerHTML = 
    `<label "width:100%">
    <div style="width:20%;margin-right:1rem">
    <span><strong>Fecha Siniestro</strong></span>
    </div>
    <div style="width:80%">
    <input type="text" class="cartaDiaIngreso2" maxlength="2" name="" id="InputCartaDia2" list="diaAT" placeholder="Día" style="width: 6rem">
    <input type="text" class="cartaMesIngreso2" id="InputCartaMes2" maxlength="2" list="mesAT" placeholder="Mes" style="width: 6rem">
    <input type="text" class="annioCartaIngreso2" maxlength="4" id="InputCartaAnnio2" list="annioAT" placeholder="Año" style="width: 8rem">
    </div>
    </label>`
    document.querySelector(".container").appendChild(newElement);
};


// Funcion para mostrar nuevo elemento cuando es por tope partido entre asegurador y EPS

function mostrarSegundoTope(){
    const newElement = document.createElement("div");
    newElement.classList.add("div");
    newElement.innerHTML = `<div class="concept-left">
    <label>
    <input type="text" class="totalGasto2" name="" maxlength="8" id="InputTotalGastoDos" placeholder="Total gasto N°2" style="width: 22rem;height: auto;">
    </label>
    </div>`
    document.querySelector(".container2").appendChild(newElement);
};

var respuesta1 = "SI"
var respuesta2 = "NO"





