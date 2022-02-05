import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import UserCard from "./Components/UserCard";
// https://5ca64b8d3a08260014279660.mockapi.io/employees
//import employeeData from "./employees";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <UserCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
