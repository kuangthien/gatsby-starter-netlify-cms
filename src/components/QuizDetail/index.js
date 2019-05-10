import React, { Component } from 'react'

import './styles.scss'

class QuizDetail extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = { quizQuestions: {} }
  }

  componentDidMount() {
    const { quizQuestions, quizImage, quizTitle, resultAnswersMap } = this.props
    const shuffledAnswerOptions = quizQuestions.map(
      question => question.answers
    )

    //   this.setState({
    //     quizType: "feedback-computed",
    //     question: quizQuestions[0].question,
    //     answerOptions: shuffledAnswerOptions[0],
    //     questionImage: quizQuestions[0].image,
    //     quizImage,
    //     quizTitle,
    //     resultAnswersMap,
    //     quizQuestions
    // });
    this.setState({
      quizType: 'feedback-instant',
      questionContent: quizQuestions[0].content,
      answerOptions: shuffledAnswerOptions[0],
      questionImage: quizQuestions[0].image,
      quizImage,
      quizTitle,
      quizQuestions,
    })
  }

  render() {
    return this.state.quizQuestions.length
      ? this.props.renderQuizSection(this.state)
      : null
  }
}

export default QuizDetail
