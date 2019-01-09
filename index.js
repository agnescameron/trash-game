const assert = require('assert'); // N.B: Assert module comes bundled with Node.js.
const inquirer  = require('./lib/inquirer');
const graphics = require('./lib/graphics');
const messages = require('./lib/messages');
const stats = require('./lib/stats');
const staff = require('./lib/staff');
const recycling = require('./lib/recycling')
const characters = require('./lib/characters');
// const status = new Spinner('running day...');
const log = console.log;

// const readline = require('readline');
// readline.emitKeypressEvents(process.stdin);

const keypress = async () => {
	console.log("pressed key");

  // process.stdin.setRawMode(true)
  // return new Promise(resolve => process.stdin.on('keypress', (str, key) => {
	 //  if (key.ctrl && key.name === 'c') {
	 //    process.exit();
	 //  } 
	 //  else if(key.name === 's'){
	 //    log('staff')
	 //  	MENU.menu = 'staff';
	 //  }
	 //  else if(key.name === 'e'){
	 //  	log('education');
	 //  	MENU.menu = 'education';
	 //  }
	 //  else if(key.name === 'r'){
	 //  	log('recycling');
	 //  	MENU.menu = 'recycle';
	 //  }
	 //  process.stdin.setRawMode(false);
	 //  resolve();
  // }))
}

async function menuSelect() {
	if(MENU.menu === 'staff'){
		log('selecting staff')
		await staff.runStaff(STATE, MENU);
	}
	else if(MENU.menu === 'recycle'){
		log('selecting recycling')
		await recycling.runRecycling(STATE, MENU);
	}	
}

const MENU = {
	menu: '',
	submenu: ''
}

// game state, updated for stats
const STATE = {
  username: '',
  buildings: {
    ML: true,
    arch: false,
    sloan: false
  },
  money: 10000,
  staff: {
  	custodial: 1,
  	recycling: 0,
  	supervisors: 0,
  	managers: 0,
  },
  waste: {
  	recycling: 0,
  	compost: 0,
  	landfill: 100
  },
  population: {
  	students: 3,
  	faculty: 1,
  	labManagers: 0,
  },
  messages: 0,
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
	graphics.drawRoom(STATE);
	await sleep(2000);
}

function printMessages(){
	log('you have 0 new messages');
}


const main = async () => {
	await messages.onboard(STATE);
	var playing = true;
	while (playing) {
		console.log('playing')
		let maindiv = document.getElementById("main");
		maindiv.innerHTML = "aaaaa";
		await stats.checkStats(STATE);
		log('\033c');
		stats.printStats(STATE);		
		await runDay();
		await keypress();
		if(MENU.menu !== ''){
			await menuSelect();
		}
		//tidy up
		MENU.menu = '';
		// process.stdin.removeAllListeners('keypress');

		//print messages
		printMessages();		
		STATE.day+=1;
	}
}

main();