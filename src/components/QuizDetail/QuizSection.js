import React, { Component } from 'react'
import Quiz from './Quiz'
import Result from './Result'

let API = 'https://ahaquiz-cms.netlify.com/.netlify/functions/'

class QuizSection extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCorrectCount: 0,
      result: '',
      feedback: null,
      questionImage: null,
      wannaResult: false,
      ...this.props,
    }

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value)
  }

  checkIsCorrectAnswer = () => {
    const { answer, answerOptions } = this.state
    const arrC =
      answerOptions.filter(obj => {
        return obj.content === answer && obj['is-correct']
      }) || []
    return arrC.length > 0
  }

  setUserAnswer(answer) {
    this.setState(
      {
        answer: answer,
      },
      () => {
        const { answersCorrectCount } = this.state
        this.checkIsCorrectAnswer() &&
          this.setState({
            answersCorrectCount: answersCorrectCount + 1,
          })
      }
    )
  }

  setNextQuestion() {
    const { quizQuestions, questionId, counter } = this.state
    this.setState({
      counter: counter + 1,
      questionId: questionId + 1,
      question: quizQuestions[counter].question,
      feedback: quizQuestions[counter].feedback,
      questionImage: quizQuestions[counter].image,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    })
  }

  move = () => {
    const { answersCorrectCount, quizQuestions } = this.state

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300)
    } else {
      setTimeout(
        () =>
          this.setState({
            wannaResult: true,
          }),
        300
      )
    }
  }
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.questionContent}
        feedback={this.state.feedback}
        questionImage={this.state.questionImage}
        questionTotal={this.state.quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        buttonAction={this.move}
        hasCorrectAnswer={this.state.answer && this.checkIsCorrectAnswer()}
      />
    )
  }

  render() {
    let render
    const { wannaResult, answersCorrectCount } = this.state
    const { quizImage, quizTitle, quizQuestions } = this.props
    if (wannaResult) {
      render = (
        <Result
          {...{
            answersCorrectCount,
            quizQuestions,
            quizImage,
            quizTitle,
          }}
        />
      )
    } else {
      render = this.renderQuiz()
    }
    return <div>{render}</div>
  }
}

export default QuizSection
