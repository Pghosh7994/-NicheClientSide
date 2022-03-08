import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "./../../Hooks/useFirebase";

const LogIn = () => {
  const { handleUserRegister } = useFirebase();
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password);
    console.log(data);
    reset();
  };
  const { loginWithGoogle, user } = useFirebase();
  return (
    <div>
      <div className="mt-5">
        <h3>LogIn form:</h3>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Enter your email address:</h4>
          <input
            className="input-field px-5"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br /> <br />
          <h4>Enter your password:</h4>
          <input
            className="input-field px-5"
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <input
            className="submit-btn btn btn-danger mt-3"
            type="submit"
            value="Login"
          />
        </form>
      </div>
      <div className="mt-5">
        {!user.displayName ? (
          <div className="mt-5">
            <Link to="/home">
              <button
                onClick={loginWithGoogle}
                className=" mt-5 btn-success p-3"
              >
                Sign in With Google
              </button>
            </Link>
          </div>
        ) : (
          <h1>LogIn Successful ! welcome {user.displayName || user.email}</h1>
        )}
      </div>
    </div>
  );
};

export default LogIn;
