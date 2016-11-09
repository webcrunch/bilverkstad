
/**
 * Use URL /rest/generator/*(customer/damage/employee/repairsCar/sparePart)
 */

module.exports = class DummyGenerator {

	constructor(express) {

		this.settings = g.settings.DummyGenerator;

		this.app = express;
		this.DB = new g.classes.DB();
		this.models = {
			customer: this.DB.getModel('customer'),
			damage: this.DB.getModel('damage'),
			employee: this.DB.getModel('employee'),
			repairsCar: this.DB.getModel('repairsCar'),
			sparePart: this.DB.getModel('sparePart')
		};

		this.fNames = ['Kalle', 'Mayra', 'Jarl', 'Martin', 'Patricio', 'Faj', 'Hugo', 'Anna'];
		this.lNames = ['Nilsson', 'Rivas', 'Andersson', 'Vengara', 'Smith', 'Gravestam'];
		this.mailEndings = ['@gmail.com', '@hotmail.com', '@telia.se', '@usa.gov'];
		this.addresses = ['amiralsgatan 14B', 'nevisborg 20D', 'storgatan 15', 'tenorgränd 18'];

		this.generateAll();
	}

	generateAll() {

		var me = this;

		this.app.post(this.settings.route, function (req, res) {

			var count = 0;
			var doneCount = 0;
			for (var i = 1; i < 10 + 1; i++) {

				count += 1;
				var params = me.genCustomer(i);
				var toSave = new me.models.customer(params);

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

	genCustomer(SSN) {
		
		var createSSN = function() {

			var out = SSN + '';
			var length = 7;

			for (var i = 0; i < length - (SSN + '').length; i++) {
				out = '0' + out;
			}

			return out;
		};

		var _SSN = createSSN(SSN);
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