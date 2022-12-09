import React, { useEffect, useState } from "react"
import List from "@mui/material/List"
import Avatar from "@mui/material/Avatar"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from '@mui/material/ListItemButton';
import axios from '../../../../utils/baseUrl'
import { groupstudents } from '../../../../utils/API_urls'


export default function CourseStudents({ group_id, status }) {

  const [students, setStudents] = useState([])

  useEffect(() => {
    axios
      .get(groupstudents + `?group_id=${group_id}&status=${status}`, {
        headers: {
          "x-auth-token": sessionStorage.getItem("x-auth-token"),
        },
      })
      .then((response) => {
        sessionStorage.setItem(
          "x-auth-token",
          response.headers["x-auth-token"]
        );
        setStudents(response.data)
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }, [])

  return (
    <List>
      {
        students.map(student => {
          return (
            <ListItemButton alignItems="flex-start" sx={{ boxShadow: 3, mb: 1, borderRadius: 2 }} key={student._id}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={student.student_id.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <b>{`Email: `}</b>
                    </Typography>
                    {student.student_id.email}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          )
        })
      }
    </List>
  );
}
