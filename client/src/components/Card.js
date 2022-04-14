import axios from "axios";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Card = (props) => {
// const clickhandle=(id)=>{
//   console.log(id)
// }

let navigate = useNavigate();
  const clickhandle =  (id) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/"+ id,

    })
      .then(function (response) {
          console.log("response==>",response)
          navigate('/')
          props.setDataSent(new Date())
      }).catch((error)=>{
          console.log("error ===> ",error)
      })

};
  return (
    <div className="row">
      {props.tasks.map((task) => {
        return (
          <div className="col-sm-6" key={task._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <span className="badge rounded-pill bg-warning text-dark">
                  {task.date}
                </span>
                <p className="card-text">{task.body}</p>
                <button
                  className="btn btn-primary"
                  onClick={()=>clickhandle(task._id)}
                >
                  Delete Task
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;