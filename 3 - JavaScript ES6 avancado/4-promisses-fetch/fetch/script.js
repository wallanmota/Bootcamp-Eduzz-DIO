// FETCH
// Fetch só da erro na promise caso ocorra erro de rede
fetch('data.json')
            .then(response => {
                if(response.status === 200){
                    return response.json()
                }else{
                    throw new Error('Request error')
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(err =>{
                console.log('Erro: ', err)
            })