import { fizzBuzz, rangeFizzBuzz } from "../src/FizzBuzz";

test("Should return number that not divide by 3 and 5 ", () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(4)).toBe(4);
  expect(fizzBuzz(11)).toBe(11);
});

test("Should return Fizz if divide by 3", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(6)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
  expect(fizzBuzz(21)).toBe("Fizz");
});

test("Should return Buzz if divide by 5", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(25)).toBe("Buzz");
  expect(fizzBuzz(50)).toBe("Buzz");
  expect(fizzBuzz(100)).toBe("Buzz");
});

test("Should return FizzBuzz if divide by 3 and 5", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(45)).toBe("FizzBuzz");
  expect(fizzBuzz(90)).toBe("FizzBuzz");
});

test("Should return result like example in condition loop 1-100", () => {
  expect(rangeFizzBuzz()).toBe(
    "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz"
  );
});

test("Should throw error if parameter not a number", () => {
  expect(() => {
    fizzBuzz("15");
  }).toThrow("Parameter not a number.");
  expect(() => {
    fizzBuzz();
  }).toThrow("Parameter not a number.");
  expect(() => {
    fizzBuzz(null);
  }).toThrow("Parameter not a number.");
});