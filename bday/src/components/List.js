import React from "react";
import './css/List.css'
const List = ({ people }) => {
  return (
    <>
      <h1>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div className="description">
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
            </article>
          );
        })}
      </h1>
    </>
  );
};

export default List;
