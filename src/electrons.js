function calculateElectrons(input) {
    if (!input) {
        return "fehlerhafte Eingabe";
        
    }else if(Array.isArray(input) && input.length === 0) {
        return "leeres Array";
    }
    else if(input.length <= 3) {
        return "zu wenig Zahlen";
    }
	return 4;
}