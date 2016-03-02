describe('splitNumber()', function () {
    it('split number by 3 digit', function () {
        var numbers = ['2', '23', '234', '234567', '2345678'];
        var expectResult = [['2'], ['23'], ['234'], ['567', '234'], ['678', '345', '2']];

        numbers.forEach(function (number, index) {
            expect(splitNumber(number)).toEqual(expectResult[index]);
        });
    });
});

describe('translateThreeDigits()', function () {
    it('translateOne() can translage one digits', function () {
        var number = '1';

        expect(translateOne(number)).toEqual('one');
    });

    it('translateTwo() can translage two digits', function () {
        var numbers = ['19', '10', '09', '00'];
        var expectResult = ['nineteen', 'ten', 'nine', ''];

        numbers.forEach(function (number, index) {
            expect(translateTwo(number)).toEqual(expectResult[index]);
        });
    });

    it('translateThree() can translage three digits', function () {
        var numbers = ['111', '011', '110', '010', '101', '001', '100', '000'];
        var expectResult = ['one hundred and eleven', 'eleven', 'one hundred and ten', 'ten', 'one hundred and one', 'one', 'one hundred', ''];

        numbers.forEach(function (number, index) {
            expect(translateThree(number)).toEqual(expectResult[index]);
        });
    });

    describe('translateThreeDigits()', function () {
        it('can translate 3 length string array', function () {
            var threeDigits = ['123', '234'];
            var expectResult = ['one hundred and twenty three', 'two hundred and thirty four'];

            expect(translateThreeDigits(threeDigits)).toEqual(expectResult);
        });

        it('can translate 2 length string array', function () {
            var threeDigits = ['23', '34'];
            var expectResult = ['twenty three', 'thirty four'];

            expect(translateThreeDigits(threeDigits)).toEqual(expectResult);
        });

        it('can translate 1 length string array', function () {
            var threeDigits = ['1', '4'];
            var expectResult = ['one', 'four'];

            expect(translateThreeDigits(threeDigits)).toEqual(expectResult);
        });
    });
});

describe('addFlag()', function () {
    it('can add thousand flag', function () {
        var threeDigits = ['two hundred and thirty four', 'one'];
        var expectResult = ['two hundred and thirty four', 'one thousand'];

        expect(addFlag(threeDigits)).toEqual(expectResult);
    });

    it('can add million flag', function () {
        var threeDigits = ['two hundred and thirty four', 'two hundred and thirty four', 'one'];
        var expectResult = ['two hundred and thirty four', 'two hundred and thirty four thousand', 'one million'];

        expect(addFlag(threeDigits)).toEqual(expectResult);
    });

    it('can add billion flag', function () {
        var threeDigits = ['two hundred and thirty four', 'two hundred and thirty four', 'two hundred and thirty four', 'one'];
        var expectResult = ['two hundred and thirty four', 'two hundred and thirty four thousand', 'two hundred and thirty four million', 'one billion'];

        expect(addFlag(threeDigits)).toEqual(expectResult);
    });

    it('can add no flag', function () {
        var threeDigits = ['two hundred and thirty four', '', 'one'];
        var expectResult = ['two hundred and thirty four', '', 'one million'];

        expect(addFlag(threeDigits)).toEqual(expectResult);
    });
});

describe('mergeString()', function () {
    it('can spell out 10010', function () {
        var numberString = ['ten', 'ten thousand'];
        var expectResult = 'ten thousand and ten';

        expect(mergeString(numberString)).toEqual(expectResult);
    });

    it('can spell out 1000100', function () {
        var numberString = ['one hundred', '', 'one million'];
        var expectResult = 'one million and one hundred';

        expect(mergeString(numberString)).toEqual(expectResult);
    });

    it('can spell out 12345', function () {
        var numberString = ['three hundred and forty five', 'twelve thousand'];
        var expectResult = 'twelve thousand, three hundred and forty five';

        expect(mergeString(numberString)).toEqual(expectResult);
    });

    it('can spell out 1234', function () {
        var numberString = ['three hundred and forty five', 'one thousand'];
        var expectResult = 'one thousand, three hundred and forty five';

        expect(mergeString(numberString)).toEqual(expectResult);
    });

    it('can spell out 1000234', function () {
        var numberString = ['two hundred and thirty four', '', 'one million'];
        var expectResult = 'one million, , two hundred and thirty four';

        expect(mergeString(numberString)).toEqual(expectResult);
    });
});

describe('spellOutNumber', function () {
    it('can spell out 10010 to string', function () {
        var numberString = '10010';
        var expectResult = 'ten thousand and ten';

        spyOn(console, 'log');
        spellOutNumber(numberString);

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });

    it('can spell out 43112603 to string', function () {
        var numberString = '43112603';
        var expectResult = 'forty three million, one hundred and twelve thousand, six hundred and three';

        spyOn(console, 'log');
        spellOutNumber(numberString);

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });

    it('can spell out 512607 to string', function () {
        var numberString = '512607';
        var expectResult = 'five hundred and twelve thousand, six hundred and seven';

        spyOn(console, 'log');
        spellOutNumber(numberString);

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });

    it('can spell out 1000100 to string', function () {
        var numberString = '1000100';
        var expectResult = 'one million and one hundred';

        spyOn(console, 'log');
        spellOutNumber(numberString);

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });
});