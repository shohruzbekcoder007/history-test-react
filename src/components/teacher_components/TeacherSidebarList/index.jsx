import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Link, useMatch, useResolvedPath, } from "react-router-dom"
import listLanguage from './language.json'
import { useSelector } from 'react-redux'
import GroupsIcon from '@mui/icons-material/Groups'
import CastForEducationIcon from '@mui/icons-material/CastForEducation'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

export default function TeacherSidebarList() {

  const language = useSelector(state => state.language)

  return (
    <List>
      <CustomLink to={'/teacher'}>
        <ListItemIcon>
          <CastForEducationIcon />
        </ListItemIcon>
        <ListItemText primary={listLanguage.courses[language]} />
      </CustomLink>
      <CustomLink to={'/teacher/students'}>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary={listLanguage.students[language]} />
      </CustomLink>
      <CustomLink to={'/teacher/natijalar'}>
        <ListItemIcon>
          <AppRegistrationIcon />
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
            selected={match?.pattern.end}
          >
            {children}
          </ListItemButton>
        </ListItem>
      </Link>
    </div>
  );
}