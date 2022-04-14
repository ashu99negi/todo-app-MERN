import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import EditTaskModal from "./EditTaskModal"


const Card = (props) => {

  const [showModal, setShowModal] = useState(false)
  
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [taskdate, setTaskDate] = useState("");
  
  

  const editHandler = (id, title, body, date) => {
  setId(id);
  setTitle(title);
  setBody(body);
  setTaskDate(date);
  setShowModal(true)
  handleShow();

}

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
                  onClick={() => clickhandle(task._id)}
                >
                  Delete Task
                </button>
                <br />
                <br />
                <button
                  className="btn btn-primary"
                  variant="primary"
                  onClick={() =>
                    editHandler(task._id, task.title, task.body, task.date)
                  }
                >
                  Edit Task
                </button>
              </div>
            </div>
            {showModal && (
              <EditTaskModal
                show={show}
                handleClose={handleClose}
                id={id}
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                currentDate={taskdate}
                setTaskDate={setTaskDate}
                setDataSent={props.setDataSent}
                setShowModal={setShowModal}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;