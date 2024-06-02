import { deepmerge } from "../src";
import { expect, test } from "@tools/vitest";

test("deepmerge classes", () => {
  expect(deepmerge({ a: 1, class: "b" }, { a: "a", class: "c" })).toStrictEqual(
    { a: "a", class: "b c" },
  );
});
