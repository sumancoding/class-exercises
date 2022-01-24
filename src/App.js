import React from "react";
import Course from "./Course";

function App() {
  const notes = [
    {
      id: 1,
      name: "Iphone_11",
      price: 600,
      important: true,
    },
    {
      id: 2,
      name: "Samsung z fold",
      price: 1200,
      important: true,
    },
    {
      id: 3,
      name: "Jabra Elye headphone",
      price: 200,
      important: false,
    },
    {
      id: 4,
      name: "MacBook",
      price: 1600,
      important: true,
    },
  ];
  return (
    <div>
      <h1> Products with Price</h1>
      <Course notes={notes} />
    </div>
  );
}

export default App;
