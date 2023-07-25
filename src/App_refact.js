import { useCallback, useRef, useState, useReducer } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


function createBulkTodos() {
  const array = [];
  for(let i = 0; i < 2500; i++){
    array.push({
      id : i,
      text : `todo ${i}`,
      checked : false
    })
  }
  return array
}

function todoReducer(todos, action){
    switch(action.type) {
        case 'INSERT' : 
            return todos.concat(action.todo);
        case 'REMOVE' : 
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' : 
            return todos.map(todo => 
                todo.id === action.id ? {...todo, checked : !todo.checked} : todo    
            );
        default : 
            return todos;
    }
}

function App() {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef(2501)

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      }
      dispatch({type : 'INSERT', todo});
      nextId.current += 1; // nextId 1씩 늘리기
    }
  , [])

  const onRemove = useCallback(
    (id)=>{
      dispatch({type : 'REMOVE', id})
  }, [])

  const onToggle = useCallback(
    id => {
      dispatch({type : 'TOGGLE', id})
    }
  , [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos = {todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
}

export default App;
