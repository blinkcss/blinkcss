import { deepmerge } from "../src";
import { expect, test } from "@tools/vitest";

test("deepmerge arrays", () => {
  expect(deepmerge({ a: [1, 2] }, { a: [3, 5], b: [1] })).toStrictEqual({
    a: [1, 2, 3, 5],
    b: [1],
  });
});
