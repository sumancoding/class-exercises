import React from "react";

const Course = ({ notes }) => {
  let total = notes.reduce((acc, val) => acc + val.price, 0);
  return (
    <div>
      {notes.map((note) => (
        <h4>
          {note.name}: € {note.price}
        </h4>
      ))}
      <h3> Price : € {total} </h3>
    </div>
  );
};

export default Course;
