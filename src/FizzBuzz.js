export const isFizz = (number) => {
  return number % 3 === 0;
};

export const isBuzz = (number) => {
  return number % 5 === 0;
};

export const fizzBuzz = (number) => {
  if (isFizz(number) && isBuzz(number)) return "FizzBuzz";
  if (isFizz(number)) return "Fizz";
  if (isBuzz(number)) return "Buzz";
  return number;
};

export const rangeFizzBuzz = () => {
  let result = "";
  const space = " ";
  for (let number = 1; number <= 100; number++) {
    let print = "";
    if (isFizz(number) && isBuzz(number)) {
      print += "FizzBuzz";
    } else if (isFizz(number)) {
      print += "Fizz";
    } else if (isBuzz(number)) {
      print += "Buzz";
    } else {
      print = number.toString();
    }
    result += space + print;
  }
  return result.trim();
};