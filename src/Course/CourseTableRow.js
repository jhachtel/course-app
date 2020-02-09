import React, { Component } from "react";

export class CourseTableRow extends Component {
  render() {
    let course = this.props.course;
    return (
      <tr>
        <td>{course.id}</td>
        <td>{course.name}</td>
        <td>{course.college}</td>
        <td>{course.number}</td>
        <td>
          <button
            className="btn btn-sm btn-warning m-1"
            onClick={() => this.props.editCallback(course)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger m-1"
            onClick={() => this.props.deleteCallback(course)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
