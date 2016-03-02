describe('splitNumber()', function () {
    describe('split number by 3 digit', function () {
        it('can split number length is 1', function () {
            var number = '2';

            expect(splitNumber(number)).toEqual(['2']);
        });

        it('can split number length is 2', function () {
            var number = '23';

            expect(splitNumber(number)).toEqual(['23']);
        });

        it('can split number length is 3', function () {
            var number = '234';

            expect(splitNumber(number)).toEqual(['234']);
        });

        it('can split number length is 6', function () {
            var number = '234567';

            expect(splitNumber(number)).toEqual(['567', '234']);
        });

        it('can split number length is 7', function () {
            var number = '2345678';

            expect(splitNumber(number)).toEqual(['678', '345', '2']);
        });
    });
});

describe('translateThreeDigits()', function () {
    describe('translateOne()', function () {
        it('can translage one digits, number is 1', function () {
            var number = '1';

            expect(translateOne(number)).toEqual('one');
        });
    });

    describe('translateTwo()', function () {
        it('can translage two digits, number is 19', function () {
            var number = '19';

            expect(translateTwo(number)).toEqual('nineteen');
        });

        it('can translage two digits, number is 10', function () {
            var number = '10';

            expect(translateTwo(number)).toEqual('ten');
        });

        it('can translage two digits, number is 09', function () {
            var number = '09';

            expect(translateTwo(number)).toEqual('nine');
        });
    });

    describe('getThreeDigit()', function () {
        it('can translage three digits, number is 111', function () {
            var number = '111';

            expect(translateThree(number)).toEqual('one hundred and eleven');
        });

        it('can translage three digits, number is 011', function () {
            var number = '011';

            expect(translateThree(number)).toEqual('eleven');
        });

        it('can translage three digits, number is 110', function () {
            var number = '110';

            expect(translateThree(number)).toEqual('one hundred and ten');
        });

        it('can translage three digits, number is 010', function () {
            var number = '010';

            expect(translateThree(number)).toEqual('ten');
        });

        it('can translage three digits, number is 101', function () {
            var number = '101';

            expect(translateThree(number)).toEqual('one hundred and one');
        });

        it('can translage three digits, number is 001', function () {
            var number = '001';

            expect(translateThree(number)).toEqual('one');
        });

        it('can translage three digits, number is 100', function () {
            var number = '100';
            var result = translateThree(number);

            expect(result).toEqual('one hundred');
        });

        it('can translage three digits, number is 000', function () {
            var number = '000';

            expect(translateThree(number)).toEqual('');
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

describe('#mergeString()', function () {
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