const messages = require('./messages');
const log = console.log;


async function addBuilding(STATE) {
	buildings.arch = true;
}



module.exports = {

	checkStats: async (STATE) => {

		if(STATE.day === 5){
			await messages.dayFive(STATE);
		}

	},

	printStats: (STATE) =>{
		log(`you are on day ${STATE.day}`);
		log(`currently, ${STATE.waste.landfill.toFixed(1)}% of your waste goes to landfill`);
		log(`you have ${STATE.staff.custodial} custodial staff, and ${STATE.staff.recycling} recycling staff`);
	}

}