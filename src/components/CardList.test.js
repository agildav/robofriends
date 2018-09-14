import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

test("CardList component is rendered", () => {
  expect.assertions(1);
  const mockRobots = [
    {
      id: 1,
      name: "John",
      nickname: "Johnsi"
    }
  ];
  return expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
