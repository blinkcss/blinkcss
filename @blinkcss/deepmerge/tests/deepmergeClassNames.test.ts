import { deepmerge } from "../src";
import { expect, test } from "@tools/vitest";

test("deepmerge classNames", () => {
  expect(
    deepmerge({ a: 1, className: "b" }, { a: "a", className: "c" }),
  ).toStrictEqual({ a: "a", className: "b c" });
});
