import React, { Component } from "react";
class Counters extends Component {
  render() {
    return (
      <div className="col">
        <span className={this.getBadgeClasses()}>{this.getCounter()}</span>

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
          // value={this.props.value}
          counters={this.props.counter}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
          // value={this.props.value}
          counters={this.props.counter}
          disabled={this.props.counter.value === 0 ? true : false}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter)}
          // value={this.props.value}
          counters={this.props.counter}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counters;
