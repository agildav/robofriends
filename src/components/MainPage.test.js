import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

describe("MainPage test component", () => {
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

  test("Filters robots correctly", () => {
    expect.assertions(2);
    let mockProps2 = {
      robots: [
        {
          id: 1,
          name: "John",
          nickname: "Johnsi"
        }
      ],
      //  There is no robot with name 'a'
      searchfield: "a",
      onSearchChange: jest.fn()
    };
    //  No results
    let wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([]);

    mockProps2 = {
      robots: [
        {
          id: 1,
          name: "John",
          nickname: "Johnsi"
        }
      ],
      searchfield: "j",
      onSearchChange: jest.fn()
    };
    //  Got 1 result
    wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([
      {
        id: 1,
        name: "John",
        nickname: "Johnsi"
      }
    ]);
  });
});
