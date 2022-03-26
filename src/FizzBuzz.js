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
