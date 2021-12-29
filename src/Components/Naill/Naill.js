import React from 'react';






const Naill = () => {


    return (

        <div className="my-5 " style={{ fontFamily: "Besley" }}>



            <div class="container my-5 py-5 ">
                <div class="row">
                    <div className="row">


                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="ms-5 mt-5 pt-3 ps-5">
                                <img
                                    className="img-fluid rounded"
                                    style={{ objectFit: "cover", height: "550px" }}
                                    src="https://cdn.theculturetrip.com/wp-content/uploads/2018/06/featured-main-pool-daytime.jpg"
                                    class="d-block w-100  se1"
                                    alt="..."
                                />
                            </div>

                        </div>




                        <div className="offset-1 col-lg-5 col-md-12 col-sm-12 ">

                            <div className="m-4">



                                <div className="m-3">
                                    <h1 className="star" style={{  color: "#0207a8" }}>
                                    Contact With Us
                                    <hr />
                                    </h1>
                                    <h5 class="star text-danger">
                                    *Or Give Us a Call To Schedule a Treatment (888)265-0000*
                                    </h5>


                                </div>
                            </div>


                            <form action="/action">
                                <div class="form-group">
                                    <label className="mb-3 mt-2" for="name">Full Name * </label> 
                                    <input type="name" class="form-control" id="name" placeholder="Full Name" name="name" />
                                </div>
                                <div class="form-group">
                                    <label className="mb-3 mt-2" for="appointment">Appointment Date * </label>
                                    <input type="appointment" class="form-control" id="appointment" placeholder="Enter Appointment" name="appointment" />
                                </div>
                                <div class="form-group">
                                    <label className="mb-3 mt-2" for="number">Phone Number * </label>
                                    <input type="number" class="form-control" id="number" placeholder="Enter Phone Number" name="number" />
                                </div>
                                <div class="form-group">
                                    <label className="mb-3 mt-2" for="email">Email * </label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div class="form-group">
                                    <label className="mb-3 mt-2" for="pwd">Password * </label>
                                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>

                               
                                    <button type="submit" className="btn btn-danger mt-4">Send</button>
                               
                            </form>




                        </div>




                    </div>





                   

                </div>
            </div>


        </div>

    );

};

export default Naill;