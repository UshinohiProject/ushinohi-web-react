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
                    <p className="description">
                        <a href="https://github.com/UshinohiProject/DigitalHackDay2021-WioLTE" target="_blank" rel="noopener noreferrer" className="link-projects">
                            Wio LTE側のGitHub
                        </a>
                    </p>

                </div>
            </div>
        );
    }
}

export default DigitalHackDay2021