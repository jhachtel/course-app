import React, { Component } from "react";
import InstructorTableRow from "./InstructorTableRow";

export class InstructorTable extends Component {
  render() {
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th colSpan="5" className="bg-dark text-white text-center h4 p-2">
              Instructors
            </th>
          </tr>
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
              key={i.id}
              editCallback={this.props.editCallback}
              deleteCallback={this.props.deleteCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
