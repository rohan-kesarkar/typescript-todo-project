import * as React from 'react';
import {Todo} from '../model' 
import Singletodo from './SingleTodo';

type ITodoListProps= {
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({todos,setTodos}) => {
  return(
    <div className='todos' >
    {todos.map(todo=>(
        <Singletodo todo={todo} key={todo.id}
        todos={todos}
        setTodos={setTodos}
        />
    ))}
    </div>
  ) ;
};

export default TodoList;