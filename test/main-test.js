describe('#splitNumber()', function () {
    describe('split number by 3 digit', function () {
        it('can split number length is 1', function () {
            var number = '2';
            var result = splitNumber(number);
            var expectResult = ['2'];

            expect(expectResult).toEqual(result);
        })

        it('can split number length is 2', function () {
            var number = '23';
            var result = splitNumber(number);
            var expectResult = ['23'];

            expect(expectResult).toEqual(result);
        })

        it('can split number length is 3', function () {
            var number = '234';
            var result = splitNumber(number);
            var expectResult = ['234'];

            expect(expectResult).toEqual(result);
        })

        it('can split number length is 6', function () {
            var number = '234567';
            var result = splitNumber(number);
            var expectResult = ['567', '234'];

            expect(expectResult).toEqual(result);
        })

        it('can split number length is 7', function () {
            var number = '2345678';
            var result = splitNumber(number);
            var expectResult = ['678', '345', '2'];

            expect(expectResult).toEqual(result);
        })
    })
})

describe('#translateThreeDigits()', function () {

    describe('.translateOne()', function () {
        it('can translage one digits, number is 1', function () {
            var number = '1';
            var result = translateOne(number);
            var expectResult = 'one';

            expect(result).toEqual(expectResult);
        })
    })

    describe('.translateTwo()', function () {
        it('can translage two digits, number is 19', function () {
            var number = '19';
            var result = translateTwo(number);
            var expectResult = 'nineteen';

            expect(result).toEqual(expectResult);
        })

        it('can translage two digits, number is 10', function () {
            var number = '10';
            var result = translateTwo(number);
            var expectResult = 'ten';

            expect(result).toEqual(expectResult);
        })

        it('can translage two digits, number is 09', function () {
            var number = '09';
            var result = translateTwo(number);
            var expectResult = 'nine';

            expect(result).toEqual(expectResult);
        })
    })

    describe('.getThreeDigit()', function () {
        it('can translage three digits, number is 111', function () {
            var number = '111';
            var result = translateThree(number);
            var expectResult = 'one hundred and eleven';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 011', function () {
            var number = '011';
            var result = translateThree(number);
            var expectResult = 'eleven';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 110', function () {
            var number = '110';
            var result = translateThree(number);
            var expectResult = 'one hundred and ten';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 010', function () {
            var number = '010';
            var result = translateThree(number);
            var expectResult = 'ten';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 101', function () {
            var number = '101';
            var result = translateThree(number);
            var expectResult = 'one hundred and one';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 001', function () {
            var number = '001';
            var result = translateThree(number);
            var expectResult = 'one';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 100', function () {
            var number = '100';
            var result = translateThree(number);
            var expectResult = 'one hundred';

            expect(result).toEqual(expectResult);
        })

        it('can translage three digits, number is 000', function () {
            var number = '000';
            var result = translateThree(number);
            var expectResult = '';

            expect(result).toEqual(expectResult);
        })
    })
})