import React from "react";

function CreateList({ username, onChange, onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // 버튼 클릭 로직
  };
  return (
    <div className=" p-20">
      <form onSubmit={handleSubmit}>
        <input
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 mr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="username"
          placeholder="TO DO"
          onChange={onChange}
          value={username}
        />
        <button
          type="submit"
          className="btn bg-blue-500 text-white"
          onClick={onCreate}
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default CreateList;
