import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Profile.css"
export default function Profile() {
  let { userData}:any =useContext(AuthContext)
  
  return (
    <div className="p-4 bg-gray">
      <div className="m-3">
        <h3 className="form-title">Profile</h3>
      </div>
      <hr />

      <form className="m-5 p-4 form-card formProfile position-relative">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="  userImage">
            <img src={userData?.image} alt="user" className="rounded-circle"/>
          </div></div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                value={userData?.firstName}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={userData?.lastName}
              />
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <div className="mb-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={userData?.email}
              />
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={userData?.age}
              />
            </div>
          </div> */}
        </div>

        {/* <div className="row">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                value={userData?.phone}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label">Birth Date</label>
              <input
                type="text"
                className="form-control"
                value={userData?.bithDate}
              />
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
}
