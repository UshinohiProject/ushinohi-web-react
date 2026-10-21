import React from 'react';
import './Top.css';
import UshinohiLogoAll from './img/logo_back.jpg'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="top-logo anim-box zoomin is-animated">
                    <img
                        src={UshinohiLogoAll}
                        alt="Full logo of Ushinohi Project"
                    ></img>
                </div>
                <div className="top-message">
                    <h2>私たちについて</h2>
                    <p>「火星にロボットを送り込み、書き初めをしたい」と言う野望から始まったプロジェクト。</p>
                    <p>世界の巨大IT企業が集結するシリコンバレーと日本の電気街でもある秋葉原との国境をまたいだプロジェクトです。</p>
                    <p>画期的でアイディア満載な私たちがモノづくりの楽しさや、大変さ、そして喜びなどをYouTubeなどを通して皆様に配信していきます。</p>
                </div>
            </div>
        );
    }
}

export default Header