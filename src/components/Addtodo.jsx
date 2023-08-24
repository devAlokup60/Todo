import React, { useState } from "react";
import { useDispatch } from "react-redux"; //for wiring up to store
import { addTodo } from "../features/todo/todoSlice"; //import reducers from todoSlice
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addtodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    // Check if the input is empty
    if (input.trim() === "") {
      toast.warn("Todo text cannot be empty!"); // Display alert
      return;
    }

    dispatch(addTodo(input)); //have the data and send to the store
    setInput("");
  };
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <form
        onSubmit={addTodoHandler}
        className="flex justify-center items-center mx-auto mt-6 shadow-md h-[10rem] w-[40rem]"
      >
        <div className="flex justify-center items-center mx-auto gap-2">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Addtodo;
