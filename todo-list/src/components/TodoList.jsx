import React from "react";

function Todo({ user, state, onRemove, handleDragStart, handleDragEnd }) {
  return (
    <li
      className="flex gap-x-3 mt-3 p-3 bg-white shadow-md border border-solid border-gray-100 rounded-md"
      onDragStart={(e) => handleDragStart(e, state, user.id)}
      onDragEnd={(e) => handleDragEnd(state)}
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
    </li>
  );
}

function TodoList({
  users,
  onRemove,
  handleDragStart,
  handleDragEnd,
  handleDrop,
}) {
  const state = 1;
  return (
    <div
      className="bg-white shadow-sm p-10 rounded-2xl text-left min-h-500"
      onDrop={(e) => handleDrop(e, state)}
    >
      <h3 className="mb-5  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        TO DO
      </h3>
      <ul className="h-full" onDragOver={(e) => e.preventDefault()}>
        {users.map((user) => (
          <Todo
            user={user}
            key={user.id}
            state={state}
            onRemove={onRemove}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
