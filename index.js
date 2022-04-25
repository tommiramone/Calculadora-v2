//Display y botones.
const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)

//Toma los botones con class 'numero' en el display y los agrega a este;
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML)); 
 });

 //Toma los valores de los botones con class 'operador' para poder volcarlo la función computar();
 botonesOperadores.forEach(boton => {
     boton.addEventListener('click', () => display.computar(boton.value))
 })
