import React from 'react'
import './styles.scss'
function setResults(props) {
  let d = null
  const { quizQuestions, answersCorrectCount } = props
  let grade = ((answersCorrectCount / quizQuestions.length) * 10).toFixed(1)
  switch (true) {
    case grade > 7.5: {
      d = 'Xức sắc'
      break
    }
    case grade > 5.5: {
      d = 'Tốt'
      break
    }
    case grade > 3.5: {
      d = 'Tạm chấp nhận'
      break
    }
    default: {
      d = '... à mà thôi'
    }
  }
  return {
    grade: `${grade * 10}%`,
    title: d,
    desc: '',
  }
}

function Result(props) {
  const { quizTitle, quizImage } = props
  const shareLink = encodeURI(window.location.href)
  return (
    <div className="bg-dark text-white p-3 text-center ">
      <span className="fz-md-32">{quizTitle}</span>
      <hr style={{ borderTopColor: '#ccc' }} />
      <img src={quizImage} height="150" width="250" alt="" id="IMG_6" />
      <br />
      <span className="fz-md-46">
        Điểm của bạn là <span id="">{setResults(props).grade}</span>
      </span>
      <br />
      <p className="mt-3">
        <span className="fz-md-27">
          {' '}
          Kiến thức ở mức {setResults(props).title}
        </span>
        <br />
        <span className="fz-md-18"> {setResults(props).desc}</span>
      </p>
      <iframe
        src={`https://www.facebook.com/plugins/share_button.php?href=${shareLink}&layout=button&size=large&mobile_iframe=false&appId=371135233464563&width=73&height=28`}
        width="73"
        height="28"
        style={{ border: 0, overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  )
}

export default Result
