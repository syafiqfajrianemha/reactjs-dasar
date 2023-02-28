import React from "react";
import Table from "react-bootstrap/Table";

const TableComponent = ({ foods, editData, hapusData }) => {
  return (
    <Table striped bordered className="mb-5 shadow-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food, index) => {
          return (
            <tr key={food.id}>
              <td>{index + 1}</td>
              <td>{food.namaMakanan}</td>
              <td>{food.deskripsi}</td>
              <td>Rp. {food.harga}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => editData(food.id)}
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(food.id)}
                >
                  hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
