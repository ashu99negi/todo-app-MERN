import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const CompleteStatus = () => {
  const [tasks, setTasks] = useState([]);
  const [dataSent, setDataSent] = useState("");
  let navigate = useNavigate();

  const getAllTasks = () => {
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

  return (
    <div>
      {tasks.length &&
        tasks.map((task) => {
            if(task.status==true){
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
                          <a href="#" className="card-link">
                            Card link
                          </a>
                          <a href="#" className="card-link">
                            Another link
                          </a>
                        </div>
                      </div>
                    </div>
                  );
            }
        })}
    </div>
  );
};
export default CompleteStatus;