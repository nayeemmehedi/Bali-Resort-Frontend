import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 " style={{ fontFamily: "Besley" }}>
      <div className="footer-container ">
        <div className="">
          <div className="row name4 ps-5">
            <div className="col-md-5">
              <div class="row g-3 align-items-center mt-3">
                <div class="col-auto">
                  <label for="inputPassword6" class="col-form-label">
                    Search
                  </label>
                </div>
                <div class="col-auto">
                  <input
                    type="Search"
                    id="inputPassword6"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
                <div class="col-auto">
                  <span id="passwordHelpInline" class="form-text">
                    Must Be 8-10 characters long.
                  </span>
                </div>
              </div>

              <div>
                <div className="left-container text-start mt-4">
                  <h1 style={{ fontFamily: "Besley", textAlign: "center" }}>
                    BALI 
                    <span style={{ color: "blue", fontFamily: "Besley" }}>
                      {" "}
                     RESORT
                    
                    </span>{" "}
                    
                  </h1>
                  <div className="icons-container d-flex text-center "></div>
                  <p className="mt-5 ">
                    <small style={{ fontFamily: "Besley" }}>
                      BALI RESORT : Book your Accommodation in 85,000
                      destinations worldwide. Quick, Easy Booking. No Booking
                      Fees · Free Cancellation · 24/7 Customer Service Types:
                      Hotels, Apartments, Villas, Hostels, Resorts, B&Bs World's
                      Leading Online Travel Agency Website - World Travel Awards
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul className="mt-5">
                  <h2>Our Salons</h2>
                  <hr />
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    Location and Favourite Place
                  </li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    Our History
                  </li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    Contact Us
                  </li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    {" "}
                    FAQ + Policies
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer-menu-container">
                <ul className="mt-5">
                  <h2>Working Hours</h2>
                  <hr />
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    Monday - Friday
                  </li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    09:00 - 22:00
                  </li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    Saturday - Sunday
                  </li>
                  <li className="footer-menu" style={{ fontFamily: "Besley" }}>
                    {" "}
                    11:00 - 00:00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
