var expect = require('expect');
var {isRealString} = require('./validation.js');

describe('isRealString function tests', () => {
    it('should return true on strings ', () => {
        expect(isRealString('  aaa aa a')).toBe(true);
        expect(isRealString('a     ')).toBe(true);
        expect(isRealString('    ')).toBe(false);
        expect(isRealString(123)).toBe(false);
    });
});

