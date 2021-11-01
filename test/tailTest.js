const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


const num = [1];
tail(num);
assertEqual(num.length, 3);


const empt = [];
tail(empt);
assertEqual(empt.length, 3);