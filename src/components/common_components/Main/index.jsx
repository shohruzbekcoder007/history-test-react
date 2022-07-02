import React from "react";
import { ManWrappper, MainContainer, RouterContainer } from "./styles";
import ComponentSidebar from "../ComponentSidebar";
import Header from "../Header";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Main() {
  const language = useSelector((state) => state.language);

  return (
    <ManWrappper>
      <ComponentSidebar />
      <MainContainer>
        <Header />
        <RouterContainer>
          <Outlet />
          <p>
            {" "}
            {language}
          </p>
        </RouterContainer>
      </MainContainer>
    </ManWrappper>
  );
}
