import React, {useState,useEffect}from 'react';
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
    console.log("hi");
    getLocalTodos();
  }, []);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
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
  }

  function getLocalTodos(){
    console.log("The localstorage:",localStorage.getItem("todos"));
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
