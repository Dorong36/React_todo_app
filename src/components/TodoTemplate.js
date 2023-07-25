import './TodoTemplate.scss';
import React, { Children } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = ({children}) => {
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>Todo List</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;