import React from "react";

// const Variable
// const harga = 3000;
// harga = 4000;

// var Variable
// var harga = 3000;
// if (true) {
//   var harga = 5000;
// }

// let Variable
let harga = 3000;
if (true) {
  let harga = 5000;
}

export const Variable = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};
