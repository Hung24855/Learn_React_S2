import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [Name, SetName] = useState("");
  const [listTodo, SetListTodo] = useState([
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "JS",
    },
  ]);

  const handleAddTodo = () => {
    if (!Name) {
      alert("Vui lòng nhập dữ liệu trước !");
      return;
    }

    let newTodo = {
      id: listTodo.length + 1,
      name: Name,
    };
    SetListTodo([...listTodo, newTodo]);
    SetName("");
  };

  const handleDeleteTodo = (todo) => {
    SetListTodo(listTodo.filter((item) => item.id !== todo.id));
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
