const log = console.log;

const BOSS = '💁🏽‍♀️';
const students = ['👩🏻‍💻', '👩🏼‍💻', '👩🏽‍💻', '👩🏾‍💻', '👩🏿‍💻', '👨🏻‍💻', '👨🏼‍💻','👨🏽‍💻', '👨🏾‍💻', '👨🏿‍💻'];
const faculty = ['👩🏻‍💼', '👩🏼‍💼', '👩🏽‍💼', '👩🏾‍💼', '👩🏿‍💼', '👨🏻‍💼', '👨🏼‍💼', '👨🏽‍💼', '👨🏾‍💼', '👨🏿‍💼'];
const custodians = ['👷🏻‍♀️', '👷🏼‍♀️', '👷🏽‍♀️', '👷🏾‍♀️', '👷🏿‍♀️', '👷🏻‍♂️', '👷🏼‍♂️', '👷🏽‍♂️', '👷🏾‍♂️', '👷🏿‍♂️', ];

function randStudent() {
	student = students[Math.floor(Math.random()*students.length)];
	return student;
}

function randFaculty() {
	fac = faculty[Math.floor(Math.random()*faculty.length)];
	return fac;
}

function randStaff() {
	cust = custodians[Math.floor(Math.random()*faculty.length)];
	return custodians;
}


module.exports = {
	boss: BOSS,

	// randStudent: () => {
	// 	student = students[Math.floor(Math.random()*students.length)];
	// 	return student;
	// },

	student1: randStudent(),
	student2: randStudent(),
	student3: randStudent(),

	faculty1: randFaculty(),
	faculty2: randFaculty(),
	staff: randStaff(),
	recycling: '♻️',

};