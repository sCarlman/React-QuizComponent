import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }
  
  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer) {
      this.setState({
        incorrectAnswer: false
      })
      this.props.showNextQuestionHandler()
    } else {
      this.setState({
        incorrectAnswer: true
      })
    }
  }

  render() {

    const answerOptions = this.props.quiz_question.answer_options.map((answer, index) => 
      <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={answer} key={index}/>
    )


    return <main>
      <section>
        <p>{this.props.quiz_question.instruction_text}</p>
      </section>
      <section className="buttons">
        <ul>
          {answerOptions}
        </ul>
      </section>
      {this.state.incorrectAnswer ?
        <p className="error">
          Sorry, that's not right.
        </p>
      : null}
    </main>
  }
}

export default QuizQuestion