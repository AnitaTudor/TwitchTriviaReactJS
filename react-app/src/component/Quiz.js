import React, { Component } from 'react';
import Question from "./Question"
import Answer from './Answer';
import "../style/Quiz.css"
import { Link } from 'react-router-dom';
export default class Quiz extends Component {


    state = {
        questions: {
            1: 'Who is the most watched streamer on Twitch?',
            2: 'Who is the streamer with the most followers on Twitch?',
            3: 'Who has the highest view-count record during a livestream on Twitch?',
            4: 'What is the category with the record of most viewers on twitch?',
            5: 'What is the most used Twitch emote?',
            6: 'What is the most used BTTV emote?',
            7: 'What is the most used Twitch emote in xQcOW chat?'
        },
        answers: {
            1: {
                1: 'Auronplay',
                2: 'xQcOW',
                3: 'Ibai'
            },
            2: {
                1: 'Shroud',
                2: 'xQcOW',
                3: 'Ninja'
            },
            3: {
                1: 'TheGrefg',
                2: 'Ibai',
                3: 'Riot Games'
            },
            4:{
                1:'League of Legends',
                2: 'Special Events',
                3: 'Just Chatting'
            },
            5:{
                1:'forsen5G',
                2:'TriHard',
                3: 'LUL'
            },
            6:{
                1:'flushE',
                2:'DuckerZ',
                3:'NaM'
            },
            7:{
                1:'xqcL',
                2:'TriHard',
                3:'Kappa'

            }

        },
        correctAnswers: {
            1: '2',
            2: '3',
            3: '1',
            4: '1',
            5: '1',
            6: '1',
            7: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });

        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }
    nextStep = step => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }
    render() {
        let { questions, step, answers, correctAnswer, clickedAnswer, score } = this.state;
        return (
            <div className='Content'>
                {step <= Object.keys(questions).length ?
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answers={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />

                        <button
                            className='NextStep'
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true
                            }
                            onClick={() => this.nextStep(step)}>
                            Next
                        </button>
                    </>) : (
                        <div className='finalPage'>
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is : {score} of {Object.keys(questions).length}</p>
                            <Link to='/ ' className="btn btn-primary w-50 mt-3 button-color">
                            Go Back To Dashboard
                            </Link>
                        </div>
                        

                    )}

            </div>

        );

    }
}
