var diacritic = require(".."),
	expect = require('chai').expect;

describe("diacritic", function() {
	
	describe("remove", function() {

		it('Invalid param', function() {
			expect(diacritic.remove(undefined)).to.equal(undefined);
		});

		it('Empty string', function() {
			expect(diacritic.remove("")).to.equal("");
		});

	    it('should return "Â e c e n"', function () {
	        expect(diacritic.remove("Â é ç è ñ")).to.equal("A e c e n");
	    });

	});

	describe("removeSymbols", function() {

		it('Invalid param', function() {
			expect(diacritic.removeSymbols(undefined)).to.equal(undefined);
		});

		it('Empty string', function() {
			expect(diacritic.removeSymbols("")).to.equal("");
		});

	    it('should return "-14-12-34"', function () {
	        expect(diacritic.removeSymbols("¼½¾")).to.equal("-14-12-34");
	    });

	    /* hyphen, en dash, em dash */
	    it('should return "- - -"', function () {
	        expect(diacritic.removeSymbols("- – —")).to.equal("- - -");
	    });

		it("Test' test", function() {
			expect(diacritic.removeSymbols("Test' test")).to.equal("Test\\\' test");
		});

	});

	describe("createFriendlyString", function() {

		it('Invalid param', function() {
			expect(diacritic.createFriendlyString(undefined)).to.equal(undefined);
		});

		it('999', function() {
			expect(diacritic.createFriendlyString(999)).to.equal(999);
		});

		it('Rise of the dead', function() {
			expect(diacritic.createFriendlyString("Rise of the dead")).to.equal("rise-dead");
		});

	});

});

