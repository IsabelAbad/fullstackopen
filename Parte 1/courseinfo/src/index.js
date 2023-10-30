import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part1 = ({ part1 }) => {
  return (
    <p>
      {part1.name} {part1.exercises}
    </p>
  );
};
const Part2 = ({ part2 }) => {
  return (
    <p>
      {part2.name} {part2.exercises}
    </p>
  );
};
const Part3 = ({ part3 }) => {
  return (
    <p>
      {part3.name} {part3.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part1 part1={course.parts[0]} />
      <Part2 part2={course.parts[1]} />
      <Part3 part3={course.parts[2]} />
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises{" "}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

const App = (props) => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
