import React from 'react'
import './styles.scss'
import QuizDetailFeedbackComputed from './FeedbackComputed'
import QuizDetailFeedbackInstant from './FeedbackInstant'

export { QuizDetailFeedbackComputed, QuizDetailFeedbackInstant }

class QuizDetail extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return this.props.quizQuestions ? this.props.children(this.props) : null
  }
}

export default QuizDetail
