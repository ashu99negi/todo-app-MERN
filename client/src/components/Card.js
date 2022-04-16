import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import EditTaskModal from "./EditTaskModal";
import { useEffect } from "react";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [taskdate, setTaskDate] = useState("");
  const [completedTask, setCompletedTask] = useState([]);

  const [isClicked, setIsClicked] = useState(false);
  

  const editHandler = (id, title, body, date) => {
    setId(id);
    setTitle(title);
    setBody(body);
    setTaskDate(date);
    setShowModal(true);
    handleShow();
  };

  let navigate = useNavigate();
  const clickhandle = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/" + id,
    })
      .then(function (response) {
        console.log("response==>", response);
        navigate("/");
        props.setDataSent(new Date());
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  

  const handleStatus = (id, status)=>{
    console.log(status);
    // setStatus(!status);
    console.log(status);
    setIsClicked(true);

    // if(isClicked){
    //   completedTask = [...completedTask, task]

    // }


    axios({
      method: "patch",
      url: "http://localhost:8000/" + id,
      data: {
        status: !status 
      },
    })
      .then(function (response) {
        console.log("response==>", response);
        props.setDataSent(new Date());
        setShowModal(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });

    
  }


  // useEffect(()=>{
  //   props.setDataSent(new Date());
  // }, [status])

  return (
    <div className="row">
      {props.tasks.map((task) => {

        // task.status && setCompletedTask([...completedTask, task])

        if(!task.status){
          return (
            <div className="col-sm-6" key={task._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <div class="form-check">
                  <label class="form-check-label" for="flexCheckDefault">
                    Completed
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    defaultValue={status}
                    id="flexCheckDefault"
                    onClick={()=>{handleStatus(task._id, task.status)}}
                  />
                </div>
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
        }
        // return (
            // <div className="col-sm-6" key={task._id}>
            //   <div className="card">
            //     <div className="card-body">
            //       <h5 className="card-title">{task.title}</h5>
            //       <div class="form-check">
            //         <label class="form-check-label" for="flexCheckDefault">
            //           Completed
            //         </label>
            //         <input
            //           class="form-check-input"
            //           type="checkbox"
            //           defaultValue={status}
            //           id="flexCheckDefault"
            //           onClick={()=>{handleStatus(task._id, task.status)}}
            //         />
            //       </div>
            //       <span className="badge rounded-pill bg-warning text-dark">
            //         {task.date}
            //       </span>
            //       <p className="card-text">{task.body}</p>
            //       <button
            //         className="btn btn-primary"
            //         onClick={() => clickhandle(task._id)}
            //       >
            //         Delete Task
            //       </button>
            //       <br />
            //       <br />
            //       <button
            //         className="btn btn-primary"
            //         variant="primary"
            //         onClick={() =>
            //           editHandler(task._id, task.title, task.body, task.date)
            //         }
            //       >
            //         Edit Task
            //       </button>
            //     </div>
            //   </div>
            //   {showModal && (
            //     <EditTaskModal
            //       show={show}
            //       handleClose={handleClose}
            //       id={id}
            //       title={title}
            //       setTitle={setTitle}
            //       body={body}
            //       setBody={setBody}
            //       currentDate={taskdate}
            //       setTaskDate={setTaskDate}
            //       setDataSent={props.setDataSent}
            //       setShowModal={setShowModal}
            //     />
            //   )}
            // </div>
          
        
        // );
      })}
    </div>
  );
};

export default Card;
