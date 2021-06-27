import { Rate } from "antd";
import React from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

class Rater extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (value) => {
    this.setState({ value });
    console.log(value);
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
      </span>
    );
  }
}

export default Rater;
