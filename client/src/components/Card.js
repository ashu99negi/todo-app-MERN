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
    <div class="row">
      {props.tasks.map((task) => {
        return (
          <div class="col-sm-6" key={task._id}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{task.title}</h5>
                <span class="badge rounded-pill bg-warning text-dark">
                  {task.date}
                </span>
                <p class="card-text">{task.body}</p>
                <button
                  class="btn btn-primary"
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