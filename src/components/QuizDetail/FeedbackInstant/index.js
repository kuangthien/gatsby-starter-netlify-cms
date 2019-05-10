import React from 'react'
import QuizFeedbackInstant from './QuizSection'

import QuizDetail from './../../QuizDetail'

const QuizDetailFeedbackInstant = props => {
  return (
    <QuizDetail
      {...props}
      renderQuizSection={props => <QuizFeedbackInstant {...props} />}
    />
  )
}

export default QuizDetailFeedbackInstant
