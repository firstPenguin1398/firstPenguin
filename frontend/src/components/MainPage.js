import { Component } from "react";
import FpIntro from "./FpIntro";
import FpActivity from "./FpActivity";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <FpIntro />
        <FpActivity />
      </div>
    );
  }
}
