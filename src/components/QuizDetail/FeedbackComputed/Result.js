import React, { Component } from "react";
 import axios from "axios";
let API = '/.netlify/functions/';
class Result extends Component {
    constructor(props, ctx) {
        super(props, ctx);
    }
    state = {
        age: null,
        msg: null
    };
    componentDidMount() {
        const { collectedAnswers, quizId, resultAnswersMap } = this.props;
        console.log(this.props)
        axios
            .post(API + "getResult", {
                quizId:1,
                collectedAnswers,
                resultAnswersMap
            })
            .then(result => {
                const { age, msg } = result.data;
                this.setState({ age, msg });
            })
            .catch(error => {});
    }
    render() {
        const { age, msg } = this.state;

        return (
            <React.Fragment>
                <div className="bg-white p-3 text-center">
                    Tuổi tâm hồn của bạn là <br />
                    <b className="fz-22">{age}</b>
                    <p>{msg}</p>
                </div>
            </React.Fragment>
        );
    }
}
 export default Result;
