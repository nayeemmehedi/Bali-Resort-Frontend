import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

import fakedata from "../../fakedata.json";

const Product = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-basin-10438.herokuapp.com/addResort`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);
  console.log(data)

//   const addall =()=>{
//     fetch('http://localhost:5600/addAll', {
//   method: 'POST',
//   body: JSON.stringify(fakedata),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => alert("done"));


//   }

  return (
    <div>
      <br />
      <h1 className="text-center mt-2 star danger">Popular Resort</h1>
      

      <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
        {data.map((v) =>
          5 > v.value && v.value > 2 ? (
            <div className="col-lg-4  col-md-12 col-sm-12 rounded">
              <div className="mx-3  p-4" style={{ color: "black" }}>
                <div className="rounded-3 shadow ">
                  <div className="p-2">
                    <div className="d-flex justify-content-center rounded">
                      {" "}
                      <img
                        className="rounded shadow"
                        style={{ height: "220px", width: "300px" }}
                        src={v.img}
                        alt=""
                      />
                    </div>{" "}
                    <br />
                    <div className="text-center">
                      <p className="star">{v.resort_name}</p>
                      <p style={{ color: "red" }}>Amount : {v.amount}</p>
                      <p className="star">{v.description}</p>

                      <div className="d-flex justify-content-center">
                        <ReactStars
                          {...{
                            size: 30,
                            value: v.value,
                            edit: false,
                          }}
                        />
                      </div>
                      <Link to={`/resortConfirm/${v._id}`}>
                        {" "}
                        <button className=" btn btn-danger">
                          Buy Now
                        </button>{" "}
                      </Link>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Product;
