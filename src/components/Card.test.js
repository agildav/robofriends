import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

test("Card component is rendered", () => {
  expect.assertions(1);
  return expect(shallow(<Card />).length).toEqual(1);
});
