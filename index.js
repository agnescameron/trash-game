const assert = require('assert'); // N.B: Assert module comes bundled with Node.js.
const CLI         = require('clui');
const Spinner     = CLI.Spinner;
const inquirer  = require('./lib/inquirer');
const graphics = require('./lib/graphics');
const information = require('./lib/information');
const status = new Spinner('running day...');



// game state, updated for stats
const STATE = {
  buildings: {
    ML: true,
    arch: false,
    sloan: false
  },
  money: 10000,
  staff: {
  	cleaners: 1,
  	recycling: 0,
  	supervisors: 0,
  },
  waste: {
  	recycling: 0,
  	compost: 0,
  	landfill: 100
  },
  population: {
  	students: 3,
  	faculty: 1,
  },
  day: 0
}

var Building = {
	rooms: ''
}

var Student = {
	careLevel: ''
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const runDay = async () => {
	status.start();
	graphics.drawRoom();
	await sleep(2000);
	status.stop();
}

function getStats(){
	console.log('game state is', STATE);
}

function printMessages(){
	console.log('you have 0 new messages');
}

const getName = async () => {
  const username = await inquirer.askName();
  console.log('hi', username.username, `, let's play!`);
}


const main = async () => {
	await information.onboard();
	var playing = true;
	await getName();
	while (playing) {
		await runDay();
		getStats();
		printMessages();
		STATE.day+=1;
	}
}

main();