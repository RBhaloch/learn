//Importing the core modules
//Core modules - are those node modules that you don't have to install with NPM
//These are the modules that are installed locally with your installation of Node.js and we refer to them as the core modules.

//util module - module has a lot of helper functions that we can use but specifically they have a log that's a little bit more powerful than the console log. 

//v8 module -  v8.GetHeapStatistics. GetHeapStatistics is a function that's available to us on the v8 module. 
//memory usage and our memory statistics. 
//So we'll do node core and, as you can see, this shows us the total heap size of our menu, the physical size, available size, the heap size limit, and so on and so forth.
//=path.join(__dirname,"../","wwww","files","uploads")
//You do not do this because Linux uses forward slashes ( / ), Windows uses backward slashes ( \ ). This makes your application prone to errors when you port it across
const path=require('path')
const util=require('util')
const v8=require('v8')

const dirUploads=path.join(__dirname,"..","wwww","files","uploads")
console.log(dirUploads)

util.log(path.basename(__filename))
util.log("^ The name of the current file")

util.log(v8.getHeapStatistics())
