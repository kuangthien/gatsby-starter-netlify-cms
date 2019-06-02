import React from 'react'
import QuizFeedbackInstant from './QuizSection'
import QuizDetail from './../../QuizDetail'

const quizSection = props => <QuizFeedbackInstant {...props} />
const QuizDetailFeedbackInstant = props => (
  <QuizDetail {...props}>{quizSection}</QuizDetail>
)
export default QuizDetailFeedbackInstant
