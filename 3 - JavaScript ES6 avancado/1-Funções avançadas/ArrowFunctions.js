// Tradicional
    function funcaoTradicional(parametros){
        console.log(parametros)
    }
    funcaoTradicional('Função tradicional executando')

// Função com retorno
    function funcaoRetornoSum(a, b){
        return a + b
    }
    console.log(`Função com retorno = ${funcaoRetornoSum(3,5)}`)

// Anonima (Atribuida a uma variavel ou paramentro de outra função )
    var funcaoAnonima = function(parametros){
        console.log(parametros)
    }
    funcaoAnonima('Função anonima executando')

// ### ARROW FUNCTIONS ### => (São anonimas)
                   //(Não é possivel chamar uma arrow function acima de onde ela foi declarada)
                   //(Contexto local que estiver dentro das {} ao usar o this)
    //Simples
        var sum = (a, b) => a + b //return implicito
        console.log(`Soma = ${sum(5, 5)}`)
    // Statements
        var sum2 = (a, b) => {
            if(a>b){
                return a + b
            }
        }
        console.log(`Soma 2 = ${sum2(6, 5)}`)
    // Apenas um argumento
        var sum3 = a => a + 5 // Posso omitir os parenteses 
        console.log(`Soma 3 = ${sum3(5)}`)
    // Retorno Objeto
        var createObj = () => ({test: 123});
        console.log('Retorno Objeto = ', createObj())

// CONSUMIR OBJETOS
        // Funcoes construtoras (Não é possivel com arrow function)
            function car(){
                this.foo = 'bar'
            }
            console.log('Função construtora = ', new car())
