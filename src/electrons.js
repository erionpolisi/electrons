function calculateElectrons(input) {
  switch (true) {
    case !input:
        return "fehlerhafte Eingabe";

    case Array.isArray(input) && input.length === 0:
        return "leeres Array";

    case input.length <= 3:
        return "zu wenig Zahlen";

    default:
        let sum = 0;
        for (let i = 0; i < 4; i++){
            const num = input[i];
            
            if (num % 2 === 1){
                sum += (num - 1);
            }
        }
        return sum;
  }
}