const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGhlZXdsIiwiYSI6ImNrMTM0eDRqMTA1c3UzbW1vcjQyZ2xpaDQifQ.40GCx9ADYPJUi5Tr4TdWWQ'
    request({url:url, json:true}, (error, {body})=>{
        const {features} = body
        if(error){
            callback('check internet')
        }else if(features.length == 0){
            callback('check url')
        }else{
            callback(undefined, {
                long: features[0].center[1],
                lat: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}
module.exports = {
    geocode: geocode,
}