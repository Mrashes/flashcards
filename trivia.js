let Basic = require('./basic.js');
let Cloze = require('./cloze.js')

var george = new Basic("Who was the first president", "George Washington")
var georgeAgain = new Cloze("George Washington was the first president", "George Washington")

// console.log(george)
console.log(georgeAgain)