'use strict';

module.exports = class DummyGenerator {

	constructor(express, itterations) {

		this.app = express();
		
		this.fNames = ['Kalle', 'Mayra', 'Jarl', 'Martin', 'Patricio', 'Faj', 'Hugo', 'Anna'];
		this.lNames = ['Nilsson', 'Rivas', 'Andersson', 'Vengara', 'Smith', 'Gravestam'];
		this.mailEndings = ['@gmail.com', '@hotmail.com', '@telia.se', '@usa.gov'];
		this.addresses = ['amiralsgatan 14B', 'nevisborg 20D', 'storgatan 15', 'tenorgränd 18'];

		this.generateAll(itterations);
	}

	generateAll(itterations) {

		for (var i = 1; i < itterations + 1; i++) {

			console.log(this.genCustomer(i));


			//POST TO DB!!!!!!!
		}


	}

	getRandomItem(arr) {

		return arr[Math.floor(Math.random()*arr.length)];
	}

	createSSN(SSN) {

		var length = 7;
	}

	post(model) {
		
	}

	genCustomer(SSN) {
		
		var _SSN = SSN;
		var _fName = this.getRandomItem(this.fNames);
		var _lName = this.getRandomItem(this.lNames);
		var _address = this.getRandomItem(this.addresses);
		var _email = _fName.toLowerCase() + _lName.toLowerCase() + this.getRandomItem(this.mailEndings);

		var out = {
			"SSN": _SSN,
			"fName": _fName,
			"lName": _lName,
			"address": _address,
			"email": _email
		};

		return out;
	}

	genDamage() {

	}

	genEmployee() {

	}

	genRepairsCar() {

	}

	genSparePart() {

	}
}