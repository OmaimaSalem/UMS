import { useNavigate } from "react-router-dom";
import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
export default function Login() {
  // interface LoginFormInputs{
  //   username:string,
  //   password:string
  // }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler = async (data) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login" , data);
      console.log(response);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="loginPage ">
      <div className="container">
        <div className="row vh-100  d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="cardLogin bg-white  text-center">
              <h3 className="mainTitle">User Management System</h3>
              <h4 className="secondTitle mt-3">Sign In</h4>
              <p className="mainTxt mb-3">
                Enter your credentials to access your account
              </p>
              <div className="formWrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mb-3">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                    {...register("username" ,{required: "user name is required"}) }
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    {...register("password" ,{required: "user name is required"}) }
                  />
                </div>
                <button className="btn btnLogin rounded-0 w-100">
                  Sign In
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
