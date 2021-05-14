//Readline is the module that we can use to help us build an application that would ask questions of a terminal user. It's an interface around readable and writable streams that allows us to easily write code that would prompt the user and collect their answers. 

const readline=require('readline')


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("How do you like node? ",answer=>{
    console.log(answer)
})