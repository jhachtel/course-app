import React, { Component } from "react";
import { CourseTableRow } from "./CourseTableRow";

export class CourseTable extends Component {
  render() {
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th
              colSpan="5"
              className="bg-primary text-white text-center h4 p-2"
            >
              Courses
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>College</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.courses.map(c => (
            <CourseTableRow
              course={c}
              key={c.id}
              editCallback={this.props.editCallback}
              deleteCallback={this.props.deleteCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
