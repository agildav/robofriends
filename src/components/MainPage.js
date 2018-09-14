import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

import "./MainPage.css";

class MainPage extends Component {
  render() {
    const { robots, searchfield, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc tracked">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default MainPage;
