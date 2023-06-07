import React, { useState, useRef, useEffect } from 'react'
import { Todo } from './model';
import {AiFillEdit} from 'react-icons/ai'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import "./styles.css";
import { Draggable } from 'react-beautiful-dnd';


interface Props {
    index:number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
  

const SingleToDo: React.FC<Props> = ({todo, setTodos, todos, index}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    
    const handleIsDone = (id:number) => {
        setTodos(todos.map((todo)=>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ))
    }

    const handleDelete = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    const handleEdit = ( e: React.FormEvent, id: number)=>{
        e.preventDefault();

        setTodos(todos.map((todo)=>(
        todo.id === id ? {...todo, todo:editTodo} : todo

        )))
        setEdit(false)
    }

        let inputRef = useRef<HTMLInputElement>(null)
       

        useEffect(()=>{
            inputRef.current?.focus()
        },[edit])

        //inputRef.current.focus targets the selected html element and highlights it 

  return (
      <Draggable draggableId={todo.id.toString()} index={index}>

          {(provided)=>(
            <form className="todos_single" 
            onSubmit={(e)=>{handleEdit(e, todo.id)}}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef
            }>
                
                {edit ? 
                <input 
                ref={inputRef}
                value={editTodo} 
                onChange={(e)=>setEditTodo(e.target.value)}>
                
                </input> :

                todo.isDone ? 
                <s className="todos_single--text">{todo.todo}</s>
                : 
                <span className="todos_single--text">{todo.todo}</span>
                }
                <div>
                    <span className="icon"><BsFillPatchCheckFill onClick={()=>{handleIsDone(todo.id)}}/></span>
                    <span className="icon"><AiFillEdit 
                    onClick={ () => {
                        if (!edit && !todo.isDone){
                            setEdit(!edit)
                        }}
                    }/></span>
                    <span className="icon"><RiDeleteBin6Fill onClick={()=>{handleDelete(todo.id)}}/></span>
                </div>
            </form>


          )}

      </Draggable>
  )
}

export default SingleToDo
