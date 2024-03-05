import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "./dogsDetails.css";
const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <img
        style={{ width: "500px", height: "500px" }}
        src={dog.img}
        alt={dog.name}
      />
      <p>Facts:</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link
        style={{ fontWeight: "bold", marginTop: "20px", marginRight: "30px" }}
        to="/dogs"
      >
        Back to Dog List
      </Link>
    </div>
  );
};

export default DogDetails;
