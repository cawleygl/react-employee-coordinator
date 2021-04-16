import React, { Component } from "react";
// import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    firstName: [],
    lastName: []
  };

  // When this component mounts, search the API
  componentDidMount() {
    this.fillEmployees();
  }

  fillEmployees = () => {
    API.search()
      .then(res => {
        console.log(res.data);
        this.setState({ firstName: res.data.results[0].name.first});
        this.setState({ lastName: res.data.results[0].name.last});
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>API RESULTS</h1>
        <div>{this.state.firstName} {this.state.lastName}</div>
      </div>
    );
  }
}

export default SearchResultContainer;
