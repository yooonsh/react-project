import React from "react";

function CreateList({ username, onChange, onCreate }) {
  return (
    <div className=" p-20">
      <input
        className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 mr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="username"
        placeholder="TO DO"
        onChange={onChange}
        value={username}
      />
      <button className="btn btn-blue" onClick={onCreate}>
        ADD
      </button>
    </div>
  );
}

export default CreateList;
