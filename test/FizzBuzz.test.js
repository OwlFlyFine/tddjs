import { fizzBuzz } from "../src/FizzBuzz";

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