import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProduct from "../products/AdminProduct";
import ListProduct from "../products/ListProduct";
import EditProduct from "../products/EditProduct";

const MainRoutes = () => {
  let PUBLIC = [
    {
      link: "/admin",
      element: <AdminProduct />,
      id: 1,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 3,
    },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
AdminProduct;
