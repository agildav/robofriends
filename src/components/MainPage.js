import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

import "./MainPage.css";

class MainPage extends Component {
  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchfield.toLowerCase());
    });
  };

  render() {
    const { onSearchChange } = this.props;

    return (
      <div className="tc tracked">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={this.filteredRobots()} />
      </div>
    );
  }
}

export default MainPage;
