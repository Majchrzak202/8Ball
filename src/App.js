import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Most likely",
  "Outlook not so good",
  "Very doubtful",
];

function App(props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  console.log(answer)

  return (
    <div className='circle'>
      <Form
        question={question}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        answers={answers}
        answer={answer}
      />

      <br />
      <div className="centerxa1 ">{answer}</div>
    </div>
  );
}

export default App;
