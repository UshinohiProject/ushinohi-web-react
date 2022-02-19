import React from 'react';
import './Chiko.css';
import Reasons from './json/chiko-reason.json'
import LineLogo from './img/chiko/LINE_Brand_icon.png'
import TwitterLogo from './img/chiko/Twitter_rounded_square.png'

const reason_tot_num = 23;

class Chiko extends React.Component {
    constructor(props) {
      super(props);
      this.state = { reason: "寝坊", genre: "これじゃ怒られる…", text_friend: "遅刻しそう？「ちこちゃん」で時から解放されよう。", level: 0, display_inline_block : "none", display_block : "none"};
    }
    render() {
        return (
            <div>
                {/* <h2>遅刻Generator</h2> */}
                <p className='late-title'>遅刻の理由</p>
                <p className='late-reason'>{this.state.reason}</p>
                <p className='late-genre'>{this.state.genre}</p>
                <p className='late-level' style={{display: this.state.display_block}}>
                    深刻度: <span class="star5_rating" data-rate={this.state.level}></span>
                </p>
                <div className='late-button'>
                    <a href={'https://line.me/R/share?text='+this.state.text_friend} target="_blank" rel="noopener noreferrer" style={{display: this.state.display_inline_block}}>
                        <img className="share-sns" src={LineLogo} alt="send with LINE"></img>
                    </a>
                    <a href={'http://twitter.com/share?url=ushinohi.com/Chiko&text='+this.state.text_friend+'&via=UshinohiProject&related=UshinohiProject&hashtags=遅刻の理由ジェネレーター'} target="_blank" rel="noopener noreferrer">
                        <img className="share-sns" src={TwitterLogo} alt="share with Twitter"></img>
                    </a><br/>
                    <button onClick={this.generateReason} href="" className="btn btn--red btn--radius btn--cubic">
                        遅刻した理由を作る
                        <i className="fas fa-angle-right fa-position-right"></i>
                    </button>
                </div>
            </div>
        );
    }

    generateReason = () => {
        const reason_num = Math.floor(Math.random() * reason_tot_num);
        this.setState({ reason: Reasons.reasons[reason_num].reason,
            genre: Reasons.reasons[reason_num].genre,
            text_friend: Reasons.reasons[reason_num].text_friend,
            level: Reasons.reasons[reason_num].level,
            display_block: "block",
            display_inline_block: "inline-block"
        });
      };
}

export default Chiko