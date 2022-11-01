#!/usr/bin/env node
import { roll } from "../lib/roll.js"

var argv = process.argv.slice(2);

var side = 6;
var die = 2;
var rolls = 1;
if (argv[0] != "") {
	var cleaned = argv[0].match(/\d/g);
	cleaned = cleaned.join("");
	side = cleaned;
}
if (argv[1] != "") {
	var cleanedTwo = argv[1].match(/\d/g);
	cleanedTwo = cleanedTwo.join("");
	die = cleanedTwo;
}
if (argv[2] != "") {
	var cleanedThree = argv[2].match(/\d/g);
	cleanedThree = cleanedThree.join("");
	rolls = cleanedThree;
}
console.log(JSON.stringify(roll(side, die, rolls)));
