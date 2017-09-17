var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message.js');

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

describe('generateLocationMessage', () => {
    it('should generate the correct message object ', () => {
        var from = 'kuku';
        var lat = 1;
        var lng = 1;
        var message = generateLocationMessage(from, lat, lng);
        
        expect(message.from).toBe(from);
        expect(message.url).toBe('https://www.google.com/maps?q=1,1');
        expect(message.createdAt).toBeA('number');
    });
});
