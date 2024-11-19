import { useState } from "react";

export default function TodosPage() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // method 1
    // setTodos([...todos, inputValue]);

    // method 2
    todos.push(inputValue);
    setTodos([...todos]);
    setInputValue("");
  };
  const updateItem = (id, value) => {
    console.log(id);
    todos[id]=value;
    setTodos([...todos]);

  };
  const deleteItem = (id) => {
    // using filter
    // setTodos(todos.filter((item, i) => i != id));

    // using splice
    todos.splice(id, 1);
    setTodos([...todos]);
  };


  return (
    <div className="flex  justify-center my-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="font-semibold text-2xl text-center mb-3">CRUD APP</h1>
        <hr />
        <ol className="list-decimal p-3 my-3">
          {!todos.length && (
            <h1 className="text-center bg-yellow-500 p-2 text-white rounded-lg">
              Nothing Found
            </h1>
          )}
   

          {todos.map((item, i) => {
            return (
              <li className="" key={i}>
                <div className="p-1 flex justify-between">
                  <div>
                    {/* <span>{item}</span> */}
             

                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateItem(i,e.target.value)}

                      className="appearance-none rounded w-full p-1 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2"
                    />
                  </div>
                  <div>
                    <span
                      onClick={() => deleteItem(i)}
                      className="text-red-500 hover:text-red-600 border px-2 rounded hover:bg-slate-400 cursor-pointer"
                    >
                      X
                    </span>
          
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mb-4">
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2"
            placeholder="Enter something"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

