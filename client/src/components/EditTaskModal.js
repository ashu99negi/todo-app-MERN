import { Modal, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const EditTaskModal = ({
  show,
  handleClose,
  id,
  title,
  setTitle,
  body,
  setBody,
  currentDate,
  setTaskDate,
  setDataSent,
  setShowModal
}) => {
  console.log(
    "Current Title = " +
      title +
      " Current Body= " +
      body +
      " Current Date= " +
      currentDate
  );

  const changeDate = (e) => {
    setTaskDate(moment(e).format("YYYY-MM-DD"));
  };
  let navigate = useNavigate();

  const submitEditRequestHandler = (id, title, body, currentDate) => {
    axios({
      method: "put",
      url: "http://localhost:8000/" + id,
      data: {
        title: title,
        body: body,
        date: currentDate,
      },
    })
      .then(function (response) {
        console.log("response==>", response);
        setDataSent(new Date());
        setShowModal(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Title:</Modal.Title>
          <input
            type="text"
            className="form-control"
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <b>Description:</b>
          <input
            type="text"
            className="form-control"
            defaultValue={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <b>Date:</b>
          <Calendar
            defaultValue={new Date(currentDate)}
            onClickDay={(e) => changeDate(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              submitEditRequestHandler(id, title, body, currentDate)
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTaskModal;
