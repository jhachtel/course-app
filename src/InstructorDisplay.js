import React, { Component } from "react";
import InstructorEditor from "./InstructorEditor";
import InstructorTableRow from "./InstructorTableRow";
import InstructorTable from "./InstructorTable";

export class InstructorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selected: null
    };
  }

  startEditing = instructor => {
    this.setState({ showEditor: true, selected: instructor });
  };

  createInstructor = () => {
    this.setState({ showEditor: true, selected: {} });
  };

  cancelEditing = () => {
    this.setState({ showEditor: false, selected: null });
  };

  saveInstructor = instructor => {
    this.props.saveInstructor(instructor);
    this.setState({ showEditor: false, selected: null });
  };

  render() {
    if (this.state.showEditor) {
      return (
        <InstructorEditor
          key={this.state.selected.id || -1}
          instructor={this.state.selected}
          saveCallback={this.saveInstructor}
          cancelCallback={this.cancelEditing}
        />
      );
    } else {
      return (
        <div className="m-2">
          <InstructorTable
            instructors={this.props.instructors}
            editCallback={this.startEditing}
            deleteCallback={this.props.deleteCallback}
          />
          <div className="text-center">
            <button
              className="btn btn-primary m-1"
              onClick={this.createInstructor}
            >
              Create Instructor
            </button>
          </div>
        </div>
      );
    }
  }
}
