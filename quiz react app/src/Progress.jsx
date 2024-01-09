function Progress({ numofquestion, index, maxPossiblePoints, answer, points }) {
  return (
    <header className="progress">
      <progress max={numofquestion} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numofquestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
