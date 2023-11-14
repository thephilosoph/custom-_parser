const {Parser}  = require('../src/Parser');
const parser = new Parser();
const program = `  
//ffff
/*
 * htrhtr
 */
4    `;
const ast = parser.Parse(program);
console.log(JSON.stringify(ast,null,2));
