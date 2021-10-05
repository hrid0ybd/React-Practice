/* eslint-disable import/no-anonymous-default-export */
const sportsQuestion = [
  {
    questionId: "1",
    question: "What does NBA stand for?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "National Basketball Association",
  },
  {
    questionId: "2",
    question: "How many bases are there on a baseball field?",
    incorrectAnswers: ["1", "2", "3"],
    correctAnswers: "4",
  },
  {
    questionId: "3",
    question:
      "What color flag is waved in motor racing to indicate the winner?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Checkered flag",
  },
  {
    questionId: "4",
    question: "In what sport would you find a pommel horse?",
    incorrectAnswers: ["A", "B", "C"],
    correctAnswers: "Gymnastics",
  },
  {
    questionId: "5",
    question: "What color are the goal posts in football?",
    incorrectAnswers: ["Red", "Blue", "Green"],
    correctAnswers: "Yellow",
  },
];

export default (n = 5) =>
  Promise.resolve(sportsQuestion.sort(() => 0.5 - Math.random()).slice(0, n));
