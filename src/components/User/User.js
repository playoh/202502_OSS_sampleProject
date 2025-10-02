import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "https://68db332823ebc87faa323c4f.mockapi.io/user";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>{user.role}</td>
          </tr>
          <tr>
            <td>studentID</td>
            <td>{user.studentId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default EditUser;
