import * as React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

type ISingletodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Singletodo: React.FunctionComponent<ISingletodoProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

const handleEdit = (e:React.FormEvent,id:number)=>{
    e.preventDefault()
    setTodos(todos.map((todo)=>(
        todo.id === id? {...todo, todo:editTodo}:todo
    )))
setEdit(false)
}


const inputRef = React.useRef<HTMLInputElement>(null)

React.useEffect(()=>{
    inputRef.current?.focus()
},[edit])

  return (
    <form className="todos__single" onSubmit={(e)=> handleEdit(e, todo.id)} >
      {edit ? (
        <input
        ref={inputRef}
        value={editTodo}
        onChange={(e)=>setEditTodo(e.target.value)}
        className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
           
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
           
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineFileDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default Singletodo;
