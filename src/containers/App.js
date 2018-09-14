import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import { setSearchField } from "../actions";
import "tachyons";
import "./App.css";

const mapStateToProps = state => {
  return {
    robots: state.robots,
    searchfield: state.searchfield
  };
};

const mapDispatchToProps = dispatchEvent => {
  return {
    onSearchChange: event => dispatchEvent(setSearchField(event.target.value))
  };
};

class App extends Component {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
