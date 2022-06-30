import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import listLanguage from "./language.json";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../redux/action/languageActions";
import flags from "./flags";
import Tooltip from "@mui/material/Tooltip";

export default function Language() {
  const language = useSelector((state) => state.language);

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Language settings">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar
            alt="language"
            sx={{ width: 24, height: 24 }}
            src={flags[language]}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {listLanguage.map((elem) => {
          return (
            <MenuItem
              key={elem.abbreviation}
              onClick={(event) => {
                dispatch(setLanguage(elem.abbreviation));
                handleClose(event);
              }}
            >
              {elem.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
