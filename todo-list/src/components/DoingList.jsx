import React from "react";

function Doing({
  user,
  state,
  onRemove,
  moveDone,
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
        onClick={() => {
          onRemove(user.id, state);
        }}
      >
        🗑️
      </button>
      <button
        onClick={() => {
          moveDone(user.id);
        }}
      >
        👉
      </button>
    </li>
  );
}

function DoingList({
  doing,
  onRemove,
  moveDone,
  handleDragStart,
  handleDragEnd,
  handleDrop,
}) {
  return (
    <div
      className="bg-white shadow-sm p-10 rounded-2xl text-left"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        DOING
      </h3>
      <ul>
        {doing.map((user) => (
          <Doing
            user={user}
            key={user.id}
            state="doing"
            onRemove={onRemove}
            moveDone={moveDone}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </ul>
    </div>
  );
}

export default DoingList;
