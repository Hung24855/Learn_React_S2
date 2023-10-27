import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DetailUser = () => {
  const { id } = useParams();
  const [User, setUser] = useState({});

  useEffect(() => {
    if (id) {
      const getDetaileUser = async () => {
        try {
          let DetaileUser = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          setUser(DetaileUser.data);
        } catch (error) {
          console.log(error);
        }
      };

      getDetaileUser();
    }
  }, [id]);

  return (
    <div className="Detail_User">
      <h1>Thông tin chi tiết của người dùng</h1>
      <ul className="Detail">
        <li className="Detail-info">ID - {User.id}</li>
        <li className="Detail-info"> Name - {User.name}</li>
        <li className="Detail-info">UserName - {User.username}</li>
        <li className="Detail-info">Email - {User.email}</li>
        <li className="Detail-info">Phone - {User.phone}</li>
        <li className="Detail-info">Website - {User.website}</li>
      </ul>
      <button>
        <Link to="/users" style={{ textDecoration: "None", color: "black" }}>
          Back
        </Link>
      </button>
    </div>
  );
};

export default DetailUser;
