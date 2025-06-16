describe("Electrons around the cores", function() {
    
    //""
    it("should return 'fehlerhafte Eingabe' for empty string input", function() {
        expect(calculateElectrons("")).toBe("fehlerhafte Eingabe");
    });

    //[]
    it("should return 'leeres Array' for empty array input", function() {
        expect(calculateElectrons([])).toBe("leeres Array");
    });

    //[1,2]
    it("should return 'zu wenig Zahlen' for input with less than 4 numbers", function() {
        expect(calculateElectrons([1, 2])).toBe("zu wenig Zahlen");
    });

    //[2, 2, 3, 3]
    it("should return '4' for input '[2, 2, 3, 3]'", function() {
        expect(calculateElectrons([2, 2, 3, 3])).toBe(4);
    });

    //[3, 5, 3, 5, 4, 3]
    it("should return '14' for input '[3, 5, 3, 5, 4, 3]'", function() {
        expect(calculateElectrons([3, 5, 3, 5, 4, 3])).toBe(14);
    });

    //[3, 2, 5, 2, 1, 5, 2]
    it("should return 'zu viele Zahlen' for input '[3, 2, 5, 2, 1, 5, 2]' ", function() {
        expect(calculateElectrons([3, 2, 5, 2, 1, 5, 2])).toBe("'zu viele Zahlen");
    });
});
