import React, { Component } from "react";
import Quiz from "./../Quiz";
import Result from "./Result";
 
 
class QuizSection extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            counter: 0,
            questionId: 1,
            question: "",
            answerOptions: [],
            answer: "",
            answersCorrectCount: 0,
            result: "",
            feedback: null,
            questionImage: null,
            wannaResult: false,
         };
         

         this.state.question =    this.props.quizQuestions[0].content;
         this.state.answerOptions = this.props.quizQuestions[0].answers;
         this.state.feedback = this.props.quizQuestions[0].feedback;
         this.state.questionImage =  this.props.quizQuestions[0].image

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
    }

    checkIsCorrectAnswer = () => {
        const { answer, answerOptions } = this.state;
        const arrC =
            answerOptions.filter(obj => {
                return obj.content === answer && obj["is-correct"];
            }) || [];
        return arrC.length > 0;
    };

    setUserAnswer(answer) {
        this.setState(
            {
                answer: answer
            },
            () => {
                const { answersCorrectCount } = this.state;
                this.checkIsCorrectAnswer() &&
                    this.setState({
                        answersCorrectCount: answersCorrectCount + 1
                    });
            }
        );
    }

    setNextQuestion() {
        const {  questionId, counter } = this.state;
         const nextQuestion = this.props.quizQuestions[counter + 1];
        this.setState({
            counter: counter + 1,
            questionId: questionId + 1,
            question: nextQuestion.content,
            feedback:nextQuestion.feedback,
            questionImage: nextQuestion.image,
            answerOptions: nextQuestion.answers,
            answer: ""
        });
    }

    move = () => {
        const { answersCorrectCount } = this.state;
        const {quizQuestions} = this.props;

        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(
                () =>
                    this.setState({
                        wannaResult: true
                    }),
                300
            );
        }
    };
    renderQuiz() {
      const {quizQuestions} = this.props;
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                feedback={this.state.feedback}
                questionImage={this.state.questionImage}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
                buttonAction={this.move}
                hasCorrectAnswer={this.state.answer && this.checkIsCorrectAnswer()}
            />
        );
    }

    render() {
        let render;
        const { wannaResult, answersCorrectCount } = this.state;
        const { quizImage, quizTitle, quizQuestions } = this.props;
        if (wannaResult) {
            render = (
                <Result
                    {...{
                        answersCorrectCount,
                        quizQuestions,
                        quizImage,
                        quizTitle
                    }}
                />
            );
        } else {
            render = this.renderQuiz();
        }
        return <div>{render}</div>;
    }
}
 
export default QuizSection;
