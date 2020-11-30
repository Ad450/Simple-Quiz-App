import React, { useState } from "react";
import list from "./list";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const questionStyles = {
    padding: "25px",
    margin: "30px",
  };
  const answerStyle = {
    marginRight: "35px",
  };

  const handleClick = (event) => {
    list.forEach((set) => {
      if (
        event.target.innerText.toLowerCase() ===
          set.correctAnswer.toLowerCase() &&
        count <= 2
      ) {
        setScore(score + 1);
        setCount(count + 1);
      } else if (count <= 2) {
        setCount(count + 1);
      } else {
        setCount(2);
      }
    });
  };

  return (
    <div>
      {count > 2 ? (
        <h3>End of Quiz, thank you</h3>
      ) : (
        <button style={questionStyles}>{list[count].question} </button>
      )}
      <button>
        <h3>Score(s) :</h3>
        {score}
      </button>
      <div>
        {count > 2
          ? null
          : list[count].answers.map((answer) => {
              return (
                <button onClick={handleClick} style={answerStyle}>
                  {answer}
                </button>
              );
            })}
      </div>
    </div>
  );
}

export default App;
