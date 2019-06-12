const Picker = require('./index');

let obj = '[{ "option": "test1", "weight": 1},{ "option": "test2", "weight": 2},{ "option": "test3", "weight": 3},{ "option": "test4", "weight": 4}]';
let picker = new Picker(obj);

console.log(JSON.stringify(picker.pickOneWithWeight()));
console.log(JSON.stringify(picker.getRandomizedList()));
