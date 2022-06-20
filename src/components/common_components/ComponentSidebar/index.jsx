import React from "react";
import {
  Sidebar,
  SidebarCurtain,
  SidebarContainer,
  SidebarMenu,
  StyleLogoContainer,
  StyleUser,
  StyleChip,
  StyleUserAvatar,
  SidebarImageContainer,
} from "./styles";
import { useSelector } from "react-redux";
import TeacherSidebarList from "../../teacher_components/TeacherSidebarList";
import StudentSidebarList from "../../student_components/StudentSidebarList";

export default function ComponentSidebar() {
  const user = useSelector((state) => state.user);

  return (
    <Sidebar>
      <SidebarContainer>
        <SidebarMenu>
          <StyleLogoContainer>
            <img src={require("../../../images/mylogo.png")} alt="logo" />
          </StyleLogoContainer>
          <StyleUser>
            <StyleChip
              sx={{ height: 60, borderRadius: "8px", fontSize: "16px" }}
              avatar={<StyleUserAvatar>M</StyleUserAvatar>}
              label={user?.name}
            />
          </StyleUser>
          {user?.isAdmin === true && <TeacherSidebarList/>}
          {user?.isAdmin === false && <StudentSidebarList/>}
        </SidebarMenu>
        <SidebarCurtain />
      </SidebarContainer>
      <SidebarImageContainer>
        <img alt="image1" src={require("./../../../images/education.png")} />
      </SidebarImageContainer>
    </Sidebar>
  );
}
