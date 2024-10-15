import { useState, useEffect } from "react";
import "./UsersList.css";
import axios from "axios";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
export default function UsersList() {
    // modal
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (user) => {
      setShow(true);
      setUserId(user.id);
      setUserData(user);
    }
    //modal
  let [users, setUsers] = useState([]);
  let getUsers = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  });
  //delete user
  let deleteUser = async () => {
    try {
      let response = await axios.delete(`https://dummyjson.com/users/${userId}`);
      handleClose();
      toast.success("User deleted successfully")
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className="p-4 usersListPage">
      <div className="d-flex justify-content-between align-items-center ">
        <h3 className="user-title mb-0">UsersList</h3>
        <button className="btn text-white btnAdd">Add New User</button>
      </div>
      <hr />
      <div className="table-responsive  my-3">
        <table className="table table-hover user-list-table">
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>BirthDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="col">{user.id}</td>
                  <td>
                    <img
                      src={user.image}
                      className="userImg"
                      alt="user image"
                    />
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthDate}</td>
                  <td>
                    <MdOutlineEdit className="userAction" size={24} />
                    <MdDeleteOutline
                      onClick={()=>handleShow(user)}
                      className="userAction"
                      size={24}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Delete modal  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete User !</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you need to delete {userData.firstName} {userData.lastName}!</Modal.Body>
          <Modal.Footer>
            <Button className="cancelBtn" onClick={handleClose}>
              No
            </Button>
            <Button className="confirmBtn" onClick={()=> deleteUser()}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    </>
  );
}
