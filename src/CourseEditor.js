import React, { Component } from "react";

export class CourseEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: props.course.id || "",
        name: props.course.name || "",
        college: props.course.college || "",
        number: props.course.number || ""
      }
    };
  }

  handleChange = ev => {
    ev.persist();
    this.setState(state => (state.formData[ev.target.name] = ev.target.value));
  };

  handleClick = () => {
    this.props.saveCallback(this.state.formData);
  };

  render() {
    return (
      <div className="m-2">
        <div className="form-group">
          <label>ID</label>
          <input
            className="form-control"
            name="id"
            disabled
            value={this.state.formData.id}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>College</label>
          <input
            className="form-control"
            name="college"
            value={this.state.formData.college}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Number</label>
          <input
            className="form-control"
            name="number"
            value={this.state.formData.number}
            onChange={this.handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={this.handleClick}>
            Save
          </button>
          <button
            className="btn btn-secondary m-1"
            onClick={this.props.cancelCallback}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
