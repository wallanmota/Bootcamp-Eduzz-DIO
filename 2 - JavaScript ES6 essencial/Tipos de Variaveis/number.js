const myNumber = 12.4032;

// Transforma numero para string
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${typeof numberAsString} ${numberAsString}`)

// Retorna numero com o numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals)

// Transforma uma string em float
console.log('\nString parseada para Float: ', parseFloat('13.22'))

// Transforma uma string em int
console.log('\nString parseada para Int: ', parseInt('13.20'))