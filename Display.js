class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }
    }

    // Con .slice() lo recorto entre los valores dados entre el paréntesis
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        //Si es distinto de igual, calcular. 
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        //Setea el nuevo valorAnterior en caso de que se pueda actualizar. 
        this.valorAnterior = this.valorActual || this.valorAnterior;
        //Setea el nuevo valorActual en caso de que se pueda actualizar. 
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        //Si hay un . o si valorActual incluye uno, con return evita que haya más de uno
        if (numero === '.' && this.valorActual.includes('.')) return
        //Setea el nuevo valorActual y se pasa a string.
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        //Deshace el string y guarda ese valor en una constante
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        //Si algun valor no es un nro entonces retorna. En cambio sino, analiza tipoOperacion y utiliza la clase Calculadora.
        if (isNaN(valorActual) || isNaN(valorAnterior)) {
            return
        } else {
            this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual)
        }
    }


}