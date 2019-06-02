import React from 'react'
import './styles.scss'
import QuizDetailFeedbackComputed from './FeedbackComputed'
import QuizDetailFeedbackInstant from './FeedbackInstant'

export { QuizDetailFeedbackComputed, QuizDetailFeedbackInstant }

export const QuizDetailComposition = props => {
  const { quizType, quizQuestions, quizTitle, quizImage, resultAnswersMap } = props
  return (
    <>
      {quizType === 'feedback-computed' && <QuizDetailFeedbackComputed quizQuestions={quizQuestions} quizTitle={quizTitle} quizImage={quizImage} resultAnswersMap={resultAnswersMap} />}
      {quizType === 'feedback-instant' && <QuizDetailFeedbackInstant quizQuestions={quizQuestions} quizTitle={quizTitle} quizImage={quizImage} />}
    </>
  )
}

class QuizDetail extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return this.props.quizQuestions ? this.props.children(this.props) : null
  }
}

export default QuizDetail
