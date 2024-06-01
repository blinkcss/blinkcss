import { kebab } from "../src";
import { describe, expect, it } from "@tools/vitest";

describe("kebab", () => {
  it("should kebab case a string", () => {
    expect(kebab("alignContent")).toBe("align-content");
  });
});
