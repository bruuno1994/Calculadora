const { createApp } = Vue;

createApp({
    data() {
        return {
            resultado: '',
            calculo: ""
        }
    },
    methods: {
        alterarValor(caracter) {
            this.calculo += caracter
        },
        resultadoCalculo() {
            if(eval(this.calculo) == "Infinity") {
                this.resultado = "Erro"
            } else {
                this.resultado = eval(this.calculo)
            }
            this.calculo = ''
        },
        limparVisor() {
            this.resultado = 0,
            this.calculo = ''
        }
        }
    }
).mount("#app")