import React from 'react'
import AnswerOption from '../AnswerOption'
import PreviewCompatibleImage from '../PreviewCompatibleImage';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        isCorrect={key['is-correct']}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    )
  }
  const renderAnswerResult = () => {
    return (
      <div
        className={`correctness-tab ${
          props.hasCorrectAnswer ? 'correct' : 'incorrect'
        }`}
      >
        {props.hasCorrectAnswer ? 'Đúng rồi' : 'Sai rồi'}!
        <i class="fas fa-angle-down" />
      </div>
    )
  }
  return (
    <div key={props.questionId} className="  rounded bg-white   mb-5 ">
      <div
        className={`q-img-fb position-relative ${
          !props.buttonAction ? 'd-none' : ''
        }`}
        style={{
          backgroundImage: `url(${props.questionImage})`,
        }}
      >

 
      <PreviewCompatibleImage
                        imageInfo={{
                          image: props.questionImage,
                       
                        }}
                      />
        {props.feedback && props.answer && (
          <div>
            <button
              className="btn-move d-none d-md-block"
              onClick={props.buttonAction}
            >
              {props.questionId < props.questionTotal
                ? 'Tiếp tục'
                : 'Xem kết quả'}
              <i className="ml-2 fas fa-arrow-right" />
            </button>
            <div className="content text-white position-absolute   ">
              <div className="  ">{renderAnswerResult()}</div>
              <div className="fb p-3  ">
                {props.feedback}
                {props.buttonAction && (
                  <div className="text-right mt-3 d-md-none">
                    <button
                      style={{ borderRadius: '5000px' }}
                      className="btn-info     border-0  position-relative btn-lg px-4"
                      onClick={props.buttonAction}
                    >
                      {props.questionId < props.questionTotal
                        ? 'Tiếp tục'
                        : 'Xem kết quả'}
                      <i className="ml-2 fas fa-arrow-right" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <h2 className=" col-12 h6  py-4  font-weight-bold">
        Câu <span>{props.questionId}</span>
        <span>: </span>
        {props.question}
      </h2>

      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  )
}

export default Quiz
