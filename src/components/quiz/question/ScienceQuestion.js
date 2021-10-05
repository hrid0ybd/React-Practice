/* eslint-disable import/no-anonymous-default-export */
const scienceQuestion = [
  {
    questionId: "1",
    question: "Which animal lays eggs?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Duck",
  },
  {
    questionId: "2",
    question: "What is Earth’s only natural satellite?",
    incorrectAnswers: ["A", "C", "B"],
    correctAnswers: "Moon",
  },
  {
    questionId: "3",
    question: "A male cow is called?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Ox",
  },
  {
    questionId: "4",
    question: "What part of the body helps you move?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Muscles",
  },
  {
    questionId: "5",
    question: "The two holes of the nose are called?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Nostrils",
  },
];

export default (n = 5) =>
  Promise.resolve(scienceQuestion.sort(() => 0.5 - Math.random()).slice(0, n));
