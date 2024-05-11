import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlices";
import { useNavigate } from "react-router-dom";

const AdminProduct = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    let newProduct = { inputValue, id: Date.now() };
    dispatch(addTodo(newProduct));
  }
  return (
    <div id="addTodo">
      <div className="addList">
        <h1 style={{ color: "blue" }}>ADMIN</h1>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="addInp"
          type="text"
          placeholder="Add to task"
        />
        <button
          onClick={() => {
            handleSubmit();
            navigate("/list");
          }}
          className="btnCreate"
        >
          create
        </button>
      </div>
    </div>
  );
};

export default AdminProduct;
