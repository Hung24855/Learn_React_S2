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
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        let data = res && res.data ? res.data : [];
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Danh sách người dùng</h1>
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
          {loading === false &&
            Users &&
            Users.length > 0 &&
            Users.map((user, index) => {
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

          {loading === true && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Loading ....
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Something wrong ....
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
