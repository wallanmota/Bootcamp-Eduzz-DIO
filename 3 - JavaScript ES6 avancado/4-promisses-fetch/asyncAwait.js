// ES7 - Async / Await
    // Utilizado o await para esperar uma promise resolver
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(12345)
    }, 1000)
});

const simpleFunc = async () => {
    const data = await asyncTimer()
    return data;
}
// console.log(simpleFunc())
simpleFunc()
    .then(data =>{
    console.log(data)
    })
    .catch(err => {
        console.log(err)
    })