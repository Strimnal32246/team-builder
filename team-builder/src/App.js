import React from "react";
import "./App.css";
import { useState } from "react";
import Form from "./form.js";
function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  });

  const editMember = memberToAdd => {
    setMemberToEdit(memberToAdd);
    console.log(memberToAdd);
  };

  return (
    <div className="App">
      {team.map((element, index) => {
        return (
          <div>
            <h2>{element.name}</h2>
            <h3>{element.email}</h3>
            <p>{element.role}</p>
            <button onClick={() => editMember(element)}>EDIT</button>
          </div>
        );
      })}
      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
