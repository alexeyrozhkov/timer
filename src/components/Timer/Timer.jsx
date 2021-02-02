import './Timer.css';
import {Scoreboard} from '../Scoreboard/Scoreboard.jsx';
import {FunctionalButtons} from '../FunctionalButtons/FunctionalButtons.jsx';
import {List} from '../List/List.jsx';
import React from "react";

const defaultValue = 0;
const secondsInMinute = 60;
let timer;

export class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            minutes: 0,
            results: [] // { seconds: number; minutes: number;}
        }
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.drop = this.drop.bind(this);
        this.addResult = this.addResult.bind(this);
    }
    start() {
        if (timer) {
            return;
        }
        timer = setInterval(() => {
            const updatedSeconds =  this.state.seconds + 1;
            this.setState({seconds: updatedSeconds % secondsInMinute})
            if(!(updatedSeconds % secondsInMinute)) {
                this.setState({minutes: this.state.minutes + 1})
            }
        }, 1000);
       
    }
    stop() {
        clearInterval(timer);
        timer = undefined;
    }
    drop() {
        clearInterval(timer);
        timer = undefined;
        this.setState({minutes:defaultValue, seconds: defaultValue, results: []})
    }
    addResult() {
        const currentResult = {
            minutes: this.state.minutes,
            seconds: this.state.seconds
        };

        const resultsCopy = [...this.state.results];
        resultsCopy.push(currentResult);
        this.setState({ results: resultsCopy });
    }
    render() {
        return (
            <div className='timer'>
                <Scoreboard seconds={this.state.seconds} minutes={this.state.minutes}/>
                <FunctionalButtons start={this.start} stop={this.stop} drop={this.drop} circle={this.addResult}/>
                <List circles ={this.state.results}/>
            </div>
        )
    }
}