import React from "react";

function Todo({ user, state, onRemove }) {
  return (
    <li className="flex gap-x-3 mt-3 p-3 bg-white shadow-md border border-solid border-gray-100 rounded-md">
      <p className="text-gray-300 line-through">{user.username}</p>
      <button
        onClick={() => {
          onRemove(user.id, state);
        }}
      >
        🗑️
      </button>
    </li>
  );
}

function DoneList({ done, onRemove }) {
  return (
    <div className="bg-white shadow-sm p-10 rounded-2xl text-left">
      <h3 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        DONE
      </h3>
      <ul>
        {done.map((user) => (
          <Todo user={user} key={user.id} state="done" onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
}

export default DoneList;
