import React, { useCallback, useState } from 'react';
import './TodoInsert.scss'
import {MdAdd} from 'react-icons/md'

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value)
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침 발생시킴
            // 이를 방지하기 위해 이 함수를 호출
            e.preventDefault();
        }
    , [onInsert, value])

    return (
        <div>
            <form className='TodoInsert' onSubmit={onSubmit}>
                <input 
                    placeholder='Insert what you gonna do'
                    onChange={onChange}
                    value={value}
                />
                <button type='submit'><MdAdd/></button>
            </form>
        </div>
    );
};

export default TodoInsert;