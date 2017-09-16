var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
    it('should generate the correct message object ', () => {
        var from = 'kuku';
        var text = 'text123';
        var message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});
