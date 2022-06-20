import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/action/userActions";
import axios from "../../../baseUrl";

export default function Main() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    sessionStorage.getItem("x-auth-token") &&
      axios
        .post(
          `/user/info/`,
          {},
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
