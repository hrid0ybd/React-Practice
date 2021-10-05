import React, { useState } from "react";
import Quizover from "./Quizover";
import ScienceQuestions from "./question/ScienceQuestion";
import HistoryQuestions from "./question/HistoryQuestion";
import SportsQuestions from "./question/SportsQuestion";
import "./styles.css";

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [negativePoints, setNegativePoints] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [storeAnswer, setStoreAnswer] = useState("");

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const handleSciecne = () => {
    ScienceQuestions().then((res) => {
      setQuiz(
        res.map((item) => ({
          questionId: item.questionId,
          question: item.question,
          options: shuffle([...item.incorrectAnswers, item.correctAnswers]),
          answer: item.correctAnswers,
        }))
      );
    });
  };
  const handleHistory = () => {
    HistoryQuestions().then((res) => {
      setQuiz(
        res.map((item) => ({
          questionId: item.questionId,
          question: item.question,
          options: shuffle([...item.incorrectAnswers, item.correctAnswers]),
          answer: item.correctAnswers,
        }))
      );
    });
  };
  const handleSports = () => {
    SportsQuestions().then((res) => {
      setQuiz(
        res.map((item) => ({
          questionId: item.questionId,
          question: item.question,
          options: shuffle([...item.incorrectAnswers, item.correctAnswers]),
          answer: item.correctAnswers,
        }))
      );
    });
  };

  const pickAnswer = (event) => {
    let userAnswer = event.target.outerText;
    setStoreAnswer(userAnswer);
    if (quiz[number].answer === userAnswer) {
      setPoints(points + 1);
    } else {
      setNegativePoints(negativePoints + 1);
    }
    setIsChecked(true);
  };

  const handleGoForNext = () => {
    setNumber(number + 1);
    setIsChecked(false);
  };

  return (
    <div>
      <div>
        <button className="categoryBtn" onClick={handleSciecne}>
          Sciecne
        </button>
        <button className="categoryBtn" onClick={handleHistory}>
          History
        </button>
        <button className="categoryBtn" onClick={handleSports}>
          Sports
        </button>
        <br />
        <br />
      </div>
      <div>
        {quiz[number] && (
          <>
            <div>
              Question: {quiz[number].question}
              <br />
              <br />
            </div>

            <div>
              {quiz[number].options.map((item, index) => (
                // <div>
                //   <input type="radio" id="" name="answer" value={} onClick={pickAnswer} />
                //   <label for="">{item}</label>
                // </div>

                <button key={index} onClick={pickAnswer} className="optionBtn">
                  {item}
                </button>
              ))}
            </div>
            {isChecked && (
              <div>
                <h1>You have choosen: {storeAnswer}</h1>
                <h1>Correct answer is: {quiz[number].answer}</h1>
              </div>
            )}

            <button onClick={handleGoForNext}>Next</button>
          </>
        )}
        {number === 5 && (
          <Quizover points={points} negativePoints={negativePoints} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
