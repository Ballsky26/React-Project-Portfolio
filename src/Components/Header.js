import React, { Component } from "react";

class Header extends Component {
  render() {
    if (!this.props.data) return null;
    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
  }
}
