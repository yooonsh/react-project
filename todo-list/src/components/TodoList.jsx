import React from "react";

function Todo({
  user,
  state,
  onRemove,
  moveDoing,
  handleDragStart,
  handleDragEnd,
}) {
  return (
    <li
      className="flex gap-x-3 mt-3 p-3 bg-white shadow-md border border-solid border-gray-100 rounded-md"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    >
      <p className="text-gray-600">{user.username}</p>
      <button
        className=""
        onClick={() => {
          onRemove(user.id, state);
        }}
      >
        🗑️
      </button>
      <button
        className=""
        onClick={() => {
          moveDoing(user.id);
          console.log(user.id);
        }}
      >
        👉
      </button>
    </li>
  );
}

function TodoList({
  users,
  onRemove,
  moveDoing,
  handleDragStart,
  handleDragEnd,
  handleDrop,
}) {
  return (
    <div
      className="bg-white shadow-sm p-10 rounded-2xl text-left min-h-500"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3 className="mb-5  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        TO DO
      </h3>
      <ul>
        {users.map((user) => (
          <Todo
            user={user}
            key={user.id}
            state="todo"
            onRemove={onRemove}
            moveDoing={moveDoing}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
