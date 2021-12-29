import React from "react";

import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 30,
  value: 2.5,
  edit: false
};




export default function Admin() {
  return (
    <div className="App">
      <h1>react-rating-stars-component</h1>
      <h4>Readonly rating stars</h4>.
      <ReactStars {...firstExample} />
     
    </div>
  );
}
