import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../api/api'
import './Quiz.css'
import QuestionCard from '../../components/questioncard/QuestionCard'
import Modal from '../../components/modal/Modal'

const Quiz = () => {
  const { diffuculty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.axiosQuizData(diffuculty, amount);
      setQuestionsData(data)
    }
    getData();
  }, [])

  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score}/> :
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          amount={amount}
          modal={modal}
          setModal={setModal}
        />
      }
    </div>
  )
}

export default Quiz