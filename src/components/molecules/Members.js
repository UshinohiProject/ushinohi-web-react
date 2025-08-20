import React from 'react';
import './Members.css';

import AniiIcon from './img/members/anii_prof.jpg'
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
                <div className="profile">
                	<div className="profile_content profile_content_pic">
                		<img className="profile_pic profile_pic_anii" src={AniiIcon} alt="profile icon"></img>
                	</div>
                	<div className="profile_content">
                		<p className="profile_name">Anii (雪村・魁(さき)=スカイウォーカー)</p>
                		<div className="members_sns">
                			<a href="mailto:anii@ushinohi.com" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={EMailIcon} alt="e-mail address"></img>
                            </a>
                			<a href="https://twitter.com/YSSkywalker" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={TwitterIcom} alt="Twitter Icon"></img>
                            </a>
                			<a href="https://www.facebook.com/yukimurasakiskywalker" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={FacebookIcon} alt="Facebook Icon"></img>
                            </a>
                			<a href="https://www.instagram.com/ysskywalker/" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={InstagramIcon} alt="Instagram Icon"></img>
                            </a>
                			<a href="https://www.youtube.com/channel/UCNIXXbCX91p3pnZ-UsYA2oQ" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={YoutubeIcon} alt="YouTube Icon"></img>
                            </a>
                			<a href="https://www.linkedin.com/in/%E7%A5%90%E4%B8%80%E9%83%8E-%E5%B1%B1%E5%8F%A3-619759150/" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={LinkedInIcon} alt="LinkedIn Icon"></img>
                            </a>
                			<a href="https://note.com/ysskywalker" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={NoteIcon} alt="Note Icon"></img>
                            </a>
                		</div>
                		<p className="profile-details">
                            &nbsp;&nbsp;鹿児島出身。高校3年の夏に突如留学を決意し、半年間の外語学院での準備期間を経てカリフォルニア・シリコンバレーの大学に入学。Mechanical Engineering(機械工学)を専攻し、なんとか卒業。
                        </p>
                        <p className="profile-details">
                            &nbsp;&nbsp;シリコンバレーのスタートアップ企業でソフトウェアの仕事をしたのち、日本に帰国。現在某IT企業で会社員として働きながらカリフォルニアの大学でComputer Science専攻の学生もしている。阪神ファン。
                        </p>
                	</div>
                </div>
                <div className="profile">
                	<div className="profile_content profile_content_pic">
                		<img className="profile_pic profile_pic_mark" src={MarkIcon} alt="profile icon"></img>
                	</div>
                	<div className="profile_content">
                		<p className="profile_name">Mark</p>
                		<div className="members_sns">
                			<a href="mailto:mark@ushinohi.com" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={EMailIcon} alt="e-mail address"></img>
                            </a>
                			<a href="https://twitter.com/lilac_hagikazu" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={TwitterIcom} alt="Twitter Icon"></img>
                            </a>
                			<a href="https://www.facebook.com/markhagiwara0331" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={FacebookIcon} alt="Facebook Icon"></img>
                            </a>
                			<a href="https://www.instagram.com/hagikazu331/" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={InstagramIcon} alt="Instagram Icon"></img>
                            </a>
                			<a href="https://www.linkedin.com/in/mark-hagiwara-834302183/" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={LinkedInIcon} alt="LinkedIn Icon"></img>
                            </a>
                			<a href="https://ushinohi.com/mark" target="_blank" rel="noopener noreferrer">
                                <img className="profile_icon" src={MarkIcon} alt="Mark Icon"></img>
                            </a>
                		</div>
                		<p className="profile-details">
                            &nbsp;&nbsp;ニューヨーク生まれ横浜市育ち。高校からはカナダで語学留学をしており、今はアメリカ人としてNASAでエンジニアとして働きながらカリフォルニアの大学に通っている。7歳からLEGOロボットで遊んでいて全国大会出場の経験あり。
                        </p>
                        <p className="profile-details">
                            &nbsp;&nbsp;趣味は野球観戦で根からのカープファン。
                        </p>
                	</div>
                </div>
            </div>
        );
    }
}

export default Members