import React, { Component } from 'react';
import Die from "./Die";
import "./RollDice.css";


export default class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {isRolling: false, die1: 0, die2: 0};
        this.rollDice = this.rollDice.bind(this);
        this.rollTime = this.rollTime.bind(this)
    }

    rollDice(){
        let rand1 = Math.floor(Math.random()*6);
        let rand2 = Math.floor(Math.random()*6);
        this.setState({die1: rand1, die2: rand2, isRolling: false})
        
    }
    rollTime(){
        this.setState({isRolling: true});
        setTimeout(() => {this.rollDice()}, 800);
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-Dice">
                    <Die num={this.state.die1} rolling={this.state.isRolling}/>
                    <Die num={this.state.die2} rolling={this.state.isRolling}/>
                </div>
                <div>
                    {this.state.isRolling
                        ?<button>Rolling...</button>
                        : <button onClick={this.rollTime} >Roll Dice</button>
                        
                    }
                    
                    </div>
            </div>
        )
    }
}
