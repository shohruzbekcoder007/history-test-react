import React, { useState, useMemo, useContext } from "react";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  StyleNotification,
  StyleNotificationBody,
  StyleNotificationFooter,
  StyleNotificationHeader,
} from "./styles";
import { useSelector } from "react-redux"
import { readrequest } from "../../../utils/API_urls"
import axios from "../../../utils/baseUrl"
import Box from "@mui/material/Box"
import AddTaskIcon from '@mui/icons-material/AddTask'
import {SocketContext} from '../../../context/socket'
import listLanguage from './language.json'
import Divider from '@mui/material/Divider'

export default function SimpleBadge() {

  const [anchorEl, setAnchorEl] = useState(null)
  const socket = useContext(SocketContext)
  // const socket = useSelector((state) => state.socket)
  const [messages, setMessages] = useState([])
  const [numberOfMessages, setNumberOfMessages] = useState(0)
  const language = useSelector(state => state.language)
  // const user = useSelector(state => state.user)

  useMemo(() => {
    socket?.on("response-from-teacher", (msg) => {
        axios({
          method: 'get',
          url: readrequest,
          params: {
            _id: msg._id,
          },
          headers: {"x-auth-token": sessionStorage.getItem("x-auth-token")}
        }).then((response) => {
          sessionStorage.setItem(
            "x-auth-token",
            response.headers["x-auth-token"]
          );
          let ms = messages
          ms.push(response.data)
          setMessages(ms)
          setNumberOfMessages(messages.length)
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    });

  },[messages, socket])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dateToString = (date) => {
    return new Date(date).getDate() 
          + "."+(new Date(date).getMonth()+1)
          + "."+new Date(date).getFullYear()
          + " "+ new Date(date).getHours()
          + ':' + new Date(date).getMinutes()
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tooltip title={listLanguage.tooltip[language]}>
        <IconButton onClick={handleClick}>
          <Badge badgeContent={numberOfMessages} color="primary">
            <MailIcon color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <StyleNotification>
          <StyleNotificationHeader style={{ textAlign: "center" }}>
            <Typography variant="button" display="block">
              {listLanguage.tooltip[language]}
            </Typography>
            <Typography variant="body2">{`You have ${numberOfMessages} unread messages`}</Typography>
          </StyleNotificationHeader>
          <StyleNotificationBody>
            {messages.map((message, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    border: 1,
                    borderColor: (theme) => theme.palette.info.main,
                    borderRadius: 1,
                    mb: 1,
                  }}
                >
                  <i>Group: </i><b>{message.group_id?.group_name}</b><br/>
                  <i>Student: </i><b>{message.student_id?.name}</b><br/>
                  <i>Email: </i><b>{message.student_id?.email}</b><br/>
                  <i>Date: </i><b><i>{dateToString(message.create_date)}</i></b><br/>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div>
                      <b>Response: </b>
                    </div>
                    <div>
                    <IconButton
                      color="primary"
                      aria-label="add an alarm"
                      onClick={(_) => {
                        
                      }}
                    >
                      <AddTaskIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      aria-label="add an alarm"
                      onClick={(_) => {
                        console.log("salom")
                      }}
                    >
                      <AddTaskIcon />
                    </IconButton>
                    </div>
                  </div>
                </Box>
              );
            })}
            <Divider/>
          </StyleNotificationBody>
          <StyleNotificationFooter>
            <Button>View All</Button>
          </StyleNotificationFooter>
        </StyleNotification>
      </Popover>
    </div>
  );
}
