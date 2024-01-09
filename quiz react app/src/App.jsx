import { useEffect } from "react";
import Compomain from "./Compomain";
import Header from "./Header";
import { useReducer } from "react";
import Error from "./Error";
import Loader from "./Loader";
import StartUI from "./StartUI";
import Questiones from "./Questiones";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS_PER_SECONDS = 30;

const initial = {
  questions: [],
  states: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reduce(state, action) {
  switch (action.type) {
    case "dataReceiver":
      return { ...state, questions: action.payload, states: "Ready" };

    case "dataFailed":
      return { ...state, states: "Error" };

    case "start":
      return {
        ...state,
        states: "active",
        secondsRemaining: state.questions.length * SECS_PER_SECONDS,
      };

    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        states: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initial, questions: state.questions, states: "Ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        states: state.secondsRemaining === 0 ? "finished" : state.states,
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [
    { questions, states, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reduce, initial);

  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  const numofquestion = questions.length;

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceiver", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", payload: err }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Compomain>
        {states === "loading" && <Loader />}
        {states === "Error" && <Error />}
        {states === "Ready" && (
          <StartUI numofquestion={numofquestion} dispatch={dispatch} />
        )}
        {states === "active" && (
          <>
            <Progress
              index={index}
              numofquestion={numofquestion}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Questiones
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numofquestion={numofquestion}
              />
            </Footer>
          </>
        )}
        {states === "finished" && (
          <FinishScreen
            index={index}
            numofquestion={numofquestion}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            answer={answer}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Compomain>
    </div>
  );
}
