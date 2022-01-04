// Callback e Promises

// Metodo antigo de callback 
    function doSomething(callback){
        setTimeout(function(){
            // did something
            callback('First data');
        },1000); 
    }
    function doOtherThing(callback){
        setTimeout(function(){
            // did other thing
            callback('Second data');
        },1000)
    }
    function doAll(){
        try {
            doSomething(function(data){
                var processedData = data.split('');

                try{
                    doOtherThing(function(data2){
                        var processedData2 = data2.split('');

                        try{
                            setTimeout(function(){
                                console.log(processedData, processedData2)
                            },1000)
                        }catch(err){
                            //handle error
                        }
                    })
                }catch(err){
                    //handle error
                }
            });
        }catch(err){
            //handle erro
        }
    }
    // doAll()

// PROMISES
    // Status:
        // Pending: Quando está pendente / em execução
        // Fulfilled: Quando terminou de executar
        // Reject: Quando acontece algum erro
const doSomethingPromise = () => new Promise((resolve, reject)=>{
    setTimeout(function(data){
        //did something
        resolve('First Data');
    }, 1000);
})
const doOtherThingPromise = () => new Promise((resolve, reject)=>{
    // throw new Error('Algo deu errado')//Erro forçado
    setTimeout(function(data2){
        // did other thing
        resolve('Second Data');
    }, 1000)
})
// console.log(doSomethingPromise); //Pending
// doSomethingPromise.then(data => console.log(data)); //Fulfilled
// doOtherThingPromise.then(data => console.log(data)); //Reject 

// doOtherThingPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error)) // Error com tratativa

//Executa de forma sequencial
// doSomethingPromise()
//     .then(data =>{
//         console.log(data.split(''));
//         return doOtherThingPromise();
//     })
//     .then(data2 =>{console.log(data2.split(''))})
//     .catch(error => console.log('Ops', error));

//Executa as duas funções ao mesmo tempo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err)
});
