function calculateElectrons(input) {
  const length = input.length;

  switch (true) {
    case !input:
      return "fehlerhafte Eingabe";

    case length === 0:
      return "leeres Array";

    case length <= 3:
      return "zu wenig Zahlen";

    case length >= 7:
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