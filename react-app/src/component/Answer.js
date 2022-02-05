import React from 'react';
import "../style/Answer.css"
function Answer(props) {
    
    let answers = Object.keys(props.answers)
        .map((qAnswer, i) => (

            <li
            className={
                props.correctAnswer === qAnswer ?
                "correct":
                props.clickedAnswer === qAnswer ?
                "incorrect": ""
            }
            onClick={()=> props.checkAnswer(qAnswer)}
             key={qAnswer}>
                {props.answers[qAnswer]}
            </li>
        ));

    return <div>
        <ul disabled ={props.clickedAnswer ? true : false} className='Answers'>
                {answers}
        </ul>
        <div>
            {
                props.correctAnswer ?
                "Correct answer" :
                props.clickedAnswer ?
                "Incorrect answer" : ""
            }
        </div>
    </div>;
}
export default Answer