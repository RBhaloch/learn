console.clear()
const waitTime=3000
const waitInterval=500
let currentTime=0

const timerFinished=()=>{
    clearInterval(interval) 
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log("done")
} 

const incTime=()=>{
    currentTime+=waitInterval
    const p=Math.floor((currentTime/waitTime) * 100)
    //console.log(`waiting ${currentTime/1000*100} seconds`)
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(`waiting ......... ${p}%`)
}

const interval=setInterval(incTime, waitInterval)
setTimeout(timerFinished, waitTime)
