
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

  
  // const [task, setTasks] = useState([]);

  // let navigate = useNavigate()
  //   const getAllTasks=()=>{
  //     axios({
  //       method: "get",
  //       url: "http://localhost:8000/completed",
  //     })
  //       .then(function (response) {
  //           console.log("response==>",response)
  //           setTasks(response?.data?.message)
  //           navigate('/')
  //       }).catch((error)=>{
  //           console.log("error ===> ",error)
  //       }) 
  //   }

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
