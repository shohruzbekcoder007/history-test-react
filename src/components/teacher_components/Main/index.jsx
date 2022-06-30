import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/action/userActions"
import axios from "../../../baseUrl"
import { user_info } from '../../../API_urls'

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
