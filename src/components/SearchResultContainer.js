import React, { Component } from "react";
// import ResultList from "./ResultList";
import API from "../utils/API";
import ResultChart from "./ResultChart";

class SearchResultContainer extends Component {
  state = {
    results: [],
  };

  // When this component mounts, search the API
  componentDidMount() {
    this.fillEmployees();
  }

  fillEmployees = () => {
    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({ results: res.data.results });
      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <ResultChart results={this.state.results} />
      </div>
    );
  }

}

export default SearchResultContainer;
