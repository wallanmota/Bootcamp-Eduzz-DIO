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
    printSum(req, res, a, b){
        res.load('index', a+b)
    }
}
module.exports = Math