/* eslint-disable no-magic-numbers */
import thrush from "./index.ts";

test(() => {
  expect(thrush(0)((value) => `${value}`)).toBe("0");
});
