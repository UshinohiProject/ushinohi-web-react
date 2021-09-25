import React from 'react';
import './DigitalHackDay2021.css';

import Kenko from './img/projects/kenko_big.jpg'

class DigitalHackDay2021 extends React.Component {
    render() {
        return (
            <div className="project-detail-main">
                <h2 className="heading-project-detail-title" data-en="Kenko">けんこちゃん</h2>
                <div class="project-detail">
                	<img class="project-detail-top-pic" src={Kenko} alt="Kenko-chan."></img>
                    <h2 className="description">Digital HackDay 2021 発表作品</h2>
                    <p className="description">2021年9月26日13時頃の発表に向け、鋭意製作中。</p>
                    <p className="description">発表とページの更新を乞うご期待。</p>

                </div>
            </div>
        );
    }
}

export default DigitalHackDay2021