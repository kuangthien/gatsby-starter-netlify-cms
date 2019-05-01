import React from 'react'
import { Link } from 'gatsby'

const QuizItem = props => {
  const { id, title, desc, image, slug } = props

  return (
    <div className=" bg-white border border-left-0 border-right-0 mb-1 mb-md-2       position-relative list-item">
      {image ? (
        <div
          className="position-absolute col-5 "
          style={{
            left: 0,
            top: 0,
            bottom: 0,
            background: 'no-repeat 50%',
            backgroundSize: 'cover',
            backgroundImage: `url(${image})`,
          }}
        />
      ) : null}
      <div className=" p-2 p-sm-3 ct offset-5">
        <h5 className="p-1 h3 m-0  fz-16 fz-sm-22 ">{title}</h5>
        <p className="p-1 d-none d-sm-block txt">{desc}</p>
      </div>

      <Link
        to={slug}
        className="position-absolute  "
        style={{
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
        }}
      />
    </div>
  )
}

export default QuizItem
