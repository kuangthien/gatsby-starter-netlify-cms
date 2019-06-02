import React from 'react'
import QuizItem from './QuizItem'
import PropTypes from 'prop-types'

import './styles.scss'
const QuizList = props => {
  const { quizzes } = props
  return (
    <div className=" ">
      <div className=" ">
        {quizzes &&
          quizzes.map(quizPost => (
            <div className=" " key={quizPost.id}>
              <article className="  ">
                <QuizItem
                  {...{
                    id: quizPost.id,
                    title: quizPost.title,
                    desc: quizPost.desc,
                    image: quizPost.image,
                    navTo: quizPost.renderLink,
                  }}
                  key={quizPost.id}
                />
              </article>
            </div>
          ))}
      </div>
    </div>
  )
}
QuizList.propTypes = {
  quizzes: PropTypes.array,
}
export default QuizList
