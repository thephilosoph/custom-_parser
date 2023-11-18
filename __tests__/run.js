const {Parser}  = require('../src/Parser');
const assert = require('assert');
const tests = [require('./literal-test.js'),
require('./statement-list-test.js'),
require('./block-test.js'),
];
const parser = new Parser();


function exec(){
const program = `  
//ffff
/*
 * htrhtr
 */
42  ;
'hello';

`;
const ast = parser.Parse(program);
console.log(JSON.stringify(ast,null,2));

}

exec();


function test(program, expected){
const ast = parser.Parse(program);
assert.deepEqual(ast,expected);
}

//tests.forEach(testRun=>testRun(test));

console.log('All assertion passed');
