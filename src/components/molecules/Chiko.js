import React from 'react';
import './Chiko.css';
import Reasons from './json/chiko-reason.json'

const reason_tot_num = 11;

class Chiko extends React.Component {
    constructor(props) {
      super(props);
      this.state = { reason: "寝坊" };
    }
    render() {
        return (
            <div>
                <h2>遅刻Generator</h2>
                <p>遅刻の理由:{this.state.reason}</p>
                <button onClick={this.generateReason}>遅刻した理由を作る</button>
            </div>
        );
    }

    generateReason = () => {
        this.setState({ reason: Reasons.reasons[Math.floor(Math.random() * reason_tot_num)].reason });
      };
}

export default Chiko