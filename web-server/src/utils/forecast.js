const request = require('request')

const forecast = (long, lat, callback) =>{
    const url = 'https://api.darksky.net/forecast/afe1f770d609b05fe10578c6f4bb2768/' + lat + ',' + long

    request({url:url, json: true}, (error, {body})=>{
        const {daily} = body
        if(error){
            callback('check internet')
        }else if(body.error, undefined){
            callback('check url', undefined)
        }else{
            callback(undefined, daily.data[0].summary)
        }
    }) 
}

module.exports = {
    forecast:forecast,
}