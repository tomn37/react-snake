import React from 'react';
import bulldozer from '../../../../Assets/bulldozer.jpg';

interface ScoreProps {
    foodEaten: number;
    badFoodEaten: number;
    score: number;
}
export default function Score(props: ScoreProps) {
    const {foodEaten, badFoodEaten, score } = props;
    return <div className="score-container">
        <div className="score">
            {score}
        </div>
        <div className="score">
            <span>{foodEaten}</span>
            <span aria-label="counter" role="img">🍕</span>
        </div>
        <div className="score">
            <span>{badFoodEaten}</span>
            <img alt="bulldozer-logo" src={bulldozer} />
        </div>
    </div>
}