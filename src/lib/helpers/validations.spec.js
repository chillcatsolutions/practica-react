import { sum2, divide } from './validations';


describe('GIVEN sum2 function', () => {
    describe('WHEN sum2 is called with 2 and 3', () => {

        it('THEN it should return 5', () => {

            expect(sum2(2, 3)).toBe(5);

        });
    });

    describe('WHEN sum2 is called with -2 and -3', () => {

        it('THEN it should return -5', () => {

            expect(sum2(-2, -3)).toBe(-5);

        });
    });

    describe('WHEN sum2 is called with -2 and 3', () => {

        it('THEN it should return 1', () => {

            expect(sum2(-2, 3)).toBe(1);

        });
    });
});

describe('GIVEN divide function', () => {
    describe('WHEN divide is called with 3 and 3', () => {

        it('THEN it should return 1', () => {

            expect(divide(3, 3)).toBe(1);

        });
    });

    describe('WHEN divide is called with 3 and 0', () => {
        
        it('THEN it should be return NaN', () => {

            expect(divide(3, 0)).toBe(NaN);

        });
    });

});
