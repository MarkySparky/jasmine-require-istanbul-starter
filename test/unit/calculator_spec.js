'use strict';

define(['calculator'], function(calculator) {

    describe('calculator', function() {

        it('can multiply', function() {
            var result = calculator.multiply(4, 3);
            expect(result).toBe(12);
            var result = calculator.multiply(-6, 4);
            expect(result).toBe(-24);
        });
        it('can sum', function() {
            var result = calculator.sum(4, 3);
            expect(result).toBe(7);
            var result = calculator.sum(-6, 4);
            expect(result).toBe(-2);
        });
        it('can subtract', function() {
            var result = calculator.subtract(4, 3);
            expect(result).toBe(1);
            var result = calculator.subtract(-6, 4);
            expect(result).toBe(-10);
        });
        it('can divide', function() {
            var result = calculator.divide(6, 3);
            expect(result).toBe(2);
            var result = calculator.divide(-6, 2);
            expect(result).toBe(-3);
        });
    });

});