import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  add: JSON.parse(localStorage.getItem("add")) || [],
};

const todoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      let data = [...state.add, action.payload];
      localStorage.setItem("add", JSON.stringify(data));
      state.add = data;
    },
    deleteTodo(state, action) {
      let res = state.add.filter((el) => el.id !== action.payload);
      localStorage.setItem("add", JSON.stringify(res));
      state.add = res;
    },
    editProduct(state, action) {
      let newData = state.add.map((el) => {
        if (el.id == action.payload.id) {
          return (el = action.payload);
        } else {
          return el;
        }
      });
      localStorage.setItem("add", JSON.stringify(newData));
      state.add = newData;
    },
  },
});
export const { addTodo, deleteTodo, editProduct } = todoSlices.actions;
export default todoSlices.reducer;
