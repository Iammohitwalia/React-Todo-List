// import name from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';
import {AddTodo} from "./MyComponents/AddTodo";


function App() {


  const onDelete = (todo)=>{
     //console.log('I am onDelete of Todo' ,todo);
    setTodos(todos.filter((e)=>{
     return e!=todo;

    })) ;

  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      description: "YOu needto go to market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the Store",
      description: "YOu needto go to Store to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the Liquir store",
      description: "YOu needto go to Liquirstore to get this job done3"
    },
    {
      sno: 4,
      title: "Go to the Medicle store",
      description: "YOu needto go to Mediclestore to get this job done3"
    },
    {
      sno: 5,
      title: "Go to the Hotel ",
      description: "YOu needto go to Hotel to get this job done3"
    },
    {
      sno: 6,
      title: "Go to the genral store",
      description: "YOu needto go to genralstore to get this job done3"
    },
    {
      sno: 7,
      title: "Go to the cold store",
      description: "YOu needto go to coldstore to get this job done3"
      
    },
    {
      sno: 8,
      title: "Go to the Bar",
      description: "YOu needto go to Bar to get this job done3"
    }
  ]);
  return (
    <>
  <Header />
  <AddTodo />
   <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
  </>
  );
}

export default App;
