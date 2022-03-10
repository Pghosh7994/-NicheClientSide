import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../Hooks/useFirebase";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://tranquil-hamlet-44273.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
    reset();
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Review;
