import React from 'react'

const QuizItem = props => {
  const { id, title, desc, image, slug, navTo } = props
  const NavTo = props => navTo(props)

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

      <NavTo
        className="position-absolute"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  )
}

export default QuizItem
