import { setSearchField } from "./actions";
import { CHANGE_SEARCH_FIELD } from "./constants";

describe("setSearchField", () => {
  test("return the setSearchField action", () => {
    expect.assertions(1);
    const text = "",
      expectedOutput = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
      };
    expect(setSearchField(text)).toEqual(expectedOutput);
  });
});
