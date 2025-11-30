import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    // console.log(copyTask);

    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    // console.log(copyTask)
    //  console.log(idx)

    copyTask.splice(idx,1)
    setTask(copyTask)
  };

  return (
    <div className=" h-screen bg-black text-white lg:flex  ">
      <div className=" p-2 w-1/2">
        <form
          onSubmit={(e) => submitHandler(e)}
          action=""
          className="flex flex-col gap-4  p-10  bg-[#111] rounded-lg"
        >
          <h1 className="text-3xl font-semibold mb-10">Add Notes</h1>
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="border-2  px-3 py-2 text-xl rounded-lg outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            type="text"
            className="border-2 text-xl px-3 h-32 py-1 rounded-lg outline-none"
            placeholder="Enter task"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className="bg-white text-black rounded-lg px-5 py-2  cursor-pointer font-bold active:scale-95">
            Add Notes
          </button>
        </form>
      </div>

      <div className=" w-1/2 p-5 m-2 rounded-2xl">
        <h1 className="text-3xl font-semibold mb-5">Recent Notes</h1>

        <div className="flex flex-wrap gap-4 overflow-y-auto h-[600px] pr-2">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" relative bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]
                bg-cover
               h-60 w-48 text-black px-5 py-7 rounded-2xl"
              >
                <div
                  onClick={() => deleteNote(idx)}
                  className="absolute bottom-0 right-0 p-2 text-white m-3 mr-4 bg-red-500 rounded-full cursor-pointer active:scale-95"
                >
                  <MdDelete />
                </div>
                <h3 className="leading-tight text-2xl font-bold">
                  {elem.title}
                </h3>
                <p className="leading-tight text-sm pt-3 text-gray-600 font-semibold">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
