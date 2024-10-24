import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserData.css";
import { useEffect } from "react";

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: number;
  birthDate: string;
}

export default function UserData() {
  const { state } = useLocation();
  const { user, isEditMode } = state || {};

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormData>();

  const onSubmit = async (data: UserFormData) => {
    try {
      if (isEditMode && user) {
        await axios.put(`https://dummyjson.com/users/${user.id}`, data);
        toast.success("Yeah! User updated successfully!");
        navigate("/dashboard/users-list");
      } else {
        await axios.post("https://dummyjson.com/users/add", data);
        toast.success("Yeah! User added successfully!");
        navigate("/dashboard/users-list");
      }
    } catch (error) {
      console.error(error);

      toast.error("Sorry, something went wrong.");
    }
  };

  // Effect to populate form if editing an existing user
  useEffect(() => {
    if (isEditMode && user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("phone", user.phone);
      setValue("age", user.age);
      setValue("birthDate", user.birthDate);
    }
    if (!isEditMode) {
      setValue("firstName", "");
      setValue("lastName", "");
      setValue("email", "");
      setValue("phone", NaN );
      setValue("age",  NaN);
      setValue("birthDate", "");
    }
  }, [isEditMode, user]);

  return (
    <div className="p-4 bg-gray">
      <div className="m-3">
        <h3 className="form-title">
          {isEditMode ? "Update User" : "Add User"}
        </h3>
      </div>
      <hr />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 m-md-5 p-4 form-card"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Firstname"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Email should be valid",
                  },
                })}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Age</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter your Age"
                {...register("age", {
                  required: "Age is required",
                  max: { value: 50, message: "Max age is 50" },
                  min: { value: 0, message: "Min age is 1" },
                })}
              />
              {errors.age && (
                <span className="text-danger">{errors.age.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Phone Number"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Birth Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Birth Date"
                {...register("birthDate", {
                  required: "Birth date is required",
                })}
              />
              {errors.birthDate && (
                <span className="text-danger">{errors.birthDate.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="text-center my-4">
          <button className="btn  w-50">
            {isEditMode ? "Update" : "Add"} User
          </button>
        </div>
      </form>
    </div>
  );
}
