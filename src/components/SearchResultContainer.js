import React, { Component } from "react";
// import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    Emp1First: [],
    Emp1Last: [],
    Emp1Em: [],
    Emp2First: [],
    Emp2Last: [],
    Emp2Em: [],
    Emp3First: [],
    Emp3Last: [],
    Emp3Em: [],
  };

  // When this component mounts, search the API
  componentDidMount() {
    this.fillEmployees();
  }

  fillEmployees = () => {
    API.search()
      .then(res => {
        console.log(res.data.results[0]);
        this.setState({ Emp1First: res.data.results[0].name.first });
        this.setState({ Emp1Last: res.data.results[0].name.last });
        this.setState({ Emp1Em: res.data.results[0].email });

      })
      .catch(err => console.log(err));

    API.search()
      .then(res => {
        console.log(res.data.results[0]);
        this.setState({ Emp2First: res.data.results[0].name.first });
        this.setState({ Emp2Last: res.data.results[0].name.last });
        this.setState({ Emp2Em: res.data.results[0].email });

      })
      .catch(err => console.log(err));

    API.search()
      .then(res => {
        console.log(res.data.results[0]);
        this.setState({ Emp3First: res.data.results[0].name.first });
        this.setState({ Emp3Last: res.data.results[0].name.last });
        this.setState({ Emp3Em: res.data.results[0].email });

      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Employee Coordinator</h1>
          <p>Coworker Info at a Glance</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.state.Emp1First}</td>
              <td>{this.state.Emp1Last}</td>
              <td>{this.state.Emp1Em}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{this.state.Emp2First}</td>
              <td>{this.state.Emp2Last}</td>
              <td>{this.state.Emp2Em}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{this.state.Emp3First}</td>
              <td>{this.state.Emp3Last}</td>
              <td>{this.state.Emp3Em}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
