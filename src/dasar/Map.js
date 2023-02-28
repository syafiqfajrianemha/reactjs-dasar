import React from "react";

const foods = [
  {
    name: "Bakso",
    price: 12000,
  },
  {
    name: "Mie Ayam",
    price: 10000,
  },
  {
    name: "Nasi Goreng",
    price: 14000,
  },
  {
    name: "Soto Kwali",
    price: 8000,
  },
];

const totalHarga = foods.reduce((total, food) => total + food.price, 0);

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <ul>
        {foods.map((food, index) => {
          return (
            <li key={index}>
              {index + 1}. {food.name} - Harga {food.price}
            </li>
          );
        })}
        <br />
        <li>Total Harga : {totalHarga}</li>
      </ul>

      <h2>Map Filter Harga yang lebih dari atau sama dengan 12rb</h2>
      <ul>
        {foods
          .filter((food) => food.price >= 12000)
          .map((food, index) => {
            return (
              <li key={index}>
                {index + 1}. {food.name} - Harga {food.price}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Map;
