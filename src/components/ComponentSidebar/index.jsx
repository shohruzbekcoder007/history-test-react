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
  SidebarImageContainer
} from "./styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function ComponentSidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Sidebar>
      <SidebarContainer>
        <SidebarMenu>
          <StyleLogoContainer>
            <img src={require("../../wiev/mylogo.png")} alt="logo"/>
          </StyleLogoContainer>
          <StyleUser>
            <StyleChip
              sx={{ height: 60, borderRadius: "8px", fontSize: "16px" }}
              avatar={<StyleUserAvatar>M</StyleUserAvatar>}
              label="Shohro'zbek Ochilov"
            />
          </StyleUser>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ borderRadius: "8px", margin: "0 5px" }}
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Kurslarim" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ borderRadius: "8px", margin: "0 5px" }}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="O'quvchilarim" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ borderRadius: "8px", margin: "0 5px" }}
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Natijalar" />
              </ListItemButton>
            </ListItem>
          </List>
        </SidebarMenu>
        <SidebarCurtain />
      </SidebarContainer>
      <SidebarImageContainer>
        <img alt="image1" src={require('./../../wiev/education.png')}/>
      </SidebarImageContainer>
    </Sidebar>
  );
}
