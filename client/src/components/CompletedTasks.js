import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import './CompletedTasks.css';

const CompleteStatus = () => {
  const [tasks, setTasks] = useState([]);
  const [dataSent, setDataSent] = useState("");
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getAllTasks = () => {
    setLoading(true);
    console.log("before:", loading);
    axios({
      method: "get",
      url: "http://localhost:8000/",
    })
      .then(function (response) {
        console.log("response==>", response);
        setTasks(response?.data?.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
      
  };

  useEffect(() => {
    getAllTasks();    
  }, []);

  const deleteClickhandle = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/" + id,
    })
      .then(function (response) {
        console.log("response==>", response);
        // if(response.length() === 0){
          navigate("/");
        // }
        // else{
        //   navigate("/completed");
        // }
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  const handleLaziness = () => {
    setLoading(false);
    console.log("after:", loading);
  }

  return (
    <>
    { (tasks.length === 0 && loading) ?
        (<h1>Loading...</h1>
        )
       : 
      ((tasks.length === 0 && !loading) ? (
        <div>
            <h1>You are lazy!</h1>
            <button className="lazy-button" onClick={handleLaziness}>I wanna work</button> 
        </div>
        )
        :
          (<div className="container">
            {tasks.length &&
              tasks.map((task) => {
                  if(task.status === true){
                      return (
                          <div className="row">
                            <div className="card" style={{ width: "18rem" }}>
                              <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                  {task.body}{task.status}
                                </h6>
                                <p className="card-text">
                                  
                                </p>
                                <button
                                  className="x-button"
                                  onClick={() => deleteClickhandle(task._id)}
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                  }
              })}
          </div>)
      )
    }
    </>
  );
};
export default CompleteStatus;