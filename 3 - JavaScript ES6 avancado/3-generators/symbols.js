//Symbols - Identificador único

const uniqueID = Symbol('Hello') //Valor serve apenas para debug
const uniqueID2 = Symbol('Hello')

console.log(uniqueID === uniqueID2)

//Pode ser usado para gerar propriedades 'privadas' (ocultar a propriedade)

const obj = {
    [uniqueID]: 'Hello'
}
console.log(obj)

//Well know symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const interador = arr[Symbol.iterator]();

console.log(interador.next())
console.log(interador.next())
console.log(interador.next())
console.log(interador.next())
console.log(interador.next()) //vai retornar true pq a interação sobre a estrutura de dados acabou e traz um valor indefinido

const str = 'Wallan Mota'
for (let value of str){
    console.log(value)
}

//SYMBOL ITERATOR
    //Função para tornar o obj interavel
    const obj2 = {
        values: [1, 2, 3, 4],
        [Symbol.iterator](){
            let indice = 0;

            return{
                next: ()=>{
                    indice++
                    return{
                        value: this.values[indice - 1],
                        done: indice > this.values.length
                    }
                }
            }
        }
    }
    const it = obj2[Symbol.iterator]()

    for (let value of obj2){
        console.log(value)
    }

// GENERATORS -> é possivel 'Pausar funções'
    function* hello(){
        console.log('Hello')
        yield 1
        console.log('from')
        yield 2
        console.log('function!')
    }
    const itt = hello()
    console.log(itt.next())
    console.log(itt.next())
    console.log(itt.next())