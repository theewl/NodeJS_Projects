const greeter = (name= 'someone',age = 21) =>{
    if(name == 'someone'){
        console.log("hello "+ name +'. I am not ' + age + ' years old!') 
    }else{
        console.log("hello "+ name +'. I am also ' + age + ' years old!') 
    }
}

greeter('eric',24)

greeter()