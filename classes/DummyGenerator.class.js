
/**
 * Use URL /rest/generator/*(customer/damage/employee/repairsCar/sparePart)
 */

module.exports = class DummyGenerator {

	constructor(express) {

		this.settings = g.settings.DummyGenerator;

		this.app = express;
		this.DB = new g.classes.DB();
		this.models = {
			customer: [this.DB.getModel('customer'), this.generateCustomer],
			damage: this.DB.getModel('damage'),
			employee: this.DB.getModel('employee'),
			repairsCar: this.DB.getModel('repairsCar'),
			sparePart: this.DB.getModel('sparePart')
		};

		this.fNames = ['Kalle', 'Mayra', 'Jarl', 'Martin', 'Patricio', 'Faj', 'Hugo', 'Anna', 'Pernilla', 'Åke', 'Donald'];
		this.lNames = ['Nilsson', 'Rivas', 'Andersson', 'Vengara', 'Smith', 'Gravestam', 'Trump', 'Kvarg'];
		this.mailEndings = ['@gmail.com', '@hotmail.com', '@telia.se', '@usa.gov'];
		this.addresses = ['amiralsgatan 14B', 'nevisborg 20D', 'storgatan 15', 'tenorgränd 18', 'hörnet 22', 'bilgatan 50', 'ön 4'];
		this.titles = ['Senior Mechanic', 'Junior Mechanic', 'Salesman', 'Manager'];
		this.vacations = ['11-02-2017', '30-4-2017', '1-1-2020', '']

		this.generate();
	}

	generate() {

		var me = this;

		this.app.post(this.settings.route, function (req, res) {
			console.log(req.params);
			var count = 0;
			var doneCount = 0;
			for (var i = 1; i < 50 + 1; i++) {

				count += 1;
				var params = me.generateCustomer(i);
				var toSave = new me.models[req.params.model][0](params);

				toSave.save(function (err, result) {
					
					if (err) { return; }

					doneCount += 1;

					if(count === doneCount) {

						res.json(result);
					}
				});
			}
		});
	}

	getRandomItem(arr) {

		return arr[Math.floor(Math.random()*arr.length)];
	}

	getFormatedSSN(SSN) {

		var out = SSN + '';
		var length = 7;

		for (var i = 0; i < length - (SSN + '').length; i++) {
			out = '0' + out;
		}

		return out;
	}

	generateCustomer(SSN) {
		
		var _SSN = this.getFormatedSSN(SSN);
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

	generateDamage() {

	}

	generateEmployee(SSN) {

		var _SSN = this.getFormatedSSN(SSN);
		var _fName = this.getRandomItem(this.fNames);
		var _lName = this.getRandomItem(this.lNames);
		var _title = this.getRandomItem(this.titles);
		var _vacation = this.getRandomItem(this.vacations);

		var out = {
			"SSN": _SSN,
			"fName": _fName,
			"lName": _lName,
			"title": _title,
			"vacation": _vacation
		};

		return out;
	}

	generateRepairsCar() {

	}

	generateSparePart() {

	}
}