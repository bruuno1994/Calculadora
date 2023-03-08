const { createApp } = Vue;

createApp({
    data() {
        return {
            visor: '0',
            caixaTexto: '0',
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            0: 0,
        }
    },
    methods: {
        alterarValor: function() {
            this.resultado = this.caixaTexto;
        },
        soma: function() {
            this.resultado = parseInt(this.numero1) + parseInt(this.numero2)
        },

        subtrair: function() {
            this.resultado = parseInt(this.numero1) - parseInt(this.numero2)
        },

        multiplicar: function() {
            this.resultado = parseInt(this.numero1) * parseInt(this.numero2)
        },

        dividir: function() {
            this.resultado = parseInt(this.numero1) / parseInt(this.numero2)
        }
    }
}).mount("#app");