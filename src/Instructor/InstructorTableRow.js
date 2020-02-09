import React, { Component } from "react";

export default class InstructorTableRow extends Component {
  render() {
    let i = this.props.instructor;
    return (
      <tr>
        <td>{i.id}</td>
        <td>{i.name}</td>
        <td>{i.title}</td>
        <td>{i.courses.join(", ")}</td>
        <td>
          <button
            className="btn btn-sm btn-warning m-1"
            onClick={() => this.props.editCallback(i)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger m-1"
            onClick={() => this.props.deleteCallback(i)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
