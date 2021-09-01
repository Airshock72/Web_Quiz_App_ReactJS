import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./result.styles.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  const handleRedirect = () => {
    console.log("history", history);
    history.push("/");
  };

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        style={{ alignSelf: "center", marginTop: 20 }}
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleRedirect}
      >
        Go To Homepage
      </Button>
    </div>
  );
};

export default Result;
