/* eslint-disable no-magic-numbers */
import thrush from "./index";

test("works", () => {
  expect(thrush(0)((value) => `${value}`)).toBe("0");
});
