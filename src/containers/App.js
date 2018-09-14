import React, { Component } from "react";
import MainPage from "../components/MainPage";

import { connect } from "react-redux";
import { setSearchField } from "../actions";
import "tachyons";

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
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
