import React, { useState } from 'react'
import "./TodoEditor.css"
const TodoEditor = ({ onCreate }) => {
  const [text, setText] = useState("")

  const onSubmit = (e)=>{
    e.preventDefault() // 폼 제출 시 새로고침 방지
    if(!text.trim()) return // 빈 문자열은 무시

    onCreate(text.trim())
    setText("") // 입력 후 텍스트 초기화
  }

  return (
    <form className='TodoEditor' onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder='새로운 Todo...' 
      value={text} 
      onChange={(e) => setText(e.target.value)}
      />
      <button type='submit' disabled={!text.trim()}>추가</button>
    </form>
  )
}

export default TodoEditor