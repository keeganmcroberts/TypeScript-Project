import React from 'react';

import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies:string[];
let role:[number, string];
let anything:any;

name = "Keegan"

// function printName(name:string){
//   console.log(name)
// }

// printName(name)

let printName: (name:string)=>void;
//void returns undefined
let printName2: (name:string)=>never; 
//never returns nothing 




// let lotsOfPeople:Person[]

interface Person {
  name:string;
  age?:number;
}



let person: Person = {
    name: "Keegan",
    age: 26,
  }

  type X = {
    a:string;
    b:number;
  }



  
  const App:React.FC = () => {
    return (
    <div className="App">
     <span className="heading">ToDo</span>
     
    </div>
  );
}

export default App;
