class Math{
    sum(a, b){
        return a + b
    };
    //Função assincrona
    sum2(a, b, callback){
        setTimeout(() => {
            callback(a + b)
        }, 5)
    };
    multiply(a, b){
        return a*b
    }
}
module.exports = Math