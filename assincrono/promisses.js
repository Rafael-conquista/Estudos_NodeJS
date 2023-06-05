function rand(min, max){
    min*=1000
    max*=1000
    return Math.floor(Math.random()*(max-min)+min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) =>{
        if(typeof msg !== 'string') reject(false)
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}


const promisses = [
    'Primeiro valor',
    esperaAi("primeira promisse", 3000),
    esperaAi("primeira promisse2", 500),
    esperaAi("primeira promisse3", 1000),
    'outro valor'
]

// Promise.all(promisses)
// .then(valor => {
//     console.log(valor)
// })
// .catch(error =>{
//     console.log(error)
// })

// async await

// esperaAi('fase1', rand(0,3))
// .then(valor => {
//     console.log(valor)
//     return esperaAi("Fase 2", rand(0,4))
// })
// .then(fase =>{
//     console.log(fase)
//     return esperaAi('Fase 3', rand(0,3))
// })
// .then(fase=>{
//     console.log(fase)
// })
// .catch(error => console.log(error))

async function executa(){
    try{
        const fase1 = await esperaAi('fase1', rand(0,3))
        console.log(fase1)
        const fase2 = await esperaAi('fase2', rand(0,3))
        console.log(fase2)
        const fase3 = await esperaAi('fase3', rand(0,3))
        console.log(fase3)
        console.log('terminamos na fase', fase3)
    }catch(e){
        console.log(e)
    }
}

executa()