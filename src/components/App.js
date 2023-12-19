import React, { useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");

  function calculate_relationship(e) {
    e.preventDefault();

    if (name1.trim() === "" || name2.trim() === "") {
      setRelationship("Please Enter valid input");
      return;
    }

    let str1 = name1;
    let str2 = name2;

    for (let i of name1) {
      if (name2.includes(i)) {
        str1 = str1.replace(i, "");
        str2 = str2.replace(i, "");
      }
    }

    setName1(str1);
    setName2(str2);
    setRelationship(arr[(str1.length + str2.length) % 6]);
  }

  return (
    <div id="main">
      <form>
        <input
          type="text"
          name="name1"
          data-testid="input1"
          placeholder="Enter First Name"
          onChange={(e) => setName1(e.target.value)}
          value={name1}
        />
        <input
          type="text"
          name="name2"
          data-testid="input2"
          placeholder="Enter Second Name"
          onChange={(e) => setName2(e.target.value)}
          value={name2}
        />
        <button
          data-testid="calculate_relationship"
          type="submit"
          onClick={calculate_relationship}
        >
          Calculate Relationship Future
        </button>
        <button
          data-testid="clear"
          type="reset"
          onClick={() => {
            setName1("");
            setName2("");
            setRelationship("");
          }}
        >
          Clear
        </button>
      </form>

      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default App;
