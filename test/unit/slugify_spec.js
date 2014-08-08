'use strict';

define(['slugify'], function(slugify, require) {

    describe('Slugify', function() {

        it('can slugify text', function() {
            var result = slugify.slug('Mark is King');
            expect(result).toBe('mark-is-king');
        });
        it('can slugify numeric', function() {
            var result = slugify.slug('Mark was born on 16/12/1968');
            expect(result).toBe('mark-was-born-on-16-12-1968');
        });

    });
});