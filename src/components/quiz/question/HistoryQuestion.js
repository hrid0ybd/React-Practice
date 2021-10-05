/* eslint-disable import/no-anonymous-default-export */
const historyQuestion = [
  {
    questionId: "1",
    question: "Who is the father of nation?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Sheikh Mujib",
  },
  {
    questionId: "2",
    question: "Who is the current president?",
    incorrectAnswers: ["1", "2", "3"],
    correctAnswers: "Sheikh Hasina",
  },
  {
    questionId: "3",
    question: "When is our independence day?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "26 March",
  },
  {
    questionId: "4",
    question: "When is our victory day?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "December 16",
  },
  {
    questionId: "5",
    question: "Where Sheikh mujibur Rahman was born?",
    incorrectAnswers: ["Dhaka", "Rajshahi", "Cumilla"],
    correctAnswers: "Gopalganj",
  },
];

export default (n = 5) =>
  Promise.resolve(historyQuestion.sort(() => 0.5 - Math.random()).slice(0, n));
