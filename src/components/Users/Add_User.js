import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddNew_User = (prop) => {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name: Name, username: UserName, email: Email };
    prop.addUser(user);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ width: "400px", margin: "0 auto" }}
      className="mb-2"
    >
      <Form.Group>
        <Form.Label>Name </Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={UserName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter user name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddNew_User;
