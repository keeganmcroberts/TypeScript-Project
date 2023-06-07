import React, { useState, useTransition } from 'react';

import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { Todo } from './components/model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies:string[];
// let role:[number, string];
// let anything:any;

// name = "Keegan"

// function printName(name:string){
//   console.log(name)
// }

// printName(name)

// let printName: (name:string)=>void;
//void returns undefined
// let printName2: (name:string)=>never; 
//never returns nothing 




// let lotsOfPeople:Person[]

// interface Person {
//   name:string;
//   age?:number;
// }



// let person: Person = {
//     name: "Keegan",
//     age: 26,
//   }

//   type X = {
//     a:string;
//     b:number;
//   }



  
  const App:React.FC = () => {

    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])
    const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);
    console.log("todos list", todos)

    const handleAdd = (e: React.FormEvent)=>{
      e.preventDefault()

      if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo('')
      }
    }

    const onDragEnd = (result: DropResult) => {

      const {source, destination} = result;

      if (!destination) return;

      if (destination.droppableId === source.droppableId && destination.index === source.index) return;

      let add, 
      active = todos,
      complete = completedTodo;

      if (source.droppableId === "Todos_List"){
        add = active[source.index];
        active.splice(source.index, 1)
      } else{
        add = complete[source.index];
        complete.splice(source.index, 1)
      }

      if (destination.droppableId === "Todos_List"){
        active.splice(destination.index,0,add)
      }else{
        complete.splice(destination.index,0,add)
      }

      setCompletedTodo(complete)
      setTodos(active)

    }

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
        <span className="heading">ToDo</span>
        <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo}/>
        <ToDoList todos={todos} setTodos={setTodos} completedTodo={completedTodo} setCompletedTodo={setCompletedTodo}/>
        {/* //auto imported using control + space */} 
        </div>

      </DragDropContext>
  );
}

export default App;
