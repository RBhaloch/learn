let hello='global objects'
console.log(hello);
console.log(__dirname)
console.log(__filename)

const name = 'Ravinder Singh Rana';
console.warn(`Danger ${name}! Danger!`);

//console.error(new Error('Whoops, something bad happened'));

// assert checks for truthy
//console.assert() writes a message if value is falsy or omitted
console.assert(true, 'does nothing');
console.assert(false, 'Whoops %s work', 'didn\'t');
console.assert(false, false, 'didn\'t');
console.assert();
