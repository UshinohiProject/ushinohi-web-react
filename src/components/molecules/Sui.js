import React from 'react';
import { withRouter } from 'react-router-dom';

import './Sui.css';

class Sui extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleClick() {
        this.props.history.push({
            pathname: "/Suied",
            state: { text: this.state.text }
        });
    }

    render() {
        return (
            <div className='sui-center'>
                <p>何で喧嘩しちゃったの？</p>
                <br />
                <input type='text' value={this.state.text} onChange={this.handleChange}></input>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}>水に流す</button>
            </div>
        );
    }
}

export default withRouter(Sui)