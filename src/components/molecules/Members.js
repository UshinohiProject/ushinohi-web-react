import React from 'react';
import './Members.css';

import AniiIcon from './img/members/anii_prof.jpg'
import TaroIcon from './img/members/taro_prof.jpg'
import MarkIcon from './img/members/mark_prof.jpg'

import EMailIcon from './img/members/e_mail.jpg'
import TwitterIcom from './img/members/twitter_prof.jpg'
import FacebookIcon from './img/members/facebook.jpg'
import InstagramIcon from './img/members/instagram.jpg'
import YoutubeIcon from './img/members/youtube.jpg'
import LinkedInIcon from './img/members/linkedin.jpg'
import NoteIcon from './img/members/note_logo.jpg'

class Members extends React.Component {
    render() {
        return (
            <div className="members">
                <h2 className="heading-members" data-en="Members">メンバー紹介</h2>
                <div class="profile">
                	<div class="profile_content profile_content_pic">
                		<img class="profile_pic" src={AniiIcon} alt="profile icon"></img>
                	</div>
                	<div class="profile_content">
                		<p class="profile_name">Anii (雪村・魁(さき)=スカイウォーカー)</p>
                		<div class="members_sns">
                			<a href="mailto:anii@ushinohi.com" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={EMailIcon} alt="e-mail address"></img>
                            </a>
                			<a href="https://twitter.com/YSSkywalker" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={TwitterIcom} alt="Twitter Icon"></img>
                            </a>
                			<a href="https://www.facebook.com/yukimurasakiskywalker" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={FacebookIcon} alt="Facebook Icon"></img>
                            </a>
                			<a href="https://www.instagram.com/ysskywalker/" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={InstagramIcon} alt="Instagram Icon"></img>
                            </a>
                			<a href="https://www.youtube.com/channel/UCNIXXbCX91p3pnZ-UsYA2oQ" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={YoutubeIcon} alt="YouTube Icon"></img>
                            </a>
                			<a href="https://www.linkedin.com/in/%E7%A5%90%E4%B8%80%E9%83%8E-%E5%B1%B1%E5%8F%A3-619759150/" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={LinkedInIcon} alt="LinkedIn Icon"></img>
                            </a>
                			<a href="https://note.com/ysskywalker" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={NoteIcon} alt="Note Icon"></img>
                            </a>
                		</div>
                		<p class="profile-details">鹿児島出身。高校3年の夏に突如留学を決意し、半年間の外語学院での準備期間を経てカリフォルニア・シリコンバレーの大学に入学。Mechanical Engineering(機械工学)を専攻し、なんとか卒業。シリコンバレーのスタートアップ企業でソフトウェアの仕事をしたのち、日本に帰国。現在絶賛就活中。タイガースファン。</p>
                	</div>
                </div>
                <div class="profile">
                	<div class="profile_content profile_content_pic">
                		<img class="profile_pic" src={TaroIcon} alt="profile icon"></img>
                	</div>
                	<div class="profile_content">
                		<p class="profile_name">Taro (タロウ)</p>
                		<div class="members_sns">
                			<a href="mailto:kotaro@ushinohi.com" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={EMailIcon} alt="e-mail address"></img>
                            </a>
                			<a href="https://twitter.com/TaRo_SiBe" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={TwitterIcom} alt="Twitter Icon"></img>
                            </a>
                			<a href="https://www.facebook.com/steamdrrr" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={FacebookIcon} alt="Facebook Icon"></img>
                            </a>
                			<a href="https://www.instagram.com/taro7445/" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={InstagramIcon} alt="Instagram Icon"></img>
                            </a>
                			<a href="https://www.linkedin.com/in/kotaro-ishizuka-57803b1a2/" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={LinkedInIcon} alt="LinkedIn Icon"></img>
                            </a>
                			<a href="https://ushinohi.com/taro" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={TaroIcon} alt="Taro Icon"></img>
                            </a>
                		</div>
                		<p class="profile-details">鹿児島出身。工業大学在学中に参加したロボコンでリーダーを務め、所属チームの活躍に貢献。大学卒業後はエネルギー産業関連企業に従事していたが、夢を追って1年で転職。現在はIoTに携わる会社で奮闘中の会社員。AniiとMarkに無理やりヤクルトファンにさせられた。</p>
                	</div>
                </div>
                <div class="profile">
                	<div class="profile_content profile_content_pic">
                		<img class="profile_pic" src={MarkIcon} alt="profile icon"></img>
                	</div>
                	<div class="profile_content">
                		<p class="profile_name">Mark</p>
                		<div class="members_sns">
                			<a href="mailto:mark@ushinohi.com" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={EMailIcon} alt="e-mail address"></img>
                            </a>
                			<a href="https://twitter.com/lilac_hagikazu" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={TwitterIcom} alt="Twitter Icon"></img>
                            </a>
                			<a href="https://www.facebook.com/lego.kazu" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={FacebookIcon} alt="Facebook Icon"></img>
                            </a>
                			<a href="https://www.instagram.com/hagikazu331/" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={InstagramIcon} alt="Instagram Icon"></img>
                            </a>
                			<a href="https://www.linkedin.com/in/mark-hagiwara-834302183/" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={LinkedInIcon} alt="LinkedIn Icon"></img>
                            </a>
                			<a href="https://ushinohi.com/mark" target="_blank" rel="noopener noreferrer">
                                <img class="profile_icon" src={MarkIcon} alt="Mark Icon"></img>
                            </a>
                		</div>
                		<p class="profile-details">ニューヨーク生まれ横浜市育ち。高校からはカナダで語学留学をしており、今はアメリカ人としてカリフォルニアのシリコンバレーの大学生。７歳からLEGOロボットで遊んでいて全国大会出場の経験あり。趣味は野球観戦で根からのカープファン。</p>
                	</div>
                </div>
            </div>
        );
    }
}

export default Members