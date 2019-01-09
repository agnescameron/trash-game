const log = console.log;
const characters = require('./characters');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



async function runSubBins(STATE){
	log(`bought 1 recycling bin for $50 ${characters.recycling}`);
	log('share of waste to recycling increased by 0.2%');
	STATE.waste.landfill = STATE.waste.landfill - 0.2;
	STATE.waste.recycling = STATE.waste.recycling + 0.2;
	STATE.money = STATE.money - 50;
	log(`percentage waste to landfill now at ${STATE.waste.landfill.toFixed(1)}`);	
	log(`budget now at ${STATE.money}`);		
	await sleep(2000);
}

async function runSubStaff(STATE){
	log(`employed a recycling staff member, ${characters.staff}`);
	log('recycling increased by 10%');
	STATE.staff.recycling = STATE.staff.recycling + 1;
	STATE.waste.landfill = STATE.waste.landfill - 10;
	STATE.waste.recycling = STATE.waste.recycling + 10;
	log(`percentage waste to landfill now at ${STATE.waste.landfill.toFixed(1)}`);	
	log(`budget now at ${STATE.money}`);
	await sleep(2000);
}

async function subMenu(STATE, MENU) {
	if(MENU.submenu === 'bins'){
		await runSubBins(STATE);
	}
	else if(MENU.submenu === 'staff'){
		await runSubStaff(STATE);
	}	
	else if(MENU.submenu === 'offsite'){
		await runOffSite(STATE);
	}
}

const keypress = async (MENU) => {

console.log('keypress');
  // process.stdin.setRawMode(true)
  // return new Promise(resolve => process.stdin.on('keypress', (str, key) => {
	 //  if (key.ctrl && key.name === 'c') {
	 //    process.exit();
	 //  } 
	 //  else if(key.name === 'b'){
	 //  	MENU.submenu = 'bins';
	 //  }
	 //  else if(key.name === 's'){
	 //  	MENU.submenu = 'staff';
	 //  }
	 //  else if(key.name === 'o'){
	 //  	MENU.submenu = 'offSite';
	 //  }
	 //  else if(key.name === 'e'){
	 //  	MENU.submenu = 'exit';
	 //  }
	 //  process.stdin.setRawMode(false);
	 //  process.stdin.resume();
	 //  resolve();
  // }))
}

module.exports = {

	runRecycling: async (STATE, MENU) => {
		log(chalk.bold('in recycling'));
		log(chalk.bold('\033c'));
		log(chalk.bold(`this is the recycling menu
-----------------------
`));
		log(chalk.bold(`to purchase recycling bins, press 'b'`));
		log(chalk.bold(`to hire recycling staff, press 's'`));
		log(chalk.bold(`to manage the off-site relationship, press 'o'




			press 'e' to exit`));

		await keypress(MENU);
		await subMenu(STATE, MENU);
	    MENU.submenu = '';
	},


}