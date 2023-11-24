import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://images.unsplash.com/photo-1506972849873-0ce0dfc4d187?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="City Rush"
    ></img>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1 className="h1">Yogesh Yadav</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preapring a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beforeEach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}

      {/* <Skill name="HTML+CSS 💪" color="blue" />
      <Skill name="Javascript 💪" color="#82c91e" />
      <Skill name="Web-Design 💪" color="#f08c00" />
      <Skill name="Git and Github 💪" color="#0ca678" />
      <Skill name="React 💪" color="#ffd43b" />
      <Skill name="Svelte 👶 " color="#f76707" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <ul style={{ backgroundColor: skillObj.color }} className="skill">
      {skillObj.skill}{" "}
      {skillObj.level === "advanced"
        ? "💪"
        : skillObj.level === "intermediate"
        ? "👍"
        : "👶"}
    </ul>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
