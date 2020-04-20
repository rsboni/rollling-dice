import React, { Component } from 'react'
import "./Die.css"

export default class Die extends Component {
    render() {
        const textNum = ["one", "two", "three", "four", "five", "six"];
        const faString =`fas fa-dice-${textNum[this.props.num]}`;
        const roll = " rolling";
        return (
            <div className="Die">
                {this.props.rolling
                ? <i className={faString+roll} />
                : <i className={faString} />
                }
            </div>
        )
    }
}
