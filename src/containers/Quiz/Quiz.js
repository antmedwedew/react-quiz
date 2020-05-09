import React, {Component} from 'react'
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state= {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: 'Пример вопроса 1',
        rightAnswerId: 4,
        answers: [
          {text: 'Пример ответа 1', id: 1},
          {text: 'Пример ответа 2', id: 2},
          {text: 'Пример ответа 3', id: 3},
          {text: 'Пример ответа 4', id: 4}
        ]
      },
      {
        id: 2,
        question: 'Пример вопроса 2',
        rightAnswerId: 1,
        answers: [
          {text: 'Пример ответа 1', id: 1},
          {text: 'Пример ответа 2', id: 2},
          {text: 'Пример ответа 3', id: 3},
          {text: 'Пример ответа 4', id: 4}
        ]
      }
    ]
  }
  
  onAnswerClickHandler = answerId => {

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeOut = window.setTimeout(()=> {

        if (this.isQuizEnd()) {
          console.log('finished')
        } else {
          this.setState ({
            activeQuestion: this.state.activeQuestion + 1, 
            answerState: null
          })
        }

        window.clearTimeout(timeOut)
      }, 500)
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }

  }

  isQuizEnd() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {

    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
          <h1>Пройдите тест</h1>
          <ActiveQuiz 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz