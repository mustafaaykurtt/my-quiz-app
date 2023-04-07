import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown.jsx';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
  const TOTAL_QUESTIONS = 10;
  const diffuculty = ["easy", "medium", "hard"];
  const [changeDiffuculty, setChangeDiffuculty] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    changeDiffuculty != "" ? navigate(`/quiz/${changeDiffuculty}/${TOTAL_QUESTIONS}`) : navigate("/")
  }

  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg" alt="" />
        <Dropdown data={diffuculty} setChangeDiffuculty={setChangeDiffuculty} />
        <div onClick={startQuiz} className='indroduce-btn'>Start Quiz</div>
      </div>
    </div>
  )
}

export default Introduce