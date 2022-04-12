import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import Card from "./components/Card";
import { useState } from "react";

const DUMMY_TASKS = [
  {
    id: "m1",
    title: "Sushi",
    body: "Finest fish and veggies",
    date: 22.99,
  },
];

function App() {
  const [task, setTasks] = useState(DUMMY_TASKS);
  const [showForm, setShowForm] = useState(false);

  const formDataHandler = (title, body, date) => {
    console.log("in the app js ");
    console.log(title, body, date);
    setTasks([
      { id: Math.random(), title: title, body: body, date: date },
      ...task,
    ]);
  };
  const showNewTask = () => {
    setShowForm(!showForm);
  };
  const addTasks = (
    <Form
      showForm={showForm}
      setShowForm={setShowForm}
      onChangeFormHandler={formDataHandler}
    ></Form>
  );
  return (
    <div className="container ">
      <div className="new-expense">
        {showForm ? addTasks : <button onClick={showNewTask}>Add Tasks</button>}
      </div>
      <div className="expenses">
        <Card key={task.id} tasks={task}></Card>
      </div>
    </div>
  );
}

export default App;
