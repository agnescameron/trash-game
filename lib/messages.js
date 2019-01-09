const log = console.log;
const characters = require('./characters');
const graphics = require('./graphics');
const inquirer = require('./inquirer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const keypress = async () => {

console.log('keypress')
  // process.stdin.setRawMode(true)
  // return new Promise(resolve => process.stdin.once('data', () => {
  //   process.stdin.setRawMode(false);
  //   process.stdin.resume();
  //   resolve();
  // }))
}


// //not currently using
// const readFile = async (filePath, contentArray) => {
// 	log('reading file');
// 	const rl = readline.createInterface({
// 	  input: fs.createReadStream(filePath),
// 	  crlfDelay: Infinity
// 	});

// 	rl.on('line', (line) => {
// 		log(line)
// 		contentArray.push(line);
// 	});
// }

const getName = async (STATE) => {
  const username = await inquirer.askName();
  STATE.username = username.username;
}


module.exports = {

	onboard: async (STATE) => {
		log('\033c');
		await sleep (500);
		log(characters.boss, `: Hello and welcome to 'let's play, waste at MIT'
			`);
		log(`press any key to continue...

			`);
		await keypress();
		log(characters.boss, `: You are the new head of waste management at the Media Lab.`);
		await keypress();
		log(characters.boss, `: We're glad to have you on the team!

			`);
		await keypress();
		log(characters.boss, `: Right now, the biggest challenge that the lab is facing is landfill`);
		await keypress();
		log(characters.boss, `: 100% of our waste gets thrown away, and that's a problem!`);
		await keypress();
		log(characters.boss, `: it can be hard to get people to listen...`);
		await keypress();
		log(characters.boss, `: but we're sure you'll be fine!

			`);
		await keypress();
		log(characters.boss, `: the lab is pretty new, and is set to grow a lot in the coming months`);
		await keypress();
		log(characters.boss, `: ...so you'll need to hire new staff to deal with the extra waste`);
		await keypress();
		log(characters.boss, `: Also: if you do a good job here, we'll ask you to expand to more buildings on campus

			`);
		await keypress();
		log('\033c');
		log(characters.boss, `: this is the whole campus: `);		
		graphics.drawCampus();
		await keypress();
		log('\033c');
		log(characters.boss, `: right now, the only building you have to worry about is this one: `);		
		graphics.drawRoom(STATE);
		await keypress();
		log(characters.boss, `: the only people in the building are 1 faculty and 3 students`);
		log(characters.faculty1, ',', characters.student1, characters.student2, characters.student3)
		await keypress();
		log(characters.boss, `they've not got a lot of funding yet, so won't be ordering a lot of materials, or producing much waste`);
		await keypress();
		log(characters.boss, `for now, you should focus on getting recycling up and running in the lab`);
		await keypress();
		log(characters.boss, `to bring up the recycling menu, press 'r' and choose an option`);
		await keypress();
		log('in recycling');
		log('\033c');
		log(`this is the recycling menu
-----------------------
`);
		log(`to purchase recycling bins, press 'b'`);
		log(`to hire recycling staff, press 's'`);
		log(`to manage the off-site relationship, press 'o'




			press 'e' to exit`);
		await keypress();
		log('\033c');
		log(characters.boss, `that's how the menu starts: as you get more buildings, more items will be added`);
		await keypress();		
		log(characters.boss, `as you acquire items and staff, the percentage of recycling will increase`);
		await keypress();
		log(characters.boss, `but be careful not to go over budget!`);
		await keypress();		
		log(characters.boss, `also, if you want to hire and train custodial staff, press 's'`);
		await keypress();	
		log(characters.boss, `and to run outreach and education campaigns, press 'e'


			`);
		await keypress();	
		log(characters.boss, `that's all from me right now. for the help menu, press 'h'`);
		await keypress();
		log(characters.boss, `...I'll be in touch once you've made some progress`);
		await keypress();
		log('\033c');
	},

	dayFive: async (STATE) => {
		if(STATE.waste.landfill === 100)
			log(characters.boss, `it's been a week, and everything's still going to landfill. maybe you want to buy some recycling equipment?`);
		else{
			log(characters.boss, `it's been a week, and things are looking up! keep it up`);
		}
		await keypress();
	},

	newBuilding: () => {
		log(characters.boss, `: well done! you're doing great. We think you should take over the architecture department's waste stream`)
	},

	rodentProblem: () => {
		log(characters.boss, `: uh-oh! litter has built up, and you've developed a rodent problem`)
	},

}