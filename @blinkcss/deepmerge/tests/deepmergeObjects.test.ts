import { deepmerge } from "../src";
import { expect, test } from "@tools/vitest";

test("deepmerge objects", () => {
  expect(deepmerge({ a: 1, b: 2 }, { b: 3, c: 5 })).toStrictEqual({
    a: 1,
    b: 3,
    c: 5,
  });
});
