
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
			employee: [this.DB.getModel('employee'), this.generateEmployee],
			repairsCar: this.DB.getModel('repairsCar'),
			sparePart: this.DB.getModel('sparePart')
		};

		this.fNames = ['Kalle', 'Mayra', 'Jarl', 'Martin', 'Patricio', 'Faj', 'Hugo', 'Anna', 'Pernilla', 'Åke', 'Donald'];
		this.lNames = ['Nilsson', 'Rivas', 'Andersson', 'Vengara', 'Smith', 'Gravestam', 'Trump', 'Kvarg'];
		this.mailEndings = ['@gmail.com', '@hotmail.com', '@telia.se', '@usa.gov'];
		this.addresses = ['amiralsgatan 14B', 'nevisborg 20D', 'storgatan 15', 'tenorgränd 18', 'hörnet 22', 'bilgatan 50', 'ön 4'];
		this.titles = ['Senior Mechanic', 'Junior Mechanic', 'Salesman', 'Manager'];
		this.vacations = ['11-02-2017', '30-4-2017', '1-1-2020'];
		this.passwords = ['abc123', 'mellon', 'qwerty', 'password', '1qaz2wsx'];

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
				var func = me.models[req.params.model][1];
				var params = func(i, me);
				var toSave = new me.models[req.params.model][0](params);

				toSave.save(function (err, result) {
					
					if (err) { return; }

					doneCount += 1;

					if(count === doneCount) {
						console.log('im here');
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

	generateCustomer(SSN, context) {
		var _SSN = context.getFormatedSSN(SSN);
		var _fName = context.getRandomItem(context.fNames);
		var _lName = context.getRandomItem(context.lNames);
		var _address = context.getRandomItem(context.addresses);
		var _email = _fName.toLowerCase() + _lName.toLowerCase() + context.getRandomItem(context.mailEndings);

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

	generateEmployee(SSN, context) {
		var _SSN = context.getFormatedSSN(SSN);
		var _fName = context.getRandomItem(context.fNames);
		var _lName = context.getRandomItem(context.lNames);
		var _email = _fName.toLowerCase() + _lName.toLowerCase() + context.getRandomItem(context.mailEndings);
		var _title = context.getRandomItem(context.titles);
		var _vacation = context.getRandomItem(context.vacations);
		var _pass = context.getRandomItem(context.passwords);

		var out = {
			"SSN": _SSN,
			"email": _email,
			"fName": _fName,
			"lName": _lName,
			"title": _title,
			"vacation": [_vacation],
			"pass": _pass
		};

		return out;
	}

	generateRepairsCar() {

	}

	generateSparePart() {

	}
}