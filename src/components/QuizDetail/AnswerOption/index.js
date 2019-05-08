import React from 'react'
import iconCheck from './icon-check.svg'
import './styles.scss'

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <style>
        {`
			.radioCustomButton:checked ~ .radioCustomLabel:before{
				background-image:url(${iconCheck})
			}
		`}
      </style>
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerContent === props.answer}
        id={props.answerContent}
        value={props.answerContent}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerContent}>
        {props.answerContent}
      </label>
    </li>
  )
}

export default AnswerOption
