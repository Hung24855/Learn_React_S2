import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        let data = res && res.data ? res.data : [];
        setUsers(data);
      } catch (error) {
        console.error("Lỗi API !");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link
                    to={`/users/${user.id}`}
                    style={{ textDecoration: "None" }}
                  >
                    {user.id}
                  </Link>
                </td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
