import React from 'react';
import { Link } from 'react-router-dom'
import './Business.css';

import MovieEditing from './img/business/movie_ediging.jpg'
import WebDevelop from './img/business/web_develop.jpg'
import Voice from './img/business/voice.jpg'


class Business extends React.Component {
    render() {
        return (
            <div>
                <h2 className="heading-business" data-en="Business">ビジネス</h2>
                <div className="business_main">
                    <p>丑之日プロジェクトではお仕事を受け付けております!</p>
                    <p>ご連絡は
                        <a href="mailto:info@ushinohi.com" target="_blank" rel="noopener noreferrer" className="link-projects">
                            info@ushinohi.com
                        </a>
                        まで。
                    </p>
                    <div className="business">
                        <div className="business_content_pic">
                            <img className="project_pic project-pic-round" src={MovieEditing} alt="business's thumbnail"></img>
                        </div>

                        <div className="business_content">
                            <p className="business_name">動画制作</p>
                            <p className="business_description">
                                &nbsp;&nbsp;丑之日プロジェクトでは、動画制作を承っております!
                            </p>
                            <p className="business_description">
                                &nbsp;&nbsp;結婚式のOP動画やプロフィールムービー、余興動画から広告動画やYouTube動画まで、企画からお手伝いさせていただき、素敵な作品を制作させていただきます。
                            </p>
                            <p className="business_description">
                                &nbsp;&nbsp;お見積もりをご希望の方はお気軽にご連絡ください!
                            </p>
                            <p className="business_description">
                              ISUM登録事業者 (<Link className="link-isum-certificate" to="/IsumCertificate">第10011458号</Link>)
                            </p>  
                        </div>

                    </div>
                    <div className="business">
                        <div className="business_content_pic">
                            <img className="project_pic project-pic-round" src={WebDevelop} alt="business's thumbnail"></img>
                        </div>

                        <div className="business_content">
                            <p className="business_name">WEB・ECサイト制作</p>
                            <p className="business_description">
                                &nbsp;&nbsp;丑之日プロジェクトでは、静的WEBページやECサイトなど、WEBページの制作を承っております!
                            </p>
                            <p className="business_description">
                                &nbsp;&nbsp;WordPressなどのCMSや、流行りのReactを用いたサクサク動くWEBページ、DjangoやFlaskを用いた高度な機能を持つWEBアプリなどを開発いたします。
                            </p>
                            <p className="business_description">
                                &nbsp;&nbsp;お見積もりをご希望の方はお気軽にご連絡ください!
                            </p>
                            <p className="business_description">
                              丑之日プロジェクトの制作例: 
                                <a href="https://xn--5dkq194t5hezumvk1bov8b.com/" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    モリ不動産鑑定事務所 様
                                </a>
                            </p>  
                        </div>

                    </div>
                    <div className="business">
                        <div className="business_content_pic">
                            <img className="project_pic project-pic-round" src={Voice} alt="business's thumbnail"></img>
                        </div>

                        <div className="business_content">
                            <p className="business_name">ナレーション・声優</p>
                            <p className="business_description">
                                &nbsp;&nbsp;丑之日プロジェクトでは、Aniiによるナレーションやキャラクターボイスの音声収録も承っております!
                            </p>
                            <p className="business_description">
                                &nbsp;&nbsp;収録環境は以下の通りです。<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;AUDIO-TECHNICA AT2035<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Focusrite Scarlett Solo<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Logic Pro<br/>
                            </p>
                            <p className="business_description">
                                &nbsp;&nbsp;お見積もりをご希望の方はお気軽にご連絡ください!
                            </p>
                            <p className="business_description">
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