const user = {
    name: 'Wallan',
    lastName: 'Mota'
};

// Recuperando as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recuperando os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Wallan Mota'});//Nao recomendado pois altera obj principal
console.log('\nAdiciona a propriedade fullName no objeto user: ', user) 
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 29}))

// Previne todas as alterações de um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj); //Nao deixa alterar nada

newObj.foo = 'changes'
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nObjeto newObj após as alterações: ', newObj)

// Permite apenas a alteração de propriedadas existentes em um objeto
const person = {name: 'Joao'};
Object.seal(person);

person.name = 'Joao Silva';
delete person.name;
person.age = 30;

console.log('\nObjeto person após as alterações: ', person)

