import axios from "axios";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/header.component.jsx";

import Home from "./Pages/Home/home.component.jsx";
import Quiz from "./Pages/Quiz/quiz.component.jsx";
import Result from "./Pages/Result/result.component.jsx";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <div
      className="app"
      style={{
        background: "linear-gradient(to right,#FFEFBA, #FFFFFF  )",
      }}
    >
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
        </Route>

        <Route path="/quiz" exact>
          <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </Route>

        <Route path="/result" exact>
          <Result name={name} score={score} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
