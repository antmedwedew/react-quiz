import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

class QuizName extends Component {

  state = {
    formControls: {
      text: {
        value: '',
        type: 'text',
        label: 'Введите название теста',
        errorMessage: 'Введите название теста!',
        valid: false,
        touched: false,
        validation: {
          required: true,
        }
      },
    }
  }

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    return isValid
  }

  submitHandler = event=> {
    event.preventDefault()
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, 
      isFormValid,
      value: control.value
    })

  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index)=> {
      const control = this.state.formControls[controlName]
      return (
        <Input 
          key={controlName + index}
          type={control.type}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  // addNameHandler() {
  //   const name = this.state.formControls.text.value

  //   console.log(name)
  // }

  render() {
    return (
      <div>
          <form onSubmit={this.submitHandler}>
            
            { this.renderInputs() }

            <Button 
              type="success" 
              onClick={this.addNameHandler} //this.addNameHandler.bind(this)
              disabled={!this.state.isFormValid}
            > 
              Далее
            </Button>
          </form>
      </div>
    )
  }

}

export default QuizName