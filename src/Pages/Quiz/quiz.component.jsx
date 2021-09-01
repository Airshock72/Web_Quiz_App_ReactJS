import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import "./quiz.styles.css";

import Question from "../../components/Question/question.component";

const Quiz = ({ name, score, questions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [currQuestion, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="quiz_info">
            <span>{questions[currQuestion].category}</span>
            <span>Score : {score}</span>
          </div>

          <Question
            currQuestion={currQuestion}
            setCurrQuestion={setCurrQuestion}
            questions={questions}
            options={options}
            correct={questions[currQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
