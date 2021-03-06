import React from "react";
import {db} from "../firebase";
import {collection,addDoc} from "firebase/firestore";

function Form({inputText,todos,setTodos,setInputText,setStatus}){
    function inputTextHandler(e){
        // console.log(e.target.value);
        //Store the input at the event in the state
        setInputText(e.target.value);
    }

    async function submitTodoHandler(e){
        e.preventDefault();
        // console.log(e.target);
        setTodos([
            ...todos,{
                text:inputText,
                completed:false,
                id:Math.random()*1000
            }
        ])

        const docRef = await addDoc(collection(db, "todos"), {
            task:inputText,
            completed:false
          });
          console.log("Document written with ID: ", docRef.id);
        //Clear the input field
        setInputText("");
    }

    function statusHandler(e){
        setStatus(e.target.value);
    }
    return(
        <form>
            {/* InputTextHandler is the event listener that is added to the HTML component */}
            <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="fiter-todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;