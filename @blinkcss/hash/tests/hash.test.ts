import { hash } from "../src";
import { expect, test } from "@tools/vitest";

test("hash", () => {
  expect(hash("a")).toStrictEqual("0cc175b9c0f1b6a831c399e269772661");
});
