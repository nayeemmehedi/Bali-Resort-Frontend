import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useHistory } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


const ManageProducts = () => {
  const history = useHistory();

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://shielded-basin-10438.herokuapp.com/addResort")
      .then((data) => data.json())
      .then((value) => setdata(value));
  }, []);

  const deletebtn = (id) => {
    if (window.confirm("Do you want to Delete it?") == true) {
      fetch(
        `https://shielded-basin-10438.herokuapp.com/ResortdeleteProduct/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          alert("Your item has been deleted");
          window.location.reload();
        });
    } else {
      alert("Cancel ...");
    }
  };

  return (
    <div className="darkman" style={{ fontFamily: "Besley" }}>
      <h2 className="text-center star text-danger">All Available Resort</h2>

      <div className="row ms-lg-3 p-lg-3 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
        {/* {
                    data.map(v =>

                        <div className="col-lg-4  col-md-12 col-sm-12 " style={{ fontFamily: 'Besley' }}>

                            <div className="m-2" style={{ color: "black" }}>

                                <div className="rounded ">


                                    <div className="p-2 text-primary bg-info">


                                       <div className="text-center pt-2 "> <img className='rounded'  style={{ height: "220px", width: "280px" }} src={v.img} alt="" /></div> <br />
                                       <div className="ps-3"> <p>Name : {v.name}</p>
                                        <p style={{ color: "red" }}>Amount : {v.amount}</p>
                                        <p>{v.description}</p>
                                       
                                       <div className="ps-2">
                                        <ReactStars {...{
                                            size: 30,
                                            value: v.value,
                                            edit: false
                                        }} />
                                       </div>

                                        
                                       <button  onClick={()=>deletebtn(v._id)}  className=" btn btn-danger">delete <DeleteForeverIcon/></button>
                                       </div>
                                       <div className="pb-2"></div>


                                    </div>

                                    <div>


                                    </div>


                                </div>



                            </div>

                        </div>


                    )
                } */}

        {data.map((v) => (
          <div
            className="col-lg-4  col-md-12 col-sm-12 "
            style={{ fontFamily: "Besley" }}
          >
            <div class="box">
              <div class="box-inner">
                <div class="box-front">
                  <div
                    className="p-2 text-primary bg-info m-2 rounded"
                    style={{ color: "black" }}
                  >
                    <div className="text-center ">
                       <div className="ps-3">
                      {" "}
                      <h5 className="star"> {v.resort_name}</h5>
                      
                      </div>
                      {/* <button
                        onClick={() => deletebtn(v._id)}
                        className=" btn btn-danger"
                      >
                        delete <DeleteForeverIcon />
                      </button> */}
                    </div>
                      {" "}
                      <img
                        className="rounded"
                        style={{ height: "220px", width: "280px" }}
                        src={v.img}
                        alt=""
                      />

                     


                      <p className="mt-3" style={{ color: "red" }}>Amount : {v.amount}</p>
                      <p>{v.description}</p>
                      <div className="ps-2">
                        <ReactStars
                          {...{
                            size: 30,
                            value: v.value,
                            edit: false,
                          }}
                        />




                    </div>{" "}
                    <br />
                 
                  </div>


                </div>




                <div class="box-back">

                 <div
                    className="p-2 text-primary bg-info m-2 rounded"
                    style={{ color: "black" }}
                  >
                    <div className="text-center ">
                      {" "}
                      <img
                        className="rounded"
                        style={{ height: "200px", width: "280px" }}
                        src={v.img}
                        alt=""
                      />
                    </div>{" "}
                    <br />
                    <div className="">
                      {" "}
                      <p>Name : {v.resort_name}</p>
                      <p style={{ color: "red" }}>Amount : {v.amount}</p>
                      <p>{v.description}</p>
                      <div className="">
                        <ReactStars
                          {...{
                            size: 20,
                            value: v.value,
                            edit: false,
                          }}
                        />
                      </div>
                      <button
                        onClick={() => deletebtn(v._id)}
                        className=" btn btn-danger"
                      >
                        delete <DeleteForeverIcon />
                      </button>
                    </div>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
