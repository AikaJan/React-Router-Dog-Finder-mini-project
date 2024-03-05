import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";
import { dogs } from "./dogs";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav dogs={dogs} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
