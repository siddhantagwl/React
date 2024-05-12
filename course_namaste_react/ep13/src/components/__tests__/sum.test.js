import { sum } from "../sum";

// first arg is description of the test
test("Sum function shud calc sum of 2 numbers", () => {
  const result = sum(3, 4);

  //assertion -> without assertion there will be no test
  expect(result).toBe(7);
});
