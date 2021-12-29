import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "../../Components2/Review/Review.css";

function MakeAdmin() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    fetch("https://shielded-basin-10438.herokuapp.com/ResortAdmin", {
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
  };

  return (
    <div
      className="resortValue darkman text-danger star"
      style={{ fontFamily: "Besley" }}
    >
      <h4 className="text-center">Make admin</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-danger star" htmlFor="email">
          Email
        </label>
        <input
          placeholder="bluebill1049@hotmail.com"
          type="email"
          {...register("email")}
        />
        <label className="text-danger star">Is admin?</label>
        <input type="checkbox" {...register("isAdmin")} />
        <input type="submit" /> <br /> <br />
      </form>
    </div>
  );
}

export default MakeAdmin;
