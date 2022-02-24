import React, { Component } from "react";
import "./Page.css";

export default class Page extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    users: [],
  };

  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onsubmit = (e) => {
    e.preventDefault();
    this.setState({
      users: [
        ...this.state.users,
        {
          name: this.state.name,
          department: this.state.department,
          rating: this.state.rating,
        },
      ],
      name: "",
      department: "",
      rating: "",
    });
  };

  render() {
    return (
      <>
        <div className="page">
          <div className="employee-form">
            <h1>employee feeedback form</h1>
            <form onSubmit={this.onsubmit}>
              <div className="form-group">
                <label htmlFor="name">Name :</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onchange}
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department :</label>
                <input
                  required
                  name="department"
                  value={this.state.department}
                  onChange={this.onchange}
                  type="text"
                  id="department"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating :</label>
                <input
                  required
                  name="rating"
                  value={this.state.rating}
                  onChange={this.onchange}
                  type="number"
                  id="rating"
                  className="form-control"
                />
              </div>
              <button type="submit" className="form-control">
                submit
              </button>
            </form>
          </div>
          <div className="employees-data">
            {this.state.users.length > 0 &&
              this.state.users.map((user) => {
                return (
                  <div className="employee">
                    <h3>
                      Name : {user.name} | Department : {user.department} |
                      rating : {user.rating}
                    </h3>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
