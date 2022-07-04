import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/action/userActions"
import axios from "../../../baseUrl"
import { user_info, host } from '../../../API_urls'
import { setSocket } from "../../../redux/action/socketAction"
import { io } from "socket.io-client";

export default function Main() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
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
          const socket = io(host);
          dispatch(setSocket(socket));
          socket.emit('add-user', {userId: response.data._id, status: response.data.isAdmin})
          if (response.data.isAdmin === false) {
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
