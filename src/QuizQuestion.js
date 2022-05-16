import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  
  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler()
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
    </main>
  }
}

export default QuizQuestion