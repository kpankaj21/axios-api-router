import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GetInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location);
  const backClick = () => {
    navigate("/");
  };
  console.log("satteee in info", location.state.avatar_url);

  return (
    <>
      <h2>Getting Info</h2>

      <figure>
        <img style={{ width: "300px" }} src={location.state.avatar_url} />
      </figure>

      <h2>ID: {location.state.id}</h2> 
      <h2>Name: {location.state.login}</h2>
      <h2>Node ID: {location.state.node_id}</h2>
      <Button variant="contained" onClick={() => backClick()}>
        Back
      </Button>
    </>
  );
};
export default GetInfo;
