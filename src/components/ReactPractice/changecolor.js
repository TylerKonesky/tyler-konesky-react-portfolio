import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar"

export default class ChangeColor extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SideBar />
        Change COlor
      </div>
    );
  }
}