import React, { Component } from "react";
// import ResultList from "./ResultList";
import API from "../utils/API";
import ResultChart from "./ResultChart";
import SortButtons from "./SortButtons";


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

  sortById = (event) => {
    event.preventDefault();
    let employees = this.state.results;
    employees.sort((a, b) => {
      return parseInt(a.id.value) - parseInt(b.id.value);
    });
    this.setState({ results: employees });
    console.log(this.state.results);
  }


  sortByName = (event) => {
    event.preventDefault();
    let employees = this.state.results;
    employees.sort((a, b) => {
      let fa = a.name.last.toLowerCase(),
        fb = b.name.last.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    this.setState({ results: employees });
    console.log(this.state.results);
  }

  filterByBirthday = (event, month) => {
    event.preventDefault();
    console.log(this.state.results[0].dob.date.slice(5, 7) + this.state.results[0].dob.date.slice(8, 10));

    let employees = this.state.results;
    employees.sort((a, b) => {
      return parseInt(a.dob.date.slice(5, 10)) - parseInt(b.dob.date.slice(5, 10));
    });
    this.setState({ results: employees });
    console.log(this.state.results);
  }

  render() {
    return (
      <div>
        <ResultChart results={this.state.results} />
        <SortButtons sortById={this.sortById} sortByName={this.sortByName} filterByBirthday={this.filterByBirthday} />
      </div>
    );
  }

}

export default SearchResultContainer;
