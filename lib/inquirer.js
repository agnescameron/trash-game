const inquirer = require('inquirer');

module.exports = {

	askName: () => {
		const questions = [
		{
			name: 'username',
			type: 'input',
			message: 'before we go any further, please pick a username: ',
			validate: function( value ) {
	          if (value.length) {
	            return true;
	          } else {
	            return 'please pick a username: ';
	          }			
      	    }
		},
		];

	return inquirer.prompt(questions);

	},

}