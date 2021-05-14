console.clear()
const waitTime=3000
const waitInterval=500
let currentTime=0
console.log(`Setting  ${ waitTime/1000} seconds delay`)

const timerFinished=()=>{
    clearInterval(interval) 
    console.log("done")
} 

const incTime=()=>{
    currentTime+=waitInterval
    console.log(`waiting ${currentTime/1000} seconds`)
}

const interval=setInterval(incTime, waitInterval)
setTimeout(timerFinished, waitTime)
