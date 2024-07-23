console.log('--------Example 1: global object, console-----')
console.log('Welcome to NodeJS by Ahmad Adil Karim')
console.warn('Warning! The file might be corrupted')
console.error('Syntax Error! Check spelling')
console.trace('Trace error in line')

console.log('-----Example 2: Global object, Timer-------')
setTimeout(() => {console.warn('Time is over')}, 3000);

const count = 9
const timer = setInterval(() => {
  console.log(`Counting ${count}`)
  count = 1 
  if (count == 0){
    clearInterval(timer)
  }
}, interval);