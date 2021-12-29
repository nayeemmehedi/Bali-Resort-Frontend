import React from "react";
import "./Review.css";
import { useForm } from "react-hook-form";

import ReactStars from "react-rating-stars-component";

const Review = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (window.confirm("Do you want to Review it?") == true) {
      fetch("https://shielded-basin-10438.herokuapp.com/ResortReview", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("succefully done");
          window.location.reload();
        });
    } else {
      alert("Cancel ...");
    }
  };

  return (
    <div className="text-center mt-2 darkman">
      <div>
        <h2 className="text-primary star">Review Us</h2>

        <div className="d-flex justify-content-center">
          <p>
            <ReactStars
              {...{
                size: 30,
                value: 4.5,
                edit: false,
              }}
            />
          </p>
        </div>
      </div>

      <div className="resortValue">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-primary star" htmlFor="Name">
            {" "}
            Name
          </label>
          <input
            placeholder="Name"
            {...register("Name", {
              required: "this is a required",
            })}
          />
          {errors.Name && <p>{errors.Name.message}</p>}
          <label className="text-primary star" htmlFor="description">
            Description
          </label>
          <input
            placeholder="description"
            {...register("description", {
              required: "this is required",
              minLength: {
                value: 10,
                message: "Min length is 10",
              },
            })}
          />
          {errors.description && <p>{errors.description.message}</p>}
          <label className="text-primary star" htmlFor="rating">
            Rating
          </label>
          <input
            placeholder="rating 1-5"
            {...register("rating", {
              required: "this is required",
              minLength: {
                value: 1,
              },
            })}
          />
          {errors.rating && <p>{errors.rating.message}</p>}
          <input type="submit" /> <br /> <br />
        </form>
      </div>
    </div>
  );
};

export default Review;
