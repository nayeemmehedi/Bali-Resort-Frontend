import React from 'react';
import '../Carousel/Carousel.css';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators col-lg-6 col-md-12 col-sm-12">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active  img-car">

                        {/* <img className=""

                            src="https://wallpapercave.com/wp/wp4037169.jpg" class="d-block w-100" alt="..." /> */}
                            {/* https://wallpaperaccess.com/full/373894.jpg */}

                            <img className=""

                            src="https://karmatrendz.files.wordpress.com/2014/05/140519_hanging_garden_ubud_001.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">
                            <p style={{ color: "white", fontFamily: "Besley" }}> "Bali is a province of Indonesia "</p>
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>" East of Java  "</h1>
                            <button class="btn btn-danger">View More</button>




                        </div>

                    </div>
                    <div class="carousel-item img-car">
                        <img className=""
                            src="https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-31-at-10.06.50.png" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <p style={{ color: "white", fontFamily: "Besley" }}> " The westernmost of the Lesser Sunda Islands "</p>
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>" west of Lombok"</h1>

                            


                        </div>

                    </div>
                    <div class="carousel-item  img-car">
                        <img className=" "
                            src="https://news.realas.com/wp-content/uploads/2018/02/resort-style-living-give-home-wow-factor.png" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <p style={{ color: "white", fontFamily: "Besley" }}>"  The provincial capital, Denpasar, is the most populous city "</p>
                            <h1 style={{ color: "white", fontFamily: "Besley" }}>"  Shade Of Color Nusa Lembongan, and Nusa Ceningan."</h1>


                        </div>

                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carousel;