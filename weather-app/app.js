const request = require('request')
const g = require('./utils/geocode')
const f = require('./utils/forecast')

const location = process.argv[2];
if(location){
g.geocode(location, (error, data)=>{
    const {lat, long, location} = data
    if(error){
        return console.log(error)
    }
    console.log(data)
    //callback chaining
    f.forecast(lat, long, (error, fcData) => {
        if(error){
            return console.log('Error', error)
        }
        console.log('You live in ' + location + '. The weather is ' + fcData)
      })
})
}else{
    console.log('Enter a location please...')
}
