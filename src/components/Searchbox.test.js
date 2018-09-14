import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

test("SearchBox component is rendered", () => {
  expect.assertions(1);
  return expect(shallow(<SearchBox />)).toMatchSnapshot();
});
