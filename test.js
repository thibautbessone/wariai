const Picker = require('./lib/Picker');

let obj = '[{ "option": "test1", "weight": 1},{ "option": "test2", "weight": 2},{ "option": "test3", "weight": 3},{ "option": "test4", "weight": 4}]';
let picker = new Picker(obj);

console.log(picker.pickOneWithWeight().toString());
console.log(picker.getRandomizedList());
