import './Timer.css';
import {Scoreboard} from '../Scoreboard/Scoreboard.jsx';
import {FunctionalButtons} from '../FunctionalButtons/FunctionalButtons.jsx';
import React from "react";

const defaultValue = 0;
let timer;

export class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            minutes: 0
        }
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.drop = this.drop.bind(this);
    }
    start() {
        if (timer) {
            return;
        }
        timer = setInterval(() => {
            this.setState({seconds: this.state.seconds + 1})
            if(this.state.seconds === 60) {
                this.setState({minutes: this.state.minutes + 1, seconds: defaultValue})
            }
        },1000);
       
    }
    stop() {
        clearInterval(timer);
        timer = undefined;
    }
    drop() {
        clearInterval(timer);
        timer = undefined;
        this.setState({minutes:defaultValue, seconds: defaultValue})
    }

    render() {
        return (
            <div className='timer'>
                <Scoreboard seconds={this.state.seconds} minutes={this.state.minutes}/>
                <FunctionalButtons start={this.start} stop={this.stop} drop={this.drop}/>
            </div>
        )
    }
}