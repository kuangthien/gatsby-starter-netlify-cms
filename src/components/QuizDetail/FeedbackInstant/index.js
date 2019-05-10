import React from 'react'
import QuizFeedbackInstant from './QuizSection'
import QuizDetail from './../../QuizDetail'

const quizSection = props => <QuizFeedbackInstant {...props} />
export default props => <QuizDetail {...props}>{quizSection}</QuizDetail>
