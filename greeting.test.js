const greet = require('./greeting');

describe('greeting', () => {
    it('should handle null values', () => {
        const name = null;
        expect(greet(name)).toBe('Hello there!');
    });
    it('should recognize shouting', (name) => {
         if(name === name.toUpperCase){
            expect(greet(name)).toBe(`HELLO ${name}`);
         };
    });
    it('should handle two names', () => {
        const name = [];
        name.length === 2;
        expect(greet(name)).toBe(`Hello,${name[0]},${name[1]}`)
    });
    it('should handla arbitrary number of names', () => {
        const name = [];
        name.length > 2;
        expect(greet(name)).toBe(`Hello,${name.forEach((item) => {return `${item},`})}`);
    });
    it('should print greeting to screen', () => {
        const name;
        expect(greet(name)).toBeCalled();
        
    });        
});