import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import { Link, useMatch, useResolvedPath, } from "react-router-dom"
import listLanguage from './language.json'
import { useSelector } from 'react-redux'

export default function TeacherSidebarList() {

  const language = useSelector(state => state.language)

  return (
    <List>
      <CustomLink to={'/teacher'}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={listLanguage.courses[language]} />
      </CustomLink>
      <CustomLink to={'/teacher/students'}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={listLanguage.students[language]} />
      </CustomLink>
      <CustomLink to={'/teacher/natijalar'}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary={listLanguage.results[language]} />
      </CustomLink>
    </List>
  );
}

function CustomLink({ children, to, ...props }) {

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        to={to}
        {...props}
        style={{color: "inherit"}}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderRadius: "8px", margin: "0 5px" }}
            selected={match}
          >
            {children}
          </ListItemButton>
        </ListItem>
      </Link>
    </div>
  );
}