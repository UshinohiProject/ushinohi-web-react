import React from 'react';
import './Chiko.css';
import Reasons from './json/chiko-reason.json'
import LineLogo from './img/chiko/LINE_Brand_icon.png'

const reason_tot_num = 23;

class Chiko extends React.Component {
    constructor(props) {
      super(props);
      this.state = { reason: "寝坊", genre: "", text_friend: "", level: 0};
    }
    render() {
        return (
            <div>
                {/* <h2>遅刻Generator</h2> */}
                <p className='late-title'>遅刻の理由</p>
                <p className='late-reason'>{this.state.reason}</p>
                <p className='late-genre'>{this.state.genre}</p>
                <p className='late-level'>
                    深刻度: <span class="star5_rating" data-rate={this.state.level}></span>
                </p>
                <button onClick={this.generateReason}>遅刻した理由を作る</button>
                <br/>
                <a href={'https://line.me/R/share?text='+this.state.text_friend} target="_blank" rel="noopener noreferrer">
                    <img className="share-line" src={LineLogo} alt="send with LINE"></img>
                </a>
            </div>
        );
    }

    generateReason = () => {
        const reason_num = Math.floor(Math.random() * reason_tot_num);
        this.setState({ reason: Reasons.reasons[reason_num].reason,
            genre: Reasons.reasons[reason_num].genre,
            text_friend: Reasons.reasons[reason_num].text_friend,
            level: Reasons.reasons[reason_num].level
        });
      };
}

export default Chiko