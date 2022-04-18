
# todo-app-MERN

* **Todo-App-MERN** *is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do*.
* *It is helpful in planning our daily schedules.*




## Features

This Project includes:

  * *Welcome Page*.
  * *Page to add/remove and update Todo-items*.
  * *Todo items can have a due date. If they do, show it on the UI. The date should be in the future*.
  


## Run Locally

**Clone the project**

```bash
  git clone https://github.com/ashishSingh-OH/todo-app-MERN.git
```

Go to the project directory

```bash
  cd todo-app-MERN
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Dependencies

    "bootstrap": "^5.1.3",
    "mdb-react-ui-kit": "^3.0.0",
    "moment": "^2.29.2",
    "react-bootstrap": "^2.2.3",
    "react-calendar": "^3.7.0"

## API Reference

#### Get all items

```http
  GET: http://localhost:8000/  

  Post: http://localhost:8000/
```

| Type | API     | Data,Body            |
| :-------- | :------- | :------------------------- |
| `GET` | `http://localhost:8000/` | null |
| `Post` | `http://localhost:8000/` |title,body,date,status |
| `Delete` | `http://localhost:8000/id` | null |
| `Put` | `http://localhost:8000/id` | null |



