import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import useFetchData from "../../customhook/fetchData";
import AddNewUser from "./Add_User";
import { useState, useEffect } from "react";
const Users = () => {
  const [Show, setShow] = useState(false);
  const [ListUser, setListUser] = useState([]);

  const {
    Data: Users,
    loading,
    isError,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    //Chay truoc khi component goi API xong
    if (Users && Users.length > 0) {
      setListUser(Users);
    }
  }, [Users]);

  const handleShow = () => {
    Show ? setShow(false) : setShow(true);
  };

  const handleAdd_User = (user) => {
    const newUser = { id: ListUser.length + 1, ...user };
    const newData = [...ListUser, newUser];
    setListUser(newData);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Danh sách người dùng</h1>
      <button
        style={{
          marginBottom: "20px",
          marginLeft: "150px",
          borderRadius: "5px",
          textDecoration: "none",
          cursor: "pointer",
          color: "black",
        }}
        onClick={handleShow}
      >
        Add User
      </button>
      {Show && <AddNewUser addUser={handleAdd_User} />}
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
            ListUser &&
            ListUser.length > 0 &&
            ListUser.map((user, index) => {
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
