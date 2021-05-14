console.clear()
console.log(process.pid)
console.log(process.versions.node)
//console.log(process.env)
//console.log(process.argv)
// $ node globalprocess ravinder
// $ node globalprocess ravinder singh 
// $ node globalprocess "ravinder singh rana" 

const [,,firstName,lastName] =process.argv
console.log(`
 Your name is ${firstName} ${lastName}
`)
// $ node globalprocess --user "ravinder singh rana" --greeting Welcome

const grab=flag=>{ 
    let indexAfterFlag= process.argv.indexOf(flag) +1;
    return process.argv[indexAfterFlag]
}
const greeting=grab("--greeting")
const user=grab("--user")
console.log(` ${greeting}, ${user} `)


