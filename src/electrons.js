function calculateElectrons(input) {
    if (!input) {
        return "fehlerhafte Eingabe";
        
    }else if(Array.isArray(input) && input.length === 0) {
        return "leeres Array";
    }
    return "zu wenig Zahlen";
}