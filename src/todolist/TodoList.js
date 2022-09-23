import React from "react";
import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [activity, setActivity] = useState("");
  const [edit, setEdit] = useState({});
  const [list, setList] = useState([]);

  //generate = menghasilkan
  function generateID() {
    return Date.now();
  }
  //addTodoHandler
  function addData(e) {
    e.preventDefault();

    if (edit.id) {
      const updateData = {
        id: edit.id,
        activity,
      };
      const editDataIndex = list.findIndex(function (documents) {
        return documents.id === edit.id;
      });

      const updateList = [...list];
      updateList[editDataIndex] = updateData;
      setList(updateList);

      return cancel();
    }

    setList([
      ...list,
      {
        id: generateID(),
        activity,
      },
    ]);
    setActivity("");
  }
  function remove(removeId) {
    const filterList = list.filter((documents) => {
      return documents.id !== removeId;
    });
    setList(filterList);
  }

  function editList(documents) {
    setActivity(documents.activity);
    setEdit(documents);
  }
  function cancel() {
    setEdit({});
    setActivity("");
  }
  return (
    <div className="Todolist">
      <h1>Patodo todo</h1>
      <form onSubmit={addData}>
        <input
          type="text"
          placeholder="masukan sesuatu"
          value={activity}
          onChange={function (e) {
            setActivity(e.target.value);
          }}
        />
        <button type="submit" className="buttonTodo">
          {edit.id ? "Save Changes" : "Submit"}
        </button>
        {edit.id && (
          <button className="buttonTodo" onClick={cancel}>
            Batal Edit
          </button>
        )}
      </form>
      <ul className="isikey">
        {list.map(function (documents) {
          return (
            <li key={documents.id}>
              {documents.activity}
              <button
                onClick={editList.bind(this, documents)}
                className="buttonTodo"
              >
                Edit
              </button>
              <button
                onClick={remove.bind(this, documents.id)}
                className="buttonTodo"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// import React from "react";

// import { useState } from "react";

// export default function TodoList() {
//   const [activity, setActivity] = useState("");
//   const [list, setList] = useState([]);

//   function addData(e) {
//     e.preventDefault();
//     setList([...list, activity]);
//     setActivity("");
//   }

//   return (
//    <div className="TodoList">
//       <>Todo patodo todo</>
//       <form onSubmit={addData}>
//         <input
//           type="text"
//           placeholder="Silahkan ketik"
//           value={activity}
//           onChange={function (e) {
//             setActivity(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <ol type="I">
//         {list.map(function (documents) {
//           return <li key={documents}>{documents}</li>;
//         })}
//       </ol>
//     </div>
//   );
// }
