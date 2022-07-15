import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Popover from "@mui/material/Popover";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Message,
  StyleNotification,
  StyleNotificationBody,
  StyleNotificationFooter,
  StyleNotificationHeader,
} from "./styles";
import { useSelector } from "react-redux"
import { readrequest } from "../../../API_urls"
import axios from "../../../baseUrl"
import Box from "@mui/material/Box"
import AddTaskIcon from '@mui/icons-material/AddTask'

export default function SimpleBadge() {
  const [anchorEl, setAnchorEl] = useState(null);
  const socket = useSelector((state) => state.socket);
  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState(null)

  socket?.on("response-from-teacher", (msg) => {
    console.log(msg, "surov qabul qilindi");
    axios
      .get(readrequest, {
        data: {
          group_id: msg.group_id,
        },
        headers: {
          "x-auth-token": sessionStorage.getItem("x-auth-token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        let msgs = [...messages];
        msgs.push(response.data);
        setMessages(msgs);
        console.log(msgs);
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tooltip title="Notification">
        <IconButton onClick={handleClick}>
          <Badge badgeContent={4} color="primary">
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
              Notifications
            </Typography>
            <Typography variant="body2">You have 2 unread messages</Typography>
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
                  <b>Group: </b>{message.group_id.group_name}<br/>
                  <b>Student: </b>{message.student_id.name}<br/>
                  <b>Email: </b>{message.student_id.email}<br/>
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
                        
                      }}
                    >
                      <AddTaskIcon />
                    </IconButton>
                    </div>
                  </div>
                </Box>
              );
            })}
            <Message>message custom</Message>
          </StyleNotificationBody>
          <StyleNotificationFooter>
            <Button>View All</Button>
          </StyleNotificationFooter>
        </StyleNotification>
      </Popover>
    </div>
  );
}
