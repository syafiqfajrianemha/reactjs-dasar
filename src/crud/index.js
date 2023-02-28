import React, { Component } from "react";
import FormComponent from "./FormComponent";
import NavbarComponent from "./NavbarComponent";
import TableComponent from "./TableComponent";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      id: "",
      namaMakanan: "",
      deskripsi: "",
      harga: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hanldeSubmit = (e) => {
    e.preventDefault();

    if (this.state.id === "") {
      this.setState({
        foods: [
          ...this.state.foods,
          {
            id: this.state.foods.length + 1,
            namaMakanan: this.state.namaMakanan,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananYangSelainDiPilih = this.state.foods
        .filter((food) => food.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

      this.setState({
        foods: [
          ...makananYangSelainDiPilih,
          {
            id: this.state.foods.length + 1,
            namaMakanan: this.state.namaMakanan,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      id: "",
      namaMakanan: "",
      deskripsi: "",
      harga: 0,
    });
  };

  editData = (id) => {
    const makananYangDiPilih = this.state.foods
      .filter((food) => food.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      })[0];

    this.setState({
      id: makananYangDiPilih.id,
      namaMakanan: makananYangDiPilih.namaMakanan,
      deskripsi: makananYangDiPilih.deskripsi,
      harga: makananYangDiPilih.harga,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.foods
      .filter((food) => food.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      foods: makananBaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <FormComponent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.hanldeSubmit}
          />
          <TableComponent
            foods={this.state.foods}
            editData={this.editData}
            hapusData={this.hapusData}
          />
        </div>
      </div>
    );
  }
}
