console.log('Hello World!');

console.log('Variables and Constants');
global1 = 10;
console.log(global1);
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped);
const constant1 = global1
                  + functionScoped
                  - blockScoped;
console.log(constant1);

console.log('Variable types');
let numberVariable = 123;
console.log(numberVariable);
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = 'Hello World!';
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean);

console.log('Boolean Variables');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);
let sortaTrue = '1' == 1
console.log(sortaTrue);
let notTrue = '1' === 1
console.log(notTrue);

