import './Scoreboard.css';
import React from 'react';

export function Scoreboard(props){
    return (
        <div className='scoreboard'>
            <div className='time'>{props.minutes < 10 ? `0${props.minutes}` : props.minutes}</div>
            <div className='time'>:</div>
            <div className='time'>{props.seconds < 10 ? `0${props.seconds}` : props.seconds}</div>
        </div>
    )
}  
