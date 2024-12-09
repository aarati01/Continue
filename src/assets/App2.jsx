import { useState } from "react";

const App2 = () => {
  const [showbtn, setshowbtn] = useState(false);
  const [todos] = useState([
    {
      title: "hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey another todo",
      desc: "I am a good todo tooo"
    },
    {
      title: "hey i am grocery todo",
      desc: "I am a good todo"
    }
  ]);

  return (
    <>
      {/* {showbtn?<button>Showbtn is true</button>:<button>showbtn is false</button>} */}

      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}

      {showbtn && <button>showbtn is true</button>}
      <div>
        <button onClick={() => setshowbtn(!showbtn)}>Toogle showbtn</button>
      </div>
    </>
  );
};

export default App2;
