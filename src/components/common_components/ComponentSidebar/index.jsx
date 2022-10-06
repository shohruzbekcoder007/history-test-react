import React, { useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { profil_img } from "../../../utils/API_urls";
import axios from "../../../utils/baseUrl";

export default function ComponentSidebar() {
  const user = useSelector((state) => state.user);
  const [imgUrl, setImgUrl] = useState(user?.profile?.image_url);

  const handleChange = async (selectorFiles) => {
    const formData = new FormData();
    formData.append("file", selectorFiles[0]);
    try {
      const response = await axios({
        method: "post",
        url: profil_img,
        data: formData,
        headers: { "x-auth-token": sessionStorage.getItem("x-auth-token") },
      });
      setImgUrl(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
              avatar={
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  {imgUrl||user?.profile?.image_url ? (
                    <>
                      <input
                          hidden
                          accept="image/*"
                          type="file"
                          onChange={(e) => handleChange(e.target.files)}
                        />
                      <StyleUserAvatar alt="Remy Sharp" src={imgUrl||user?.profile?.image_url} />
                    </>
                  ) : (
                    <>
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => handleChange(e.target.files)}
                      />
                      <PhotoCamera />
                    </>
                  )}
                </IconButton>
              }
              label={user?.name}
            />
          </StyleUser>
          {user?.isAdmin === true && <TeacherSidebarList />}
          {user?.isAdmin === false && <StudentSidebarList />}
        </SidebarMenu>
        <SidebarCurtain />
      </SidebarContainer>
      {/* <SidebarImageContainer>
        <img alt="image1" src={require("./../../../images/education.png")} />
      </SidebarImageContainer> */}
    </Sidebar>
  );
}
