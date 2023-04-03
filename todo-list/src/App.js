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
    let user;
    if (!username) {
      alert("내용을 입력해주세요.");
    } else {
      user = {
        id: nextId.current,
        username,
      };
      setUsers([...users, user]);
      // 또는 setUsers(users.concat(user));

      setInputs({
        username: "",
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id, state) => {
    // eslint-disable-next-line default-case
    switch (state) {
      case 1:
        setUsers(users.filter((user) => user.id !== id));
        break;
      case 2:
        setDoing(doing.filter((user) => user.id !== id));
        break;
      case 3:
        setDone(done.filter((user) => user.id !== id));
        break;
    }
  };

  const moveItems = (beforeIndex, afterIndex, id) => {
    let doneuser;
    if (beforeIndex && afterIndex && beforeIndex !== afterIndex) {
      // eslint-disable-next-line default-case
      switch (beforeIndex) {
        case 1:
          setUsers(users.filter((user) => user.id !== id));
          doneuser = users.filter((user) => user.id === id);
          break;
        case 2:
          setDoing(doing.filter((user) => user.id !== id));
          doneuser = doing.filter((user) => user.id === id);
          break;
        case 3:
          setDone(done.filter((user) => user.id !== id));
          doneuser = done.filter((user) => user.id === id);
          break;
      }

      // eslint-disable-next-line default-case
      switch (afterIndex) {
        case 1:
          setUsers(users.concat(doneuser));
          break;
        case 2:
          setDoing(doing.concat(doneuser));
          break;
        case 3:
          setDone(done.concat(doneuser));
          break;
      }
    }
  };

  //drag and drop
  const draggingItemIndex = useRef(null);
  const dropWrapIndex = useRef(null);

  const handleDragStart = (e, state, id) => {
    draggingItemIndex.current = id;
    draggingItemIndex.state = state;
    console.log("handleDragStart");
  };

  const handleDragEnd = (state) => {
    console.log("handleDragEnd");
  };

  const handleDrop = (e, state) => {
    e.preventDefault();
    console.log("handleDrop");
    dropWrapIndex.state = state;
    moveItems(
      draggingItemIndex.state,
      dropWrapIndex.state,
      draggingItemIndex.current
    );
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
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
        ></TodoList>
        <DoingList
          doing={doing}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
        ></DoingList>
        <DoneList
          done={done}
          onRemove={onRemove}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
        ></DoneList>
      </div>
    </div>
  );
}

export default App;
