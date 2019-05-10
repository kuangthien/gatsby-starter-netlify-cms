import React, { Component } from 'react'
import Quiz from '../Quiz'
import axios from 'axios'

import ResultComputed from './Result'

let API = process.env.REACT_APP_API_URL

class QuizSection extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      wannaResult: false,
      questionImage: null,
      collectedAnswers: [],
      quizImage: '',
      quizTitle: '',
      quizQuestions: [],
      ...this.props,
    }
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    const { quizQuestions } = this.state

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      feedback: quizQuestions[counter].feedback,
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
    if (this.state.questionId < this.state.quizQuestions.length) {
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
      <React.Fragment>
        <div
          className="quiz-header fz-22 p-3 pb-5 text-right text-lowercase  "
          style={{
            backgroundImage: `url(${this.state.quizImage})`,
          }}
        >
          <span className="text p-2   mb-2 text-light">
            {this.state.quizTitle}
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
      </React.Fragment>
    )
  }

  render() {
    let render
    if (this.state.wannaResult) {
      render = (
        <ResultComputed
          collectedAnswers={this.state.collectedAnswers}
          quizId={this.props.quizId}
          resultAnswersMap={this.state.resultAnswersMap}
        />
      )
    } else {
      render = this.renderQuiz()
    }
    return <div className="px-3 px-sm-0">{render}</div>
  }
}

export default QuizSection
