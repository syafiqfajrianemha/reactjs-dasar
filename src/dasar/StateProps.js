import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
    };
  }

  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.makanan}</h1>
        <button onClick={() => this.gantiMakanan("Mie Ayam")}>
          Ganti Mie Ayam
        </button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    );
  }
}
