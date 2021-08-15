import React, { Component } from "react";

export class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: React.Children.toArray(props.children)[0].props.name
    };
  }

  setSelection = ev => {
    ev.persist();
    this.setState({ selection: ev.target.name });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div class="col-xs-12 col-md-3">
            <div class="m-2">
              {React.Children.map(this.props.children, c => (
                <button
                  name={c.props.name}
                  onClick={this.setSelection}
                  className={`
                          btn btn-block 
                          ${
                            this.state.selection === c.props.name
                              ? "btn btn-primary active"
                              : "btn-secondary"
                          }`}
                >
                  {c.props.name}
                </button>
              ))}
            </div>
          </div>
          <div class="col-xs-12 col-md-9">
            {React.Children.toArray(this.props.children).filter(
              c => c.props.name === this.state.selection
            )}
          </div>
        </div>
      </div>
    );
  }
}
