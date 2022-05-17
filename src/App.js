import { collection, onSnapshot, query } from 'firebase/firestore';
import React, {useState,useEffect}from 'react';
import {db} from "./firebase"
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //Taking the data from the form
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);

  //EFFECTS
  useEffect(()=>{
    // console.log("hi");
    // getLocalTodos();
    const q= query(collection(db,"todos"));
    const unsub=onSnapshot(q, (querySnapshot)=>{
      let todosArray=[];
      querySnapshot.forEach((doc)=>{
        // console.log("DB doc:",doc.data);
        todosArray.push({text:doc.data().task,completed:doc.data().completed,id:doc.id})
      })
      setTodos(todosArray);
      console.log(todosArray);
    })
  }, []);

  useEffect(()=>{
    filterHandler();
    // saveLocalTodos();
  },[todos,status]);

  function filterHandler(){
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed===true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default :
        setFilteredTodos(todos);
      break;
    }
  }

  function saveLocalTodos(){
      localStorage.setItem("todos",JSON.stringify(todos));
        // console.log("todo text:",todo.text);
  }

  function getLocalTodos(){
    // console.log("The localstorage:",localStorage.getItem("todos"));
    if(localStorage.getItem("todos") === null)
    {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else
    {
      let todoLocal=JSON.parse(localStorage.getItem("todos"));
      // console.log(todoLocal);
      setTodos(todoLocal);
    } 
  }

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form 
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
