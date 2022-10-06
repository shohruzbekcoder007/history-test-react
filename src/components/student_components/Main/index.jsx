import React, { useEffect, useContext, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/action/userActions";
import axios from "../../../utils/baseUrl";
import { user_info, host } from "../../../utils/API_urls"
// import { setSocket } from "../../../redux/action/socketAction"
// import { io } from "socket.io-client";
import {SocketContext} from '../../../context/socket';

export default function Main() {

  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useMemo(() => {
    console.log("lalakudan yangilik!!!")
    sessionStorage.getItem("x-auth-token") &&
      axios
        .get(
          user_info,
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
          dispatch(setUser(response.data));

          //create socket
          // const socket = io(host);
          // dispatch(setSocket(socket));
          socket.emit('add-user', {userId: response.data._id, status: response.data.isAdmin})

          if (response.data.isAdmin === true) {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }, []);

  return <Outlet />;
}
