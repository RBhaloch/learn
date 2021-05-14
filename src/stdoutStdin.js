//const { stdout } = require("node:process");
//console.log("Hello ")
//console.log("world \n\n")

//process.stdout.clearLine()
console.clear()
process.stdout.write("Hello ")
process.stdout.write("world \n\n")

const questions =[
    "What is your name?",
    "What is your hobby?",
    "What is your favourite programming language?"
]
const ask=(i=0) =>{
 process.stdout.write( `\n\n\n ${questions[i]} `)
}

ask(0)


// process.stdin.on("data",data=>{
// process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
// process.exit()
// })

const answers=[]

process.stdin.on("data",data=>{
    answers.push(data.toString().trim())
    if (answers.length<questions.length)
    {
     ask(answers.length)
    }
    else
    {
        process.exit()
    }
})

process.on("exit",()=>{
    const [name, hobby, lang]=answers
    process.stdout.write(`
    ${name} your hobby is ${hobby} and favourite programming language is ${lang} 
    `)
})