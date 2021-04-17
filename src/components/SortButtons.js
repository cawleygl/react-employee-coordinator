import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <button onClick={props.sortById} className="btn btn-primary m-3">
            Sort by ID
        </button>
          <button onClick={props.sortByName} className="btn btn-primary m-3">
            Sort by Last Name
        </button>
        </div>
      </form>

    </div>
  );
}

export default SearchForm;
