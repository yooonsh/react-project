import React from "react";

function Todo({ user, state, onRemove, moveDoing }) {
  return (
    <div className="flex gap-x-3 mt-3 text-gray-600" draggable>
      <p>{user.username}</p>
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
    </div>
  );
}

function TodoList({ users, onRemove, moveDoing }) {
  return (
    <div className="bg-white shadow-sm p-10 rounded-2xl text-left min-h-500">
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        TO DO
      </h3>

      {users.map((user) => (
        <Todo
          user={user}
          key={user.id}
          state="todo"
          onRemove={onRemove}
          moveDoing={moveDoing}
        />
      ))}
    </div>
  );
}

export default TodoList;
