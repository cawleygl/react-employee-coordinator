import React, { Component } from "react";
import API from "../utils/API";
import ResultChart from "./ResultChart";
import SortButtons from "./SortButtons";


class CallResults extends Component {
  state = {
    results: [],
  };

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

  filter = (event) => {
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


  render() {
    return (
      <div>
        <ResultChart results={this.state.results} />
        <SortButtons sortById={this.sortById} sortByName={this.sortByName} />
      </div>
    );
  }

}

export default CallResults;
