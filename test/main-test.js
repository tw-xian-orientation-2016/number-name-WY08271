describe('#splitNumber()', function () {
    describe('split number by 3 digit', function () {
        it('can split number length is 1', function () {
            var number = '2';
            var result = splitNumber(number);
            var expectResult = ['2'];

            expect(expectResult).toEqual(result);
        });

        it('can split number length is 2', function () {
            var number = '23';
            var result = splitNumber(number);
            var expectResult = ['23'];

            expect(expectResult).toEqual(result);
        });

        it('can split number length is 3', function () {
            var number = '234';
            var result = splitNumber(number);
            var expectResult = ['234'];

            expect(expectResult).toEqual(result);
        });

        it('can split number length is 6', function () {
            var number = '234567';
            var result = splitNumber(number);
            var expectResult = ['567', '234'];

            expect(expectResult).toEqual(result);
        });

        it('can split number length is 7', function () {
            var number = '2345678';
            var result = splitNumber(number);
            var expectResult = ['678', '345', '2'];

            expect(expectResult).toEqual(result);
        });
    });
});

describe('#translateThreeDigits()', function () {
    describe('.translateOne()', function () {
        it('can translage one digits, number is 1', function () {
            var number = '1';
            var result = translateOne(number);
            var expectResult = 'one';

            expect(result).toEqual(expectResult);
        });
    });

    describe('.translateTwo()', function () {
        it('can translage two digits, number is 19', function () {
            var number = '19';
            var result = translateTwo(number);
            var expectResult = 'nineteen';

            expect(result).toEqual(expectResult);
        });

        it('can translage two digits, number is 10', function () {
            var number = '10';
            var result = translateTwo(number);
            var expectResult = 'ten';

            expect(result).toEqual(expectResult);
        });

        it('can translage two digits, number is 09', function () {
            var number = '09';
            var result = translateTwo(number);
            var expectResult = 'nine';

            expect(result).toEqual(expectResult);
        });
    });

    describe('.getThreeDigit()', function () {
        it('can translage three digits, number is 111', function () {
            var number = '111';
            var result = translateThree(number);
            var expectResult = 'one hundred and eleven';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 011', function () {
            var number = '011';
            var result = translateThree(number);
            var expectResult = 'eleven';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 110', function () {
            var number = '110';
            var result = translateThree(number);
            var expectResult = 'one hundred and ten';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 010', function () {
            var number = '010';
            var result = translateThree(number);
            var expectResult = 'ten';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 101', function () {
            var number = '101';
            var result = translateThree(number);
            var expectResult = 'one hundred and one';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 001', function () {
            var number = '001';
            var result = translateThree(number);
            var expectResult = 'one';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 100', function () {
            var number = '100';
            var result = translateThree(number);
            var expectResult = 'one hundred';

            expect(result).toEqual(expectResult);
        });

        it('can translage three digits, number is 000', function () {
            var number = '000';
            var result = translateThree(number);
            var expectResult = '';

            expect(result).toEqual(expectResult);
        });
    });

    describe('translateThreeDigits()', function () {
        it('can translate 3 length string array', function () {
            var threeDigits = ['123', '234'];
            var result = translateThreeDigits(threeDigits);
            var expectResult = ['one hundred and twenty three', 'two hundred and thirty four'];

            expect(result).toEqual(expectResult);
        });

        it('can translate 2 length string array', function () {
            var threeDigits = ['23', '34'];
            var result = translateThreeDigits(threeDigits);
            var expectResult = ['twenty three', 'thirty four'];

            expect(result).toEqual(expectResult);
        });

        it('can translate 1 length string array', function () {
            var threeDigits = ['1', '4'];
            var result = translateThreeDigits(threeDigits);
            var expectResult = ['one', 'four'];

            expect(result).toEqual(expectResult);
        });
    });
});

describe('#addFlag()', function () {
    it('can add thousand flag', function () {
        var threeDigits = ['two hundred and thirty four', 'one'];
        var result = addFlag(threeDigits);
        var expectResult = ['two hundred and thirty four', 'one thousand'];

        expect(result).toEqual(expectResult);
    });

    it('can add million flag', function () {
        var threeDigits = ['two hundred and thirty four', 'two hundred and thirty four', 'one'];
        var result = addFlag(threeDigits);
        var expectResult = ['two hundred and thirty four', 'two hundred and thirty four thousand', 'one million'];

        expect(result).toEqual(expectResult);
    });

    it('can add billion flag', function () {
        var threeDigits = ['two hundred and thirty four', 'two hundred and thirty four', 'two hundred and thirty four', 'one'];
        var result = addFlag(threeDigits);
        var expectResult = ['two hundred and thirty four', 'two hundred and thirty four thousand', 'two hundred and thirty four million', 'one billion'];

        expect(result).toEqual(expectResult);
    });

    it('can add no flag', function () {
        var threeDigits = ['two hundred and thirty four', '', 'one'];
        var result = addFlag(threeDigits);
        var expectResult = ['two hundred and thirty four', '', 'one million'];

        expect(result).toEqual(expectResult);
    });
});

describe('#mergeString()', function () {
    it('can spell out 10010', function () {
        var numberString = ['ten', 'ten thousand'];
        var result = mergeString(numberString);
        var expectResult = 'ten thousand and ten';

        expect(result).toEqual(expectResult);
    });

    it('can spell out 1000100', function () {
        var numberString = ['one hundred', '', 'one million'];
        var result = mergeString(numberString);
        var expectResult = 'one million and one hundred';

        expect(result).toEqual(expectResult);
    });

    it('can spell out 12345', function () {
        var numberString = ['three hundred and forty five', 'twelve thousand'];
        var result = mergeString(numberString);
        var expectResult = 'twelve thousand, three hundred and forty five';

        expect(result).toEqual(expectResult);
    });

    it('can spell out 1234', function () {
        var numberString = ['three hundred and forty five', 'one thousand'];
        var result = mergeString(numberString);
        var expectResult = 'one thousand, three hundred and forty five';

        expect(result).toEqual(expectResult);
    });
});

describe('#spellOutNumber', function () {
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

        expect(console.log).toHaveBeenCalledWith(expectResult);;
    });
});