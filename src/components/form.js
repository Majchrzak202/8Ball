import React from "react";

const Form = ({ setQuestion, setAnswer, answers, question, answer }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);

    console.log(question);
  };
  return (
    <form className="centerxa">
      <div>
        <input onChange={(e) => setQuestion(e.target.value)} type="text" />
      </div>
      <div>
        <button className='button' onClick={submitHandler}>Ask me!</button>
      </div>
    </form>
  );
};

export default Form;
