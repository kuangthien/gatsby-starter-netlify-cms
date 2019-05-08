import React from 'react';

function Question(props) {
	//{props.total}
	return (
		<div>
			<h2 className=' col-12 h6  py-4  font-weight-bold'>
				Câu <span>{props.counter}</span>
				<span>: </span>
				{props.content}
			</h2>
		</div>
	);
}

export default Question;
