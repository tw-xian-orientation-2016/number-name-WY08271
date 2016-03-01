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

        it('can split number length is 6',function(){
            var number = '234567';
            var result = splitNumber(number);
            var expectResult = ['567','234'];

            expect(expectResult).toEqual(result);
        })

        it('can split number length is 7',function(){
            var number = '2345678';
            var result = splitNumber(number);
            var expectResult = ['678','345','2'];

            expect(expectResult).toEqual(result);
        })
    })
})