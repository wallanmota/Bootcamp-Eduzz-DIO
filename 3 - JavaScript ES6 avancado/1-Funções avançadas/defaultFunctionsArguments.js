function multiply(a, b = 1){
    return a * b
}
console.log(multiply(5, 0))

// Referenciando outro parametro
//Para referenciar o parametro o valor tem que vir posteriomente
function multiply2(a, b = a){ 
    return a * b
}
console.log(multiply2(5))

// lazy evaluation
function randomNumber(){
    return Math.random() * 10
}
function multiply3(a, b = parseInt(randomNumber())){
    return a * b
}
console.log(multiply3(5))