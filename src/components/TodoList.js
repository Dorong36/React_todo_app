import React, { useCallback } from 'react';
import './TodoList.scss'
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized/dist/commonjs/List';

const TodoList = ({todos, onRemove, onToggle}) => {

    // react-virtualized 사용한 최적화
    // 화면에 보이지 않는 리스트 요소 컴포넌트 렌더링 안하다가 내리면 보여주기
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoListItem 
                    todo = {todo}
                    key = {key}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                    style = {style}
                />
            );
        }
    , [onRemove, onToggle, todos])

    return (
        <List
            className = "TodoList"
            width = {512} // 전체 크기
            height = {513} // 전체 높이
            rowCount = {todos.length} // 항목 개수
            rowHeight = {57} // 항목 높이
            rowRenderer = {rowRenderer} // 항목을 렌더링할 때 쓰는 함수
            list = {todos} // 배열
            style = {{outline : 'none'}} // List에 기본 적용되는 Outline 스타일 제거
        />
        // <div className='TodoList'>
        //     {
        //         todos.map(todo=>(
        //             <TodoListItem 
        //                 todo={todo} 
        //                 key={todo.id} 
        //                 onRemove={onRemove}
        //                 onToggle = {onToggle}
        //             />
        //         ))
        //     }
        // </div>
    );
};

export default React.memo(TodoList);