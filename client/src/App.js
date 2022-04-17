
import "./App.css";
import RootFile from "./components/RootFile";
import CompletedTasks from "./components/CompletedTasks"
import axios from 'axios'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootFile />} />
        <Route path="/completed" element={<CompletedTasks />} />

      </Routes>
    </div>
  );
};

export default App;
