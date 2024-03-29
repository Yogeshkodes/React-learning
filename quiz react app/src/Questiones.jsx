import Option from "./option";

function Questiones({ questions, index, dispatch, answer }) {
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>

      <Option question={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questiones;
