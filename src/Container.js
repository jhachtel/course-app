import React, { Component } from "react";
import { Selector } from "./Selector";
import { CourseDisplay } from "./CourseDisplay";
import { InstructorDisplay } from "./InstructorDisplay";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: "Defeating Cyborgs",
          college: "Avenger",
          number: "1200"
        },
        {
          id: 2,
          name: "Psychosis in Crime Lords",
          college: "Arkham",
          number: "3508"
        },
        {
          id: 3,
          name: "Practical Vibranium Applications",
          college: "Wakanda",
          number: "4582"
        },
        {
          id: 4,
          name: "Innovations in Exoskeletons",
          college: "Avenger",
          number: "7805"
        }
      ],
      instructors: [
        {
          id: 1,
          name: "Tony Stark",
          title: "CEO, Stark Enterprises",
          courses: "1, 4"
        },
        {
          id: 2,
          name: "Bruce Wayne",
          title: "Chairman, Wayne Industries",
          courses: "2"
        },
        {
          id: 3,
          name: "T'challa",
          title: "King of Wakanda",
          courses: "3"
        }
      ]
    };
    this.idCounter = 100;
  }

  saveData = (collection, item) => {
    if (item.id === "") {
      item.id = this.idCounter++;
      this.setState(
        state => (state[collection] = state[collection].concat(item))
      );
    } else {
      this.setState(
        state =>
          (state[collection] = state[collection].map(stored =>
            stored.id === item.id ? item : stored
          ))
      );
    }
  };

  deleteData = (collection, item) => {
    this.setState(
      state =>
        (state[collection] = state[collection].filter(
          stored => stored.id !== item.id
        ))
    );
  };

  render() {
    return (
      <div>
        <Selector>
          <CourseDisplay
            name="Courses"
            courses={this.state.courses}
            saveCallback={c => this.saveData("courses", c)}
            deleteCallback={c => this.deleteData("courses", c)}
          />
          <InstructorDisplay
            name="Instructors"
            instructors={this.state.instructors}
            saveCallback={i => this.saveData("instructors", i)}
            deleteCallback={i => this.deleteData("instructors", i)}
          />
        </Selector>
      </div>
    );
  }
}
