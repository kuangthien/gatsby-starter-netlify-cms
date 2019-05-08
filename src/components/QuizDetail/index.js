import React, { Component } from 'react'
import QuizFeedbackInstant from './QuizSection'

import './QuizDetail.scss'
import mockData from './mock.json'

class QuizDetail extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = { quizQuestions: {} }
  }

  componentDidMount() {
    const { quizQuestions,quizImage ,quizTitle} = this.props
    const shuffledAnswerOptions = quizQuestions.map(
      question => question.answers
    )

    this.setState({
      quizType: 'feedback-instant',
      questionContent: quizQuestions[0].content,
      answerOptions: shuffledAnswerOptions[0],
      feedback: quizQuestions[0].feedback,
      questionImage: quizQuestions[0].image,
      quizImage,
      quizTitle,
      quizQuestions,
    })
  }

  render() {
    return this.state.quizQuestions.length ? (
      <QuizFeedbackInstant {...this.state} />
    ) : null
  }
}

export default QuizDetail
