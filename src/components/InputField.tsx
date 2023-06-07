import React, {useRef} from 'react'
import "./styles.css";
//auto imported after making component file using "rafc" at top of file

interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}

const InputField = ({handleAdd, todo, setTodo}: Props) => {

   // const InputField: React.FC<Props> = ({todo, setTodo})
   // can define the props either way

   console.log("TODO", todo)
   const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form  className="input" onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur();
      }}>
        <input 
        ref={inputRef}
        type="input" 
        placeholder='Enter Task Here' 
        className='input_box'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)} />
        <button className="input_submit" type="submit">Add</button>
    </form>
  )
}

export default InputField
