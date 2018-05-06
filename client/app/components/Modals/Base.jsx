import React, { Component } from "react";

export default class Base extends Component {
  render() {
    const { title = 'Base Dialog' } = this.props;

    return (
        <div>base dialog</div>
    )
  }
}
