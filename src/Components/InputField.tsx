import * as React from 'react';
import {useRef} from 'react';
import './styles.css'
type InputFieldProps= {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent<HTMLFormElement>)=> void;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return(
    <form className='input' onSubmit={(e)=>{handleAdd(e)
    inputRef.current?.blur()}
    } >
        <input type='input' placeholder='Enter a task' ref ={inputRef}  className='input_box' value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className='input_submit' type='submit' >Go</button>
    </form>
  ) ;
};

export default InputField;
