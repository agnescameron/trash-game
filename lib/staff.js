const log = console.log;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {

	runStaff: async (STATE) => {
		log('\033c');
		log(`this is the staff menu`);
		log(`to hire more staff, press 'h'`);
		log(`to train staff, press 't'`);

		await sleep(3000);
	},


}