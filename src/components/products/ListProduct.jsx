import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slices/todoSlices";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from "react-router-dom";
import todo from "../../image/Detective-check-footprint 1.png";

const ListProduct = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { add } = useSelector((state) => state.todo);
  console.log(add);
  const [state, setState] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);

  function searchTodo() {
    let res = add.filter((el) => {
      return el.inputValue.includes(search);
    });
    setResultSearch(res);
  }
  useEffect(() => {
    searchTodo();
  }, [search]);

  return (
    <>
      {add.length > 0 ? (
        <div
          id="list"
          style={{
            background: state ? "black" : "white",
            color: state ? "white" : "black",
          }}
        >
          <div className="list">
            <h1>TODO LIST</h1>
            <div
              className="list-block"
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <select className="select" name="" id="">
                <option value="">ALL</option>
              </select>
              <button
                onClick={() => {
                  setState(!state);
                }}
                class="toggle-btn"
              >
                <div class="sun-rays"></div>
                <div class="main-circle"></div>
              </button>
            </div>

            {search
              ? resultSearch.map((el) => (
                  <div className="container">
                    <div
                      style={{
                        display: "flex",
                        gap: "430px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="input-block">
                        <input type="checkbox" />
                        <p>{el.inputValue}</p>
                      </div>
                      <div className="icons-block">
                        <DeleteIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => dispatch(deleteTodo(el.id))}
                        />
                        <ModeEditIcon sx={{ cursor: "pointer" }} />
                      </div>
                    </div>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "13px",
                      }}
                    >
                      <hr style={{ width: "33%" }} />
                    </p>
                  </div>
                ))
              : add.map((el) => (
                  <div className="container">
                    <div
                      style={{
                        display: "flex",
                        gap: "430px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="input-block">
                        <input type="checkbox" />
                        <p>{el.inputValue}</p>
                      </div>
                      <div className="icons-block">
                        <DeleteIcon
                          sx={{ cursor: "pointer", color: "red" }}
                          onClick={() => dispatch(deleteTodo(el.id))}
                        />
                        <ModeEditIcon
                          onClick={() => navigate(`/edit/${el.id}`)}
                          sx={{ cursor: "pointer", color: "green" }}
                        />
                      </div>
                    </div>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "13px",
                      }}
                    >
                      <hr style={{ width: "33%" }} />
                    </p>
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <div className="loading">
          <img
            style={{ width: "400px", objectFit: "cover", cursor: "pointer" }}
            src={todo}
            alt=""
          />
          <h3>Empty...</h3>
        </div>
      )}
    </>
  );
};

export default ListProduct;
