const Quizover = ({ points, negativePoints }) => {
  const refreshPage = () => window.location.reload();

  const totalPoint = points * 5 - negativePoints * 2;

  return (
    <>
      <div>Quiz Over</div>
      <p>Correct Answer : {points} </p>
      <p>Incorrect Answer : {negativePoints} </p>
      {totalPoint > 0 ? (
        <div>You got {totalPoint} out of 25!</div>
      ) : (
        <div>You got 0 out of 25!</div>
      )}

      <br />
      <button onClick={refreshPage}>Retry</button>
    </>
  );
};

export default Quizover;
