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