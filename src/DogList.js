import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog) => (
        <div className="dog" key={dog.name}>
          <Link
            style={{ fontWeight: "bold", marginTop: "20px" }}
            to={`/dogs/${dog.name}`}
          >
            {dog.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;
