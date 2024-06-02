import { deepmerge } from "../src";
import { expect, test } from "@tools/vitest";

test("deepmerge", () => {
  expect(
    deepmerge(
      { a: 1, b: "b", c: [1, 2], d: { a: 1, b: "b" } },
      { a: "a", d: { c: [1, 2] }, e: 0.5 },
    ),
  ).toStrictEqual({
    a: "a",
    b: "b",
    c: [1, 2],
    d: { a: 1, b: "b", c: [1, 2] },
    e: 0.5,
  });
});
