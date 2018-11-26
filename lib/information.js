const chalk = require('chalk');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {

	onboard: async () => {
		console.log(chalk.bold(`Hello and welcome to 'let's play, waste at MIT'`));
		await sleep(1000);
		console.log(chalk.bold(`You are the new head of waste management at the Media Lab.
We're glad to have you on the team`));

	},

	newBuilding: () => {
		console.log(`well done! you're doing great. We think you should take over the architecture `)
	},

}