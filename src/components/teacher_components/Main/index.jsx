import React, { useContext, useMemo } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/action/userActions"
import axios from "../../../utils/baseUrl"
import { user_info } from "../../../utils/API_urls"
import {SocketContext} from '../../../context/socket';

export default function Main() {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const socket = useContext(SocketContext);

  useMemo(() => {
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

          socket.emit('add-user', {userId: response.data._id, status: response.data.isAdmin})
          if (response.data.isAdmin === false) {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }, [dispatch, navigate, socket]);

  return <Outlet />;
}
