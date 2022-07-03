import React, { useState } from "react";
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { io } from "socket.io-client";
import {
  StyleNotification,
  StyleNotificationBody,
  StyleNotificationFooter,
  StyleNotificationHeader
} from "./styles";

export default function SimpleBadge() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  useState(() => {
    const socket = io("http://localhost:8080");
    socket.emit('add-user',12)
  },[])

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
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
          <StyleNotification>
            <StyleNotificationHeader style={{textAlign: "center"}}>
              <Typography variant="button" display="block">Notifications</Typography>
              <Typography variant="body2">You have 2 unread messages</Typography>
            </StyleNotificationHeader>
            <StyleNotificationBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta architecto laborum tenetur asperiores doloremque animi totam dolor quia sint consequatur porro magni culpa, ipsum eum possimus, cupiditate repellat blanditiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta architecto laborum tenetur asperiores doloremque animi totam dolor quia sint consequatur porro magni culpa, ipsum eum possimus, cupiditate repellat blanditiis.
            </StyleNotificationBody>
            <StyleNotificationFooter>
              <Button style={{width: '100%'}}>View All</Button>
            </StyleNotificationFooter>
          </StyleNotification>
      </Popover>
    </div>
  );
}