import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const getData_Local_storage = JSON.parse(localStorage.getItem("jobs"));
  const [Name, SetName] = useState("");
  const [listTodo, SetListTodo] = useState(getData_Local_storage);

  const handleAddTodo = () => {
    if (!Name) {
      alert("Vui lòng nhập dữ liệu trước !");
      return;
    }

    let newTodo = {
      id: listTodo.length + 1,
      name: Name,
    };

    const data = [...listTodo, newTodo];
    const JSON_Data = JSON.stringify(data);
    localStorage.setItem("jobs", JSON_Data);
    SetListTodo(data);
    SetName("");
  };

  const handleDeleteTodo = (todo) => {
    const filter_data = listTodo.filter((item) => item.id !== todo.id);
    console.log(filter_data);
    const JSON_Data = JSON.stringify(filter_data);
    localStorage.setItem("jobs", JSON_Data);
    SetListTodo(filter_data);
  };

  useEffect(() => {}, [Name, listTodo]);
  return (
    <div className="Home_page">
      <h1>Home - content</h1>
      <div className="todo">
        <ul className="todo-list">
          {listTodo.map((item, index) => {
            return (
              <li
                className="todo-item"
                key={item.id}
                style={{ minWidth: "100px" }}
              >
                {item.name}{" "}
                <span
                  style={{ cursor: "pointer", padding: 5 }}
                  onClick={() => handleDeleteTodo(item)}
                >
                  x
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <label style={{ padding: 10 }}>Name : </label>
      <input
        value={Name}
        onChange={(e) => {
          SetName(e.target.value);
        }}
      ></input>

      <button onClick={() => handleAddTodo()} style={{ margin: "10" }}>
        Add
      </button>
    </div>
  );
};

export default Home;
