import React from 'react';
import './Chiko.css';
import Reasons from './json/chiko-reason.json'

const reason_tot_num = 11;

class Chiko extends React.Component {
    constructor(props) {
      super(props);
      this.state = { reason: "寝坊", genre: ""};
    }
    render() {
        return (
            <div>
                {/* <h2>遅刻Generator</h2> */}
                <p className='late-title'>遅刻の理由</p>
                <p className='late-reason'>{this.state.reason}</p>
                <p className='late-genre'>{this.state.genre}</p>
                <button onClick={this.generateReason}>遅刻した理由を作る</button>
            </div>
        );
    }

    generateReason = () => {
        const reason_num = Math.floor(Math.random() * reason_tot_num);
        this.setState({ reason: Reasons.reasons[reason_num].reason,
            genre: Reasons.reasons[reason_num].genre
        });
      };
}

export default Chiko