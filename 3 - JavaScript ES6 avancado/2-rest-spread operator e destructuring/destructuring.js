// Detructing Assignment
// Pode ser usado para definir variaveis ou em uma lista de argumentos de uma função

var arr = ['Apple', 'Banana', 'Orange',['Tomato']];
//Sem destructing
    var apple = arr[0];
    var banana = arr[1];
    var orange = arr[2];
    var tomato = arr[3][0];

//Destructing
    var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato, tomato2)

//OBJETOS
    var obj = {
        name: 'Joao',
        props:{
            age: 29,
            favoriteColors: ['black', 'blue']
        }
    }
    //Sem destructing
    // var name = obj.name;
    // var age = obj.props.age;
    // var color1 = obj.props.favoriteColors[0] 

    //Destructing
    // var { name: nome } = obj;
    var { name, props: {age, favoriteColors: [color1, color2]}} = obj;
    console.log(name, age, color1, color2)

//FUNCTIONS
    //Sem destructing
        function sum(arr){
            return arr[0] + arr[1]
        }
        console.log(sum([5,5]))

        function sum2(arr){
            a = arr[0]
            b = arr[1]
            return a + b
        }
        console.log(sum2([5,5]))

    //Destructing
        function sum3([a, b]){
            return a + b
        }
        console.log(sum3([5,5]))