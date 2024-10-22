import { useNavigate } from "react-router-dom";
import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from './../Context/AuthContext';
export default function Login() {
  let {saveUserData}=useContext(AuthContext)
  interface LoginFormInputs {
    username: string;
    password: string;
  }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log(data);

    //api integration
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      localStorage.setItem("userToken", response?.data.accessToken);
      saveUserData();
      toast("Login Successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast("Login Failed !");
    }
  };
  return (
    <>
      <div className="loginPage ">
        <ToastContainer />
        <div className="container">
          <div className="row vh-100  d-flex justify-content-center align-items-center">
            <div className="col-md-5">
              <div className="cardLogin bg-white  text-center">
                <h3 className="mainTitle">User Management System</h3>
                <h4 className="secondTitle mt-5">Sign In</h4>
                <p className="mainTxt mb-4">
                  Enter your credentials to access your account
                </p>
                <div className="formWrapper">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" mb-3">
                      <label>User Name</label>
                      <input
                        //value=emilys
                        type="text"
                        className="form-control"
                        placeholder="Enter your Name"
                        {...register("username", {
                          required: "user name is required",
                        })}
                      />
                      {errors.username && (
                        <span className="text-danger">
                          {errors.username.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        //value=emilyspass
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        {...register("password", {
                          required: "password is required",
                        })}
                      />
                      {errors.password && (
                        <span className="text-danger">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <button className="btn btnLogin  w-100">Sign In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
