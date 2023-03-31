import React from "react";

function Doing({ user, state, onRemove, moveDone }) {
  return (
    <div className="flex gap-x-3 mt-3 text-gray-600">
      <p>{user.username}</p>
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
    </div>
  );
}

function DoingList({ doing, onRemove, moveDone }) {
  return (
    <div className="bg-white shadow-sm p-10 rounded-2xl text-left">
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        DOING
      </h3>
      {doing.map((user) => (
        <Doing
          user={user}
          key={user.id}
          state="doing"
          onRemove={onRemove}
          moveDone={moveDone}
        />
      ))}
    </div>
  );
}

export default DoingList;
