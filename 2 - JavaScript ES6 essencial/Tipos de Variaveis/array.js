const user = ['Joao',  'Maria', 'Jose'];

const gender = {
    man: Symbol('M'),
    woman: Symbol('W')
};

const persons = [
    {
        name: 'Joao',
        age: 26,
        gender: gender.man
    },
    {
        name: 'Maria',
        age: 43,
        gender: gender.woman
    },
    {
        name: 'Jose',
        age: 18,
        gender: gender.man
    }
];

// Retorna a quantidade de intems de um array
console.log('Items: ', persons.length);

// Verifica se é array
console.log('\nA variavel person é um array: ', Array.isArray(persons));

// Interar os items do array
persons.forEach(person => {
    console.log('Nome: ', person.name)
});

persons.forEach((person, index, arr) => {
    console.log('Nome: ', person.name, '/ Index: ', index, '/ Array completo: ', arr)
});

// Filtrar array (Não altera a referencia do objeto, retorna um novo)
const mens = persons.filter(person => person.gender === gender.man);
console.log('\nNova lista apenas com homens: ', mens);

// Retornar um novo Array (Não altera a referencia do objeto, retorna um novo)
const personsWithCourse = persons.map(person =>{
    person.course = 'Introdução ao JavaScript';
    return person;
});
console.log('\nPessoas com a adição do course: ', personsWithCourse);

// Transforma o array em outro tipo (Não altera a referencia do objeto, retorna um novo)
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age
}, 0/*Valor inicial*/);

console.log('\nSoma de idade das pessoas: ', totalAge)

// Juntando operações
const totalEvenAge = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age
                            }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par: ', totalEvenAge)