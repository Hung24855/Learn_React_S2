import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import useFetchData from "../../customhook/fetchData";

const Users = () => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  const {
    Data: Users,
    loading,
    isError,
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

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
