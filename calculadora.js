const { createApp } = Vue;

createApp({
    data() {
        return {
            resultado: 000,
            calculo: ""
        }
    },
    methods: {
        alterarValor(caracter) {
            this.calculo += caracter
        },
        resultadoCalculo() {
            this.resultado = eval(this.calculo)
        },
        limparVisor() {
            this.resultado = 0,
            this.calculo = 0
        }
        }
    }
).mount("#app");