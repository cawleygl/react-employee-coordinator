import React from "react";

function ResultChart(props) {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Birthday</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <tr key={result.id.value}>
              <th scope="row">{result.id.value}</th>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.dob.date.slice(5, 10)}</td>
              <td>{result.email}</td>
              <td>Office: {result.phone}, Cell: {result.cell}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );

}

export default ResultChart;
