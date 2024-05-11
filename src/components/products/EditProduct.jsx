import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../slices/todoSlices";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { add } = useSelector((state) => state.todo);
  const navigate = useNavigate();

  const { id } = useParams();

  function getProductEdit() {
    let edit = add.filter((el) => {
      return el.id == id;
    });
    edit.map((el) => setInputValue(el.inputValue));
  }
  function handeleSAveProduct() {
    dispatch(editProduct({ inputValue: inputValue, id: id }));
  }
  useEffect(() => {
    getProductEdit();
  }, []);
  return (
    <>
      <div id="addTodo">
        <div className="addList">
          <h1 style={{ color: "blue" }}>EDIT</h1>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="addInp"
            type="text"
            placeholder="Add to task"
            value={inputValue}
          />
          <button
            onClick={() => {
              handeleSAveProduct();
              navigate("/list");
            }}
            className="btnCreate"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
