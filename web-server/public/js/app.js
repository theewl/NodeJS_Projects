console.log('Client side javascript file is load')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#msg1')
const message2 = document.querySelector('#msg2')

message1.textContent = ''

//Event listener for search textbox and button
weatherForm.addEventListener('submit', (e)=>{
    //Makes page not refreesh when button is clicked
    e.preventDefault()
    const location = search.value
    const bosURL = 'http://localhost:3000/weather?address=' + location
    message1.textContent = 'Loading...'
    message2.textContent = ''
    fetch(bosURL).then((res)=>{
        res.json().then((data)=>{
            if(data.error){
                message1.textContent = data.error
            }else{
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
        })
    })
})