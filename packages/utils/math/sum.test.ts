import { sum } from "./sum";

describe("sum()", () => {
  it("When recives 1 and 1, returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
