import React from 'react';
import './Projects.css';

import Shikaku from './img/projects/shikaku.jpg'
import Mai from './img/projects/mai.jpg'
import Covid19 from './img/projects/covid_19.jpg'
import DayOne from './img/projects/day_one.jpg'
import Sara from './img/projects/sara.jpg'
import WebDesign from './img/projects/web_design.jpg'
import LChika from './img/projects/l_chika.jpg'

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title">Projects</h2>
                <div class="project_main">
                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic" src={Shikaku}></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">3Dプリンター製作</p>
                            <p class="project_description">&nbsp;&nbsp;丑之日プロジェクトによる最初のプロジェクト。ゼロの状態からものづくりを始めた私たちであったが、お金のない私たちは最新機器など買えるはずがなかった。&nbsp;&nbsp;「ならば自分で作ればいいじゃないか。」&nbsp;&nbsp;そんなクレイジーな発想から始まったプロジェクト第一号。</p>
                            <p class="project_description">
                              YouTubeは
                                <a href="https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                            </p>  
                        </div>

                    </div>
                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://www.youtube.com/watch?v=s58ha8iRuhc&list=PLD6iesuOnD4P_5LHOksX2iRmYkMzcQEwT" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic" src={Mai}></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">ドローン製作</p>
                            <p class="project_description">&nbsp;&nbsp;3Dプリンターをなんとか完成させたことで少し自信がついた丑之日プロジェクトが、次に作るものを調子に乗ってドローンに決定してしまった。&nbsp;&nbsp;すぐに完成すると思ったが、偽物の充電器をつかまされたり、おもったような挙動をしてくれなかったりと結局苦労することになる。</p>
                            <p class="project_description">
                                YouTubeは
                                <a href="https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                            </p>  
                        </div>
                    </div>
                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://covid19.spaceappschallenge.org/challenges/covid-challenges/purify-air-supply/teams/ushinohi-project/project" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic" src={Covid19}></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Space Apps COVID-19 Challenge</p>
                            <p class="project_description">
                                &nbsp;&nbsp;NASA主催の「
                                <a href="https://covid19.spaceappschallenge.org/" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    Space Apps COVID-19 Challenge
                                </a>
                                」は、NASAやJAXAなど、世界中の宇宙機構のもつデータを駆使して新型コロナウイルスに関連する問題をHackしよう、というhackathon。丑之日プロジェクトは
                                <a href="https://www.youtube.com/channel/UCdEAOh0W3foaVeJOrx6Cr-w" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    TECH-CICLE-KOBE
                                </a>
                                の
                                <a href="https://twitter.com/kzpng2" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    Kazu
                                </a>
                                さんと共に参加。&nbsp;&nbsp;紆余曲折経て、「植物の根っこに頭を突っ込んで寝る空気清浄機」を発案して提出。&nbsp;&nbsp;果たしてNASAやJAXAは、丑之日プロジェクトを認めてくれるのか。結果は夏に発表される。(2020年8月追記: 認めてもらえませんでした。)
                            </p>
                            <p class="project_description">
                                Space Appsの丑之日プロジェクトのページは
                                    <a href="https://covid19.spaceappschallenge.org/challenges/covid-challenges/purify-air-supply/teams/ushinohi-project/project" target="_blank" rel="noopener noreferrer" className="link-projects">
                                        コチラ
                                    </a>
                                動画公開をお楽しみに！
                            </p>  
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://youtu.be/AzSkr9oo_QQ" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic" src={DayOne}></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">ぼくらの宇宙アイデアソン-DayONE-</p>
                            <p class="project_description">&nbsp;&nbsp;
                                JAXA提供の「
                                <a href="https://startupgarage.connpass.com/event/182391/" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    ぼくらの宇宙アイデアソン-DayONE-
                                </a>
                                」は、身の回りの困りごとや気になることを、ロケット開発から人工衛星まで幅広い裾野を持つ宇宙技術でhackして解決しよう、というアイデアソン。丑之日プロジェクトはAniiとMarkの2人で大阪とカリフォルニアからリモート参加。&nbsp;&nbsp;「気象予測情報・実測情報を用いて洗濯物の感想時刻を予測するアプリ」を考案して発表(
                                <a href="https://youtu.be/AzSkr9oo_QQ" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    発表の様子
                                </a>
                                )。&nbsp;&nbsp;ルールを守って短時間で企画・資料発表を強行した結果、甘々な発表になってしまったが、なんとスペシャルゲストで元AKB48の
                                <a href="https://twitter.com/ami__maeda0601" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    前田亜美さん
                                </a>
                                より「前田亜美賞」を受賞。AniiとMarkがまさかの受賞と芸能人との会話に大慌てする様子が全世界に生配信された(
                                <a href="https://youtu.be/AzSkr9oo_QQ?t=5264" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    授賞式で大慌てする2人の様子
                                </a>)。
                            </p>

                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                        {/* <a href="https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB" target="_blank" rel="noopener noreferrer">
                            <img class="project_pic" src="https://ushinohi.com/wp-content/uploads/2020/05/さらちゃん.png">
                        </a> */}
                            <img class="project_pic" src={Sara}></img>
                        </div>

                        <div class="project_content">
                            <p class="project_name">水中ROV製作</p>
                            <p class="project_description">&nbsp;&nbsp;2019年の夏休みに初めて丑之日プロジェクトのメンバーが日本に勢揃いした際に、48時間という制限時間を設けて製作に挑戦した、水中ROV(Remotely Operated Vehicle)。&nbsp;&nbsp;果たして時間内に完成させられたのか。</p>
                            <p class="project_description">
                                動画公開をお楽しみに！
                            </p>  
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <img class="project_pic" src={WebDesign}></img>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Webサイト製作</p>
                            <p class="project_description">&nbsp;&nbsp;もっと色々な人に知ってもらう為に3Dプリンターと同時進行でこの丑の日Webサイトを作っています。&nbsp;&nbsp;ハードウェアだけではなくソフトウエアにも挑戦しています。</p>
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic" src={LChika}></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Lチカ</p>
                            <p class="project_description">&nbsp;&nbsp;Arduinoを使ってLEDを光らせるだけの丑の日では最短のプロジェクト。簡単すぎてプロジェクトとは言い辛いが、Arduinoの経験があまりない私たちはエラーに苦戦する。&nbsp;&nbsp;苦悩の末３色の信号を作り上げた。</p>
                            <p class="project_description">YouTubeは
                                <a href="https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects