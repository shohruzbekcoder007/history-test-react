import React from "react"
import { CourseHeader, CourseText, CourseFooter } from "./styles"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import AddTaskIcon from '@mui/icons-material/AddTask'
import { reqforteacher } from '../../../API_urls'
import axios from "../../../baseUrl"
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useSelector } from "react-redux"


const CourseInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  marginBottom: "20px",
}));


export default function CourseItem({ cours }) {

  const [open, setOpen] = React.useState(false);
  const socket = useSelector((state) => state.socket);


  const handleClose = () => {
    setOpen(false);
  };

  const addCourse = (_id,teacher_id) => {
    axios
        .post(
          reqforteacher,
          {
            group_id: _id,
            teacher_id: teacher_id
          },
          {
            headers: {
              "x-auth-token": sessionStorage.getItem("x-auth-token"),
            },
          }
        )
        .then((response) => {
          sessionStorage.setItem(
            "x-auth-token",
            response.headers["x-auth-token"]
          );
          if(!response.data.add){
            setOpen(true)
          }else{
            socket.emit("send-request", response.data.group)
          }
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }

  return (
    <>
    <CourseInfo>
      <CourseHeader>{cours.group_name}</CourseHeader>
      <CourseText>{cours.group_text}</CourseText>
      <CourseFooter>
        <p>
          <span>{cours.number_of_students}</span> ta student <span>{cours.number_of_maretials}</span> ta qo'llanma
        </p>
        <IconButton
          color="primary"
          aria-label="add an alarm"
          onClick={(_) => {
            addCourse(cours._id, cours.teacher_id)
          }}
        >
          <AddTaskIcon />
        </IconButton>
      </CourseFooter>
    </CourseInfo>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Ma'lumot"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Ushbu guruhga azolik bildirgansiz!!!
      </DialogContentText>
    </DialogContent>
  </Dialog>
  </>
  );
}
