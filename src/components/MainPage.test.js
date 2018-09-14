import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    robots: [],
    searchfield: "",
    onSearchChange: jest.fn()
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

test("MainPage container is rendered", () => {
  expect.assertions(1);
  return expect(wrapper).toMatchSnapshot();
});
