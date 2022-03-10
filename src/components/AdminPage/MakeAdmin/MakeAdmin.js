import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit, reset, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch("https://tranquil-hamlet-44273.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
  };
  return (
    <div className="mt-5">
      <h2>Enter the requred email address for making an admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field px-5"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
