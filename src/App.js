
import './App.css';
import Header from "./my components/Header.js";
import {Todos} from "./my components/todos";
import {Footer} from "./my components/footer";
import {AddTodo} from "./my components/AddTodo";
import {About} from "./my components/About";
// import {Update} from "./my components/Update";


import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
 

    // this will not work on react for deleting
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{  //filter is higher order array method
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }


  let sno
  const addTodo = (title,desc)=>{
    if(todos.length===0){
      sno=1;
    }
    else
    {
      sno=todos[todos.length-1].sno+1;
    }
   
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
  }

  // const [addTodo,updateTodo] = useState(addTodo); //review



  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  // const update = (title,desc)=>{
    // console.log(title,desc);
    // let l =JSON.parse(localStorage.key(sno)) 
    // let l =JSON.parse(localStorage.getItem("todos")) 
    // console.log(l);
  // }

  return (
    <>
    <Router>
      <Header title="Toodos List" searchbar={true}/>
      <Switch>
          <Route exact path="/" render={()=>{
            return (
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete}/>
            </>
            )
          }}>
          </Route>
          {/* <Route exact path="/update"> */}
            {/* <Update update={update} /> */}
          {/* </Route> */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
     <Footer/>
   </Router>
   </>
  );
}

export default App;
