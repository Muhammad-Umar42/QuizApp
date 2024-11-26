import React, { useState } from "react";
import Quiz from "./quiz/quiz";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isGivenAnswer, setIsGivenAnswer] = useState(false);
  const [provederAnswer, setProvederAnswer] = useState("");

  const handleQuestion = () => {
    if (question < Quiz.length) {
      setQuestion(question + 1);
      setIsGivenAnswer(false);
      setProvederAnswer("");
    }
  };

  const handleCorrect = (ind, e) => {
    if (!!isGivenAnswer) return;
    setIsGivenAnswer(true);
    setProvederAnswer(String(ind));
    if (Quiz[question].answer == ind) {
      setCorrect(correct + 1);
    } else {
    }
  };

  const handleReset = () => {
    setQuestion(0);
    setCorrect(0);
  };

  console.log(Quiz[question]);

  return (
    <div className="max-w-5xl m-auto px-4 py-6 drop-shadow-2xl mt-12 text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
      <h1 className="text-2xl font-bold text-center">Quiz Application</h1>
      {question < Quiz.length ? (
        <div>
          <h1 className="text-3xl font-bold p-6">
            {question + 1}. {Quiz[question].Question}
          </h1>

          <div className="block">
            {Quiz[question].ans.map((e, ind) => {
              return (
                <div
                  className={`${
                    !!provederAnswer && ind === Quiz[question].answer
                      ? "text-green-900"
                      : !!provederAnswer
                      ? "text-red-800"
                      : ""
                  } cursor-pointer flex justify-center items-center p-3 my-3 text-xl font-bold shadow-md text-center rounded-lg`}
                  onClick={() => handleCorrect(ind, e)}
                  key={ind}
                >
                  <p className="mr-3">{ind + 1}. </p>
                  <p className="">{e}</p>
                </div>
              );
            })}
          </div>
          <button
            disabled={!isGivenAnswer}
            onClick={handleQuestion}
            className={`p-3 rounded-md text-2xl font-bold ${
              isGivenAnswer ? "bg-black" : "bg-slate-500 cursor-not-allowed"
            } mt-5 text-white`}
          >
            Next
          </button>
        </div>
      ) : (
        <>
          <p className="block text-xl font-bold my-4">
            {correct} out of {Quiz.length}
          </p>
          <button
            onClick={handleReset}
            className="p-3.5 rounded-md text-2xl font-bold bg-black mt-5 text-white"
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
};

export default App;
