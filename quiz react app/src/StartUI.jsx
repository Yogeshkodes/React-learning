function StartUI({ numofquestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numofquestion} question to test your React Mastery</h3>
      <button
        className="btn  btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets go
      </button>
    </div>
  );
}

export default StartUI;
