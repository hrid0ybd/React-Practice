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
    if (quiz[number].answer === userAnswer) {
      setPoints(points + 1);
    } else {
      setNegativePoints(negativePoints + 1);
    }
    setNumber(number + 1);
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

                <button key={index} onClick={pickAnswer} className="button">
                  {item}
                </button>
              ))}
            </div>
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
