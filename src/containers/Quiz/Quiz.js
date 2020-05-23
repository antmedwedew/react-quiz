import React, {Component} from 'react'
import classes from './Quiz.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

  state= {
    results: {},
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        isFinished: false,
        question: 'Пример вопроса 1',
        rightAnswerId: 2,
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

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }
    
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {

      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeOut = window.setTimeout(()=> {

        if (this.isQuizEnd()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState ({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeOut)
      }, 500)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results,
      })
    }

  }

  isQuizEnd() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = ()=> {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>

        <div className={classes.QuizWrapper}>
            {!this.state.isFinished ? <h1>Пройдите тест</h1> : <h1>Результат:</h1>}

          {
            this.state.isFinished
            ? <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.retryHandler}
              />
            : <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

export default Quiz