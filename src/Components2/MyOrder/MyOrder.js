import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./order.css";

import axios from "../../All_API/ALL_API";

const MyOrder = () => {

  let user = JSON.parse(localStorage.getItem("user"));

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(
      `https://shielded-basin-10438.herokuapp.com/Resortbuy/${user.email}`
    )
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, [user.email]);

  const deleteBtn = (id) => {
    //   if (window.confirm("Do you want to delete it?") == true) {

    //   fetch(`https://shielded-basin-10438.herokuapp.com/Resortbuydelete/${id}`,
    //   {
    //     method: "DELETE",
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     alert("Your item has been deleted..SUCCESSFULLY");
    //      window.location.reload();
    //   })} else {
    //  	alert("Cancel delete...");
    // }

    const fet = async () => {
      if (window.confirm("Do you want to delete it?") == true) {
        const a = await axios
          .delete(`Resortbuydelete/${id}`, {
            method: "DELETE",
          })
          .then((data) => {
            alert("Your item has been deleted..SUCCESSFULLY");
            window.location.reload();
          });
      } else {
        alert("Cancel delete...");
      }
    };

    fet();
  };

  return (
    <div className="darkman star text-danger">
      <h2 className="text-center">
        {" "}
        {user.name || user.email} - Your all oderedred product here..
      </h2>

      <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
        {data.map((v) => (
          <div
            className="col-lg-3  col-md-12 col-sm-12 rounded bg-info"
            style={{ fontFamily: "Besley" }}
          >
            <div className="m-2" style={{ color: "white" }}>
              <div className="rounded-3  ">
                <div className="p-4">
                  <div className="box12">
                    <div class="text star" style={{color:"red"}}>
                      <p>{v?.value}</p>
                    </div>

                    <img
                      style={{ height: "200px", width: "200px" }}
                      src={v.image}
                      alt=""
                    />
                  </div>
                  <p className="mt-3">Name : {v?.productName}</p>
                  <p>
                    Amount : <span className="text-danger">{v?.price}</span>
                  </p>
                  <p>Place : {v?.place}</p>
                  <p>
                    Order Status : <span className="text-success">{v?.value}</span>
                  </p>

                  {/* <button className=" btn btn-danger">Buy Now</button> */}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBtn(v._id)}
                  >
                    delete <DeleteForeverIcon />{" "}
                  </button>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
