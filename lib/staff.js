const log = console.log;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {

	runStaff: async (STATE, MENU) => {
		log('\033c');
		log(`this is the staff menu`);
		log(`to hire more staff, press 'h'`);
		log(`to train staff, press 't'




			press 'e' to exit`);

		await keypress();
	},


}