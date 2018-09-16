import { searchRobots } from "./reducers";

describe("searchRobots", () => {
  test("return the initial state", () => {
    expect.assertions(1);
    expect(searchRobots({}, {})).toEqual({});
  });
});
