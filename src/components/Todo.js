import React from "react";
import {doc,updateDoc,deleteDoc} from "firebase/firestore";
import {db} from "../firebase";

function Todo({text,todo,todos,setTodos}){
    async function deleteHandler(){
        await deleteDoc(doc(db,"todos",todo.id));
        setTodos(todos.filter(el => el.id!==todo.id))
    }
    function completeHandler(){
        var id=todo.id;
        setTodos(todos.map((item) =>{
            if(item.id===todo.id)
            {
                updateStatus(item,todo);
                return{
                    ...item,completed:!item.completed
                }
            }

            return item;  
        }))
    }
    async function updateStatus(item,todo){
        // const docRef = doc(db, "todos", todo.id);
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
            
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }
        await updateDoc(doc(db,"todos",todo.id),{
            completed:!item.completed
        })
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed":""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;