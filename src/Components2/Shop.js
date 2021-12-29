import React, { useState, useEffect } from "react";

import ReactStars from "react-rating-stars-component";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "../All_API/ALL_API";
import child from "../All_API/Api_child";

const Shop = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-basin-10438.herokuapp.com/addResort`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);

 

  return (
    <div>
      <Navbar></Navbar>
      <br />
      <h1 className="text-center star text-danger">
        Best Resort Give You More Intertainment..
      </h1>
      <p className="text-center star text-success">
        Choice Which One Best For U..
      </p>

      <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
        {data.map((v) => (
          <div
            className="col-lg-4  col-md-12 col-sm-12 rounded"
            style={{ fontFamily: "Besley" }}
          >
            <div className="m-4" style={{ color: "black" }}>
              <div className="rounded-3 shadow ">
                <div className="p-2">
                  <div className="text-center">
                    {" "}
                    <img
                      style={{ height: "220px", width: "320px" }}
                      src={v.img}
                      alt=""
                    />
                  </div>{" "}
                  <br />
                  <div className="text-center">
                    <p className="star"> {v.resort_name}</p>
                    <p style={{ color: "red" }}>Amount : {v.amount}</p>
                    <p className="star">{v.description}</p>
                    <p> Available Room : {v.sit} </p>

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
                      <button className=" btn btn-danger">Buy Now</button>
                    </Link>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;
