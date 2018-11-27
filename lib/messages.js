const chalk = require('chalk');
const log = console.log;
const characters = require('./characters');
const graphics = require('./graphics');
const inquirer = require('./inquirer');
const readline = require('readline');
const fs = require('fs');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', () => {
    process.stdin.setRawMode(false)
    resolve()
  }))
}


//not currently using
const readFile = async (filePath, contentArray) => {
	log('reading file');
	const rl = readline.createInterface({
	  input: fs.createReadStream(filePath),
	  crlfDelay: Infinity
	});

	rl.on('line', (line) => {
		log(line)
		contentArray.push(line);
	});
}

const getName = async (STATE) => {
  const username = await inquirer.askName();
  STATE.username = username.username;
}


module.exports = {

	onboard: async (STATE) => {
		log('\033c');
		await sleep (500);
		log(chalk.bold(characters.boss, `: Hello and welcome to 'let's play, waste at MIT'
			`));
		log(chalk.bold(`press any key to continue...

			`));
		await keypress();
		log(chalk.bold(characters.boss, `: You are the new head of waste management at the Media Lab.`));
		await keypress();
		log(chalk.bold(characters.boss, `: We're glad to have you on the team!

			`));
		await keypress();
		log(chalk.bold(characters.boss, `: Right now, the biggest challenge that the lab is facing is landfill`));
		await keypress();
		log(chalk.bold(characters.boss, `: 100% of our waste gets thrown away, and that's a problem!`));
		await keypress();
		log(chalk.bold(characters.boss, `: it can be hard to get people to listen...`));
		await keypress();
		log(chalk.bold(characters.boss, `: but we're sure you'll be fine!

			`));
		await keypress();
		log(chalk.bold(characters.boss, `: the lab is pretty new, and is set to grow a lot in the coming months`));
		await keypress();
		log(chalk.bold(characters.boss, `: ...so you'll need to hire new staff to deal with the extra waste`));
		await keypress();
		log(chalk.bold(characters.boss, `: Also: if you do a good job here, we'll ask you to expand to more buildings on campus

			`));
		log(chalk.bold(characters.boss, `: this is the whole campus: `));		
		graphics.drawCampus();
		await keypress();
		log(chalk.bold(characters.boss, `: right now, the only building you have to worry about is this one: `));		
		graphics.drawRoom(STATE);
		await keypress();
		log(chalk.bold(characters.boss, `: the only people in the building are 1 faculty and 3 students`));
		log(characters.faculty1, ',', characters.student1, characters.student2, characters.student3)
		await keypress();
		log(chalk.bold(`they've not got a lot of funding yet, so won't be ordering a lot of materials, or producing much waste`));
		await keypress();
		log(chalk.bold(`for now, you should focus on getting recycling up and running in the lab`));
		await keypress();
	},

	newBuilding: () => {
		log(characters.boss, `: well done! you're doing great. We think you should take over the architecture department's waste stream`)
	},

	rodentProblem: () => {
		log(characters.boss, `: uh-oh! litter has built up, and you've developed a rodent problem`)
	},

}