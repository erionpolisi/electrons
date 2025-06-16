function calculateElectrons(input) {
  switch (true) {
    case !input:
        return "fehlerhafte Eingabe";

    case Array.isArray(input) && input.length === 0:
        return "leeres Array";

    case input.length <= 3:
        return "zu wenig Zahlen";
		
	case input.length >= 7:
		return "zu viele Zahlen";
		
    default:
        let sum = 0;
      for (const num of input) {
        if (num % 2 === 1) {
          sum += (num - 1);
        }
      }
      return sum;
  }
}