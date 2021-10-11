import React from 'react';
import './DigitalHackDay2021.css';

import Kenko from './img/projects/kenko_big.jpg';
import Devices from './img/digital_hackday_2021/devices.jpg';
// import Sensors from './img/digital_hackday_2021/sensors.jpg';
// import HowToUse from './img/digital_hackday_2021/how_to_use.jpg';
// import HappyPotato from './img/digital_hackday_2021/happy_potato.jpg';
// import SadPotato from './img/digital_hackday_2021/sad_potato.jpg';
// import MessageFromKenko from './img/digital_hackday_2021/massage_from_kenko.jpg';
// import KenkoWeb from './img/digital_hackday_2021/kenko_web.jpg';

class DigitalHackDay2021 extends React.Component {
    render() {
        return (
            <div className="project-detail-main">
                <h2 className="heading-project-detail-title" data-en="Kenko">けんこちゃん</h2>
                <div class="project-detail">
                	<img class="project-detail-top-pic" src={Kenko} alt="Kenko-chan."></img>
                    <h2 className="heading-project-detail-subtitle">Digital HackDay 2021 発表作品</h2>
                    <div className="project-detail-description">
                        <p>お塩。 </p><p>お味噌やお醤油の醸造にも使い、</p>
                        <p>日本食には欠かせない調味料でありながら、</p>
                        <p>その摂取過多は日本国民が直面する大きな健康問題です。</p>
                        <p>その置き台を「けんこちゃん」がHack。</p>
                        <p>LINEで優しく、ときにはツンデレに</p>
                        <p>塩分の取りすぎを注意してくれます。</p>
                    </div>
                    <h2 className="heading-project-detail-subtitle">けんこちゃんの特徴</h2>
                    <div className="project-detail-description-pic">
                        <img className="project-detail-description-pic" src={Devices} alt="Detail"></img>
                    </div>
                    <div className="project-detail-description">
                        <p>けんこちゃんには調味料のビン２つを搭載可能、</p>
                        <p>スマホ用ポータブルバッテリーで電源供給をし、</p>
                        <p>感圧センサーで調味料の量を測り、</p>
                        <p>WioLTEで検知して計算、</p>
                        <p>データをGASにHTTP Postすると同時に</p>
                        <p>LCDにも表示してくれます。</p>
                    </div>
                    <p className="link-outside">
                        <a href="https://ecstatic-kalam-0d49a5.netlify.app/" target="_blank" rel="noopener noreferrer" className="link-projects">
                            WEBアプリ
                        </a>
                    </p>
                    <p className="link-outside">
                        <a href="https://github.com/kazupong/kenko-chan/tree/master" target="_blank" rel="noopener noreferrer" className="link-projects">
                            フロントエンドのGitHub
                        </a>
                    </p>
                    <p className="link-outside">
                        <a href="https://github.com/UshinohiProject/DigitalHackDay2021-WioLTE" target="_blank" rel="noopener noreferrer" className="link-projects">
                            Wio LTE側のGitHub
                        </a>
                    </p>
                    <p className="link-outside">
                        <a href="https://github.com/UshinohiProject/KenkoAPI" target="_blank" rel="noopener noreferrer" className="link-projects">
                            GAS側のGitHub
                        </a>
                    </p>

                </div>
            </div>
        );
    }
}

export default DigitalHackDay2021