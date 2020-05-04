import React, {Component} from 'react'
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state= {
    quiz: [
      {
        answers: [
          {text: 'Пример ответа 1'},
          {text: 'Пример ответа 2'},
          {text: 'Пример ответа 3'},
          {text: 'Пример ответа 4'}
        ]
      }
    ]
  }

  render() {

    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Пройдите тест</h1>
          <ActiveQuiz 
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz