import { fizzBuzz } from "../src/FizzBuzz";

test("Should return number that not divide by 3 and 5 ", () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(4)).toBe(4);
  expect(fizzBuzz(11)).toBe(11);
});