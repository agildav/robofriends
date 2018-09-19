import { searchRobots } from "./reducers";
import { CHANGE_SEARCH_FIELD } from "./constants";

describe("searchRobots", () => {
  test("return the initial state", () => {
    expect.assertions(1);
    expect(searchRobots({}, {})).toEqual({});
  });

  test("should process CHANGE_SEARCH_FIELD", () => {
    expect.assertions(1);
    expect(
      searchRobots({}, { type: CHANGE_SEARCH_FIELD, payload: "abc" })
    ).toEqual({ searchfield: "abc" });
  });
});
