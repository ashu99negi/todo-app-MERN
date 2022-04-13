import axios from "axios";

const Card = (props) => {
  const DeleteHandler =  (id) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/id",
    })
      .then(function (response) {
        console.log("response==>", response);
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
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
                  onClick={DeleteHandler(task._id)}
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
