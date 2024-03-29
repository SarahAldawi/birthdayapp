import React from "react";

export default function Person({ image, age, name }) {
  return (
    <>
      <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}years</p>
        </div>
      </article>
    </>
  );
}
