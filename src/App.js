import React, {useState,useEffect} from "react";
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from "./components/TodoList";

function App() {
  const [inputText,setinputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredtodos,setFilteredTodos] = useState([]);

  useEffect(() =>{
    filterHandler();
  },[todos,status])
  function filterHandler(){
    switch(status){
      case 'completed':setFilteredTodos(todos.filter(todo => todo.completed === true));
                        break;
      case 'uncompleted':setFilteredTodos(todos.filter(todo => todo.completed === false));
                          break;
      default:setFilteredTodos(todos);break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setinputText={setinputText}
      setStatus={setStatus}

       />
      <TodoList todos={todos} setTodos={setTodos} filteredtodos={filteredtodos}/>
    </div>
  );
}

export default App;
