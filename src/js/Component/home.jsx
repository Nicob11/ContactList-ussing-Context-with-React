import React from "react";
import { RouterProvider } from "react-router";
import CardContact from "./CardContact.jsx";
import { ContextProvider } from "./views/ContextProvider.jsx";
import Formulario from "./views/Formulario.jsx";
import { router } from "./routes/router.js";

//create your first component
const Home = () => {
  return (
    <div>
      <ContextProvider>
        <RouterProvider router={router}>
          <CardContact />
          <Formulario />
        </RouterProvider>
      </ContextProvider>
    </div>
  );
};

export default Home;
