import React from 'react';
import './Business.css';

import WebDevelop from './img/business/web_develop.jpg'
import Voice from './img/business/voice.jpg'

class Business extends React.Component {
    render() {
        return (
            <div>
                <h2 className="heading-business" data-en="Business">ビジネス</h2>
                <div class="business_main">
                    <p>丑之日プロジェクトではお仕事も受け付けております！</p>
                    <p>ご連絡は
                        <a href="mailto:info@ushinohi.com" target="_blank" rel="noopener noreferrer" className="link-projects">
                            info@ushinohi.com
                        </a>
                        まで。
                    </p>
                    <div class="business">
                        <div class="business_content_pic">
                            <img class="project_pic project-pic-round" src={WebDevelop} alt="business's thumbnail"></img>
                        </div>

                        <div class="business_content">
                            <p class="business_name">WEB・ECサイト制作</p>
                            <p class="business_description">
                                &nbsp;&nbsp;丑之日プロジェクトでは、静的WEBページやECサイトなど、WEBページの制作を承っております！
                            </p>
                            <p class="business_description">
                                &nbsp;&nbsp;WordPressなどのCMSや、流行りのReactを用いたサクサク動くWEBページ、DjangoやFlaskを用いた高度な機能を持つWEBアプリなどを開発いたします。
                            </p>
                            <p class="business_description">
                                &nbsp;&nbsp;お見積もりをご希望の方はお気軽にご連絡ください！
                            </p>
                            <p class="business_description">
                              丑之日プロジェクトの制作例: 
                                <a href="https://xn--5dkq194t5hezumvk1bov8b.com/" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    モリ不動産鑑定事務所 様
                                </a>
                            </p>  
                        </div>

                    </div>
                    <div class="business">
                        <div class="business_content_pic">
                            <img class="project_pic project-pic-round" src={Voice} alt="business's thumbnail"></img>
                        </div>

                        <div class="business_content">
                            <p class="business_name">ナレーション・声優</p>
                            <p class="business_description">
                                &nbsp;&nbsp;丑之日プロジェクトではAniiによるナレーションやキャラクターボイスの音声収録も承っております！
                            </p>
                            <p class="business_description">
                                &nbsp;&nbsp;収録環境は以下の通りです。<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;AUDIO-TECHNICA AT2035<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Focusrite Scarlett Solo<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Logic Pro<br/>
                            </p>
                            <p class="business_description">
                                &nbsp;&nbsp;お見積もりをご希望の方はお気軽にご連絡ください！
                            </p>
                            <p class="business_description">
                                ボイスサンプルは 
                                <a href="https://youtu.be/SWSVYRJa3sk" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                                からお聴きください。
                            </p>  
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Business