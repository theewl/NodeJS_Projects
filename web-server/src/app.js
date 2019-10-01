const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

//Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static dir to serve
app.use(express.static(publicDirPath))

//For html.hbs
app.get('', (req,res)=>{

    //Matches with index.hbs
    res.render('index', {
        title: 'Weather-App',
        name: 'Eric'

    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'Weather-App',
        name: 'Eric'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        msg: 'How can i help?',
        title:'Weather-App',
        name:'Eric'
    })
})
//2 args - route(help) and function(request, response) 
app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'there is no address term'
        })
    }
    geocode.geocode(req.query.address,(error, {long,lat,location} = {})=>{
        if(error){
            return res.send({error})
        }
        forecast.forecast(long, lat,(error, forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'you need a search term'
        })
    }

    res.send({
        products: []
    })
})

//* - wildcard
app.get('/help/*', (req,res)=>{
    res.render('error',{
        title: 'Weather-App',
        name: 'Eric',
        msg:'Help article not found'
    })
})

//Every other page will load...
app.get('*',(req,res)=>{
    res.render('error',{
        title: 'Weather-App',
        name: 'Eric',
        msg: 'Page not found'
    })
})

//Start server (server # and callback)
app.listen(3000, ()=>{
    console.log('Server started!')
})
