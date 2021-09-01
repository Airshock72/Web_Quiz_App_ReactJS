import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/errormessage.component";
import "./question.styles.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Question = ({
  currQuestion,
  setCurrQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQuestion > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrQuestion(currQuestion + 1);
      setSelected();
    } else {
      setError("Please Select An Option First");
    }
  };

  const handleQuit = () => {
    setCurrQuestion(0);
    history.push("/");
  };

  return (
    <div className="question">
      <h1>Question {currQuestion + 1}</h1>
      <div className="single_question">
        <h2>{questions[currQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`single_option ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
                onClick={() => handleCheck(i)}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
