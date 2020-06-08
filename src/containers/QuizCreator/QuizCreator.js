import React, { Component } from 'react'
import classes from './QuizCreator.scss'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  }, {required: true})
}

function createFormСontrols() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым!'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

class QuizCreator extends Component {

  state = {
    rightAnswerId: 1,
    quiz: [],
    formControls: createFormСontrols()
  }

  submitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler = ()=> {

  }

  createQuizHandler = ()=> {

  }

  changeHandler = (value, controlName) => {

  }
  
  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index)=> {
      const control = this.state.formControls[controlName]

      return (
        <React.Fragment key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            errorMessage={control.errorMessage}
            valid={control.valid}
            chouldValidatuon={!!control.validation}
            touched={control.touched}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr /> : null }
        </React.Fragment> 
      )
    })
  }

  selectChangeHandler = event => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  }

  render() {

    const select = <Select 
      label="Выберите правильный ответ"
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4}
      ]}
    />

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            
            {this.renderControls()}

            { select }

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>

          </form>

        </div>
      </div>
    );
  }
}

export default QuizCreator;