const Card = (props) => {
  return (
    <div class="row" >
      {props.tasks.map((task) => {
        return (
          <div class="col-sm-6" key={task.id}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{task.title}</h5>
                  <span class="badge rounded-pill bg-warning text-dark">{task.date}</span>
                  <p class="card-text">
                   {task.body}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};
export default Card;
