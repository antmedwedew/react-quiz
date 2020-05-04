import React from 'react'
import classes from './ActiveQuiz.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>2.</strong>
        &nbsp;
        Это пример вопроса
      </span>

      <small>4 из 12</small>
    </p>
    
    <AnswersList 
      answers={props.answers}
    />
    
  </div>
)

export default ActiveQuiz