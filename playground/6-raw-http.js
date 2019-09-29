//DON'T USE IN REAL WORLD PROJECTS!!! 
const https = require('https')

const url = 'https://api.darksky.net/forecast/afe1f770d609b05fe10578c6f4bb2768/40,-75'


const request = https.request(url, (response) => {
    //will change data 
    let data = ''

    //register a handler
    response.on('data', (chunk)=>{
        data += chunk.toString()
    })

    response.on('end', () =>{
        const bodyJSON = JSON.parse(data)
        console.log(bodyJSON)
    })
})

request.on('error', (error)=>{
    console.log('error: ' , error)
})

request.end()
