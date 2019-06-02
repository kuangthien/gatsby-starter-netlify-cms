import React, { Component } from 'react'
import Quiz from '../Quiz'

class QuizSection extends Component {
  constructor(props, context) {
    super(props, context)
    const { quizQuestions } = props

    this.state = {
      counter: 0,
      questionId: 1,
      answerOptions: [],
      answer: '',
      wannaResult: false,
      questionImage: null,
      collectedAnswers: [],
      quizQuestions: [],
    }
    this.state.question = this.props.quizQuestions[0].content
    this.state.answerOptions = this.props.quizQuestions[0].answers
    this.state.feedback = this.props.quizQuestions[0].feedback
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    const { quizQuestions } = this.props

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].content,
      questionImage: quizQuestions[counter].image,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    })
  }

  collectAnswers = obj => {
    const callback = obj.next
    const { collectedAnswers, questionId, answerOptions, answer } = this.state
    const answerIndex = (() => {
      let rs = null
      answerOptions.map((v, i) => {
        if (v.content === answer) {
          rs = i
        }
      })
      return rs
    })()
    collectedAnswers.push({
      q: questionId,
      a: answerIndex + 1,
    })
    this.setState(
      {
        collectedAnswers,
      },
      () => setTimeout(callback, 300)
    )
  }

  move = () => {
    const { quizQuestions } = this.props

    if (this.state.questionId < quizQuestions.length) {
      this.collectAnswers({ next: this.setNextQuestion })
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
  handleAnswerSelected = event => {
    this.setState(
      {
        answer: event.currentTarget.value,
      },
      this.move
    )
  }
  renderQuiz() {
    return (
      <>
        <div
          className="quiz-header fz-22 p-3 pb-5 text-right text-lowercase  "
          style={{
            backgroundImage: `url(${this.props.quizImage})`,
          }}
        >
          <span className="text p-2   mb-2 text-light">
            {this.props.quizTitle}
          </span>
        </div>

        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionImage={this.state.questionImage}
          questionTotal={this.state.quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
          buttonAction={null}
        />
      </>
    )
  }

  render() {
    let render
    if (this.state.wannaResult) {
      render = this.props.renderResultComputed({
        ...this.state,
        resultAnswersMap: this.props.resultAnswersMap,
      })
    } else {
      render = this.renderQuiz()
    }
    return <div className="px-3 px-sm-0">{render}</div>
  }
}

export default QuizSection
