import React from 'react'
import QuizSection from './QuizSection'
import ResultComputed from './Result'
import QuizDetail from './../../QuizDetail'

const renderResultComputed = props => (
  <ResultComputed
    collectedAnswers={props.collectedAnswers}
    quizId={props.quizId}
    resultAnswersMap={props.resultAnswersMap}
  />
)

export default props => {
  const { resultAnswersMap } = props
  const quizSection = props => (
    <QuizSection {...props} {...{ resultAnswersMap, renderResultComputed }} />
  )

  return <QuizDetail {...props}>{quizSection}</QuizDetail>
}
