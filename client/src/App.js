
import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import RootFile from "./components/RootFile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootFile />} />
      </Routes>
    </div>
  );
};

export default App;
