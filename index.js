const assert = require('assert'); // N.B: Assert module comes bundled with Node.js.
const CLI         = require('clui');
const Spinner     = CLI.Spinner;
const inquirer  = require('./lib/inquirer');
const graphics = require('./lib/graphics')
const status = new Spinner('running day...');

var Building = {
	rooms: ''
}

var Student = {
	careLevel: ''
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const runDay = async (day) => {
	status.start();
	graphics.drawRoom();
	await sleep(2000);
	status.stop();
}

function getStats(){
	console.log('score is 0');
}

function printMessages(){
	console.log('you have 0 new messages');
}

const getName = async () => {
  const username = await inquirer.askName();
  console.log('hi', username.username, `, let's play!`);
}


const main = async () => {
	var day = 0;
	var playing = true;
	await getName();
	while (playing) {
		await runDay(day);
		getStats();
		printMessages();
		day+=1;
	}
}



console.log('welcome to trashGame');
main();