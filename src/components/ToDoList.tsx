import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from './model';
import SingleToDo from './SingleToDo';
import "./styles.css";


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodo: Todo[];
    setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({todos,setTodos, completedTodo, setCompletedTodo}) => {
  return (
      <div className="container">
          <Droppable droppableId='Todos_List'>
              {(provided)=>(
                <div className='todos' 
                ref={provided.innerRef} 
                {...provided.droppableProps}>
                    <span className="todos_heading">Tasks Todo</span>
                    {todos.map((todo,index) => (
                    <SingleToDo 
                    index={index}
                    todo={todo} 
                    key={todo.id} 
                    todos={todos} 
                    setTodos={setTodos}/>
            ))}
                </div>


              )}

          </Droppable>
          <Droppable droppableId='CompletedTodos'>
            {(provided)=>(
            <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="todos_heading">Completed Todos</span>
                {completedTodo.map((todo,index) => (
                <SingleToDo 
                index={index}
                todo={todo} 
                key={todo.id} 
                todos={completedTodo} 
                setTodos={setCompletedTodo}/>
        ))}

            </div>



            )}
          </Droppable>

      </div>
   
  )
}

export default ToDoList

 
