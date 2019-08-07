import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'
import {Link} from "react-router-dom";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = props.results[quizItem.id] !== 'error';

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <FontAwesomeIcon icon={cls ? faCheck : faTimes}
                                             className={cls ? classes.success : classes.error}/>
                        </li>
                    )
                })}
            </ul>

            <p>Вірні {successCount} з {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary'>Повторити</Button>
                <Link to={'/quiz'}>
                    <Button type='success'>Перейти в список тестів</Button>
                </Link>
            </div>
        </div>
    )
};

export default FinishedQuiz
