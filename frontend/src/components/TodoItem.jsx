import React from 'react'
import "./TodoItem.css"
const TodoItem = ({todo,onDelete}) => {
  const { id, content, date, isCompleted } = todo;
  return (
    <div className='TodoItem isCompleted'>
        <input type="checkbox" readOnly/>
        <div className="content">{todo.text}</div>
        <div className="date">{new Date(`${todo.date}`).toLocaleDateString() }</div>
        <div className="btn-wrap">
            <button className="updateBtn">수정</button>
            <button className="deleteBtn" onClick={()=>onDelete(todo._id)}>삭제</button>
        </div>
    </div>
  )
}

export default TodoItem