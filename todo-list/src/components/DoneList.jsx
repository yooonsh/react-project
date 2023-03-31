import React from "react";

function Todo({ user, state, onRemove }) {
  return (
    <div className="flex gap-x-3 mt-3 text-gray-600">
      <p className="text-gray-300 line-through">{user.username}</p>
      <button
        onClick={() => {
          onRemove(user.id, state);
        }}
      >
        🗑️
      </button>
    </div>
  );
}

function DoneList({ done, onRemove }) {
  return (
    <div className="bg-white shadow-sm p-10 rounded-2xl text-left">
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        DONE
      </h3>
      {done.map((user) => (
        <Todo user={user} key={user.id} state="done" onRemove={onRemove} />
      ))}
    </div>
  );
}

export default DoneList;
