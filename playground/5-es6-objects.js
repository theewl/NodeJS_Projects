var name = 'eric'
var age = 24

var obj = {
    name,
    age,
    addy: 'Irvine, CA'
}

console.log(obj)

//object destructing
const product = {
    label: 'eggs',
    price: 3,
    stock: 43,
    salesPrice: undefined
}

//list properties that you want to use
//Can change name of property's key
//Can add a new property
/*
const {label:pLabel, stock, brand = 'chics'} = product 
console.log(pLabel)
console.log(stock)
console.log(brand)
*/

const transaction = (type, { price }) =>{
    console.log(price)
}

transaction('order', product)