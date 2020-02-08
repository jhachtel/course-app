import React, { Component } from "react";

export class InstructorEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: props.instructor.id || "",
        name: props.instructor.name || "",
        title: props.instructor.title || "",
        courses: props.instructor.courses || []
      }
    };
  }

  handleChange = ev => {
    ev.persist();
    this.setState(
      state =>
        (state.formData[ev.target.name] =
          ev.target.name === "courses"
            ? ev.target.value.split(",")
            : ev.target.value)
    );
  };

  handleClick = () => {
    this.props.saveCallback({
      ...this.state.formData,
      courses: this.state.formData.courses.map(val => Number(val))
    });
  };

  render() {
    return (
      <div className="m-2">
        <div className="form-group">
          <label>Id</label>
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
          <label>Title</label>
          <input
            className="form-control"
            name="title"
            disabled
            value={this.state.formData.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Courses</label>
          <input
            className="form-control"
            name="courses"
            disabled
            value={this.state.formData.courses}
            onChange={this.handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary m-1" onClick={this.handleClick}>
            Save
          </button>
          <button
            className="btn btn-secodary m-1"
            onClick={this.props.cancelCallback}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
