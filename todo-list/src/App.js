import React, { useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import CreateList from "./components/CreateList";
import TodoList from "./components/TodoList";
import DoingList from "./components/DoingList";
import DoneList from "./components/DoneList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "cocoon",
    },
    {
      id: 2,
      username: "ultra",
    },
    {
      id: 3,
      username: "hozae",
    },
  ]);

  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  const { username } = inputs;
  const nextId = useRef(4);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
    };

    setUsers([...users, user]);
    // 또는 setUsers(users.concat(user));

    setInputs({
      username: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id, state) => {
    if (state === "todo") {
      setUsers(users.filter((user) => user.id !== id));
    } else if (state === "doing") {
      setDoing(doing.filter((user) => user.id !== id));
    } else if (state === "done") {
      setDone(done.filter((user) => user.id !== id));
    }
  };

  const moveDoing = (id) => {
    setUsers(users.filter((user) => user.id !== id));

    const doinguser = users.filter((user) => user.id === id);

    setDoing(doing.concat(doinguser));
  };

  const moveDone = (id) => {
    setDoing(doing.filter((user) => user.id !== id));

    const doneuser = doing.filter((user) => user.id === id);

    setDone(done.concat(doneuser));
  };

  //drag and drop

  const [isDragging, setIsDragging] = useState(false);
  const [draggingElement, setDraggingElement] = useState(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDraggingElement(e.target);
    console.log("handleDragStart");
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggingElement(null);
    console.log("handleDragEnd");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const targetElement = e.target;
    targetElement.appendChild(draggingElement);
    console.log("handleDrop");
  };

  return (
    <div className="max-w-6xl m-auto">
      <CreateList
        username={username}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateList>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
        <TodoList
          users={users}
          onRemove={onRemove}
          moveDoing={moveDoing}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
        ></TodoList>
        <DoingList
          doing={doing}
          onRemove={onRemove}
          moveDone={moveDone}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
        ></DoingList>
        <DoneList done={done} onRemove={onRemove}></DoneList>
      </div>
    </div>
  );
}

export default App;
