// Forma antiga, quando não sei quantos argumentos a função vai receber
    function sum(a, b){
        var value = 0
        for (var i=0; i < arguments.length; i++){
            value += arguments[i]
        }
        return value
    }
    console.log(sum(5, 5, 8, 7))

//REST OPERATOR ...
//com o rest operator os parametros são retornados em um array
    function sumRest(...args){
        return args.reduce((valorAcumulado, valorInteracao) => valorAcumulado + valorInteracao, 0);
    }
    console.log(sumRest(5, 5, 8, 7))

    const mutiply = (...args) => args.reduce((acc, value) => acc * value, 1)
    console.log(mutiply(5, 5, 4))

//SPREAD OPERATOR ...
//tem a função de quebrar os items e passar para algum lugar
//peda os items do array e transforma em parametro para a função
//pode ser usado em strings, arrays, literal objects e objetos iteraveis
    const mutiply2 = (...args) => args.reduce((acc, value) => acc * value, 1)

    function sumSpread(...args){
        return mutiply2(...args)
    }

    console.log(sumSpread(5, 5, 5, 2, 3))

    //String -> Spread
    const str = 'Digital Innovation One';
    function logArgs(...args){
        console.log(args)
    }
    logArgs(...str) 

    //Array -> Spread
    const arr = [1, 2, 3, 4 ];
    logArgs(...arr)

    //Construindo array -> Spread
    const arr2 = [...arr, 5, 6, 7] //transformou cada item do primeiro array em items do segundo array
    console.log(arr2)

    //Objeto literal -> Spread
    //Só é possivel utilizar spread operator em objetos literais para construir novos objetos
    const obj = {
        test: 123
    }
    const obj2 = {
        ...obj,
        test2: 'Hello'
    }
    console.log(obj2)