import React, { Component } from "react";
import InstructorTableRow from "./InstructorTableRow";

export class InstructorTable extends Component {
  render() {
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {this.props.instructors.map(i => (
            <InstructorTableRow
              instructor={i}
              key={i.key}
              editCallback={this.props.editCallback}
              deleteCallback={this.props.deleteCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
