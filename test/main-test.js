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
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var expectResult = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        numbers.forEach(function (number, index) {
            expect(translateOne(number)).toEqual(expectResult[index]);
        });
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

    it('translateThreeDigits() can translate string array', function () {

        var threeDigits = [['123', '234'], ['23', '34'], ['1', '4']];
        var expectResult = [['one hundred and twenty three', 'two hundred and thirty four'], ['twenty three', 'thirty four'], ['one', 'four']];

        threeDigits.forEach(function (threeDigit, index) {
            expect(translateThreeDigits(threeDigit)).toEqual(expectResult[index]);
        });
    });
});

describe('addFlag()', function () {
    it('can add flag respectively', function () {
        var threeDigits = [['two hundred and thirty four', 'one'], ['two hundred and thirty four', 'two hundred and thirty four', 'one'],
            ['two hundred and thirty four', 'two hundred and thirty four', 'two hundred and thirty four', 'one'],
            ['two hundred and thirty four', '', 'one']];
        var expectResults = [['two hundred and thirty four', 'one thousand'],
            ['two hundred and thirty four', 'two hundred and thirty four thousand', 'one million'],
            ['two hundred and thirty four', 'two hundred and thirty four thousand', 'two hundred and thirty four million', 'one billion'],
            ['two hundred and thirty four', '', 'one million']];

        threeDigits.forEach(function (threeDigit, index) {
            expect(addFlag(threeDigit)).toEqual(expectResults[index]);
        });
    });
});

describe('mergeString()', function () {
    it('can merge stringArray to a string', function () {
        var numberStrings = [['ten', 'ten thousand'], ['one hundred', '', 'one million'],
            ['three hundred and forty five', 'twelve thousand'], ['three hundred and forty five', 'one thousand'],
            ['two hundred and thirty four', '', 'one million']];
        var expectResults = ['ten thousand and ten', 'one million and one hundred',
            'twelve thousand, three hundred and forty five', 'one thousand, three hundred and forty five',
            'one million, , two hundred and thirty four'];

        numberStrings.forEach(function (numberString, index) {
            expect(mergeString(numberString)).toEqual(expectResults[index]);
        });
    });
});

describe('spellOutNumber()', function () {
    it('according to number translate into English', function () {
        var numberStrings = ['10010', '43112603', '512607', '1000100'];
        var expectResults = ['ten thousand and ten', 'forty three million, one hundred and twelve thousand, six hundred and three',
            'five hundred and twelve thousand, six hundred and seven', 'one million and one hundred'];

        spyOn(console, 'log');
        numberStrings.forEach(function (numberString, index) {
            spellOutNumber(numberString);

            expect(console.log).toHaveBeenCalledWith(expectResults[index]);
        });
    });
});