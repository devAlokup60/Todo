import React from "react";
import { useSelector } from "react-redux"; //for read from todoslice
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux"; ////for wiring up to store
import { removeTodo, editTodo } from "../features/todo/todoSlice"; //import reducers from todoSlice

const Todos = () => {
  const todos = useSelector((state) => state.todos); // read the state of todoSlice
  //console.log(todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center text-center mx-auto mt-4 font-semibold text-2xl">
        <h2>Todos</h2>
      </div>

      <div className="flex justify-center items-center text-center mx-auto shadow-md mb-[2rem] pb-[2rem] w-[40rem]">
        <ul className="list-none w-[21rem]">
          {todos.map((todo) => (
            <li
              className="mt-4 flex text-white justify-between items-center bg-zinc-800 px-4 py-2  rounded"
              key={todo.id}
            >
              <div>{todo.text}</div>
              <div>
                {/* <button
                  onClick={() => dispatch(editTodo(todo.id))}
                  className="text-white bh-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <BiSolidEditAlt />
                </button> */}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bh-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <BsFillTrash3Fill />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
