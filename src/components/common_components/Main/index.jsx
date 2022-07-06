import React from "react";
import { ManWrappper, MainContainer, RouterContainer } from "./styles";
import ComponentSidebar from "../ComponentSidebar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export default function Main() {

  return (
    <ManWrappper>
      <ComponentSidebar />
      <MainContainer>
        <Header />
        <RouterContainer>
          <Outlet />
        </RouterContainer>
      </MainContainer>
    </ManWrappper>
  );
}
