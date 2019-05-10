import React from 'react'
import QuizSection from './QuizSection'

import QuizDetail from './../../QuizDetail'

const FeedbackComputed = props => {
  return (
    <QuizDetail
      {...props}
      renderQuizSection={props => <QuizSection {...props} />}
    />
  )
}

export default FeedbackComputed
