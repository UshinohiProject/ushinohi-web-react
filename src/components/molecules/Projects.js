import React from 'react';
import './Projects.css';

import Shikaku from './img/projects/shikaku.jpg'
import Mai from './img/projects/mai.jpg'
import Covid19 from './img/projects/covid_19.png'
import Hiyori from './img/projects/hiyori.png'
import Vacume from './img/projects/vacume.png'
import Yafumi from './img/projects/yafumi.png'
import Sara from './img/projects/sara.jpg'
import Emi from './img/projects/emi.png'
import WebDesign from './img/projects/web_design.jpg'
import LChika from './img/projects/l_chika.jpg'

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h2 className="heading-projects" data-en="Projects">プロジェクト一覧</h2>
                <div class="project_main">
                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic project-pic-round" src={Shikaku} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">3Dプリンター製作</p>
                            <p class="project_description">
                                &nbsp;&nbsp;丑之日プロジェクトによる最初のプロジェクト。ゼロの状態からものづくりを始めた私たちであったが、お金のない私たちは最新機器など買えるはずがなかった。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;「ならば自分で作ればいいじゃないか。」
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;そんなクレイジーな発想から始まったプロジェクト第一号。
                            </p>
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
                                <img class="project_pic project-pic-round" src={Mai} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">ドローン製作</p>
                            <p class="project_description">
                                &nbsp;&nbsp;3Dプリンターをなんとか完成させたことで少し自信がついた丑之日プロジェクトが、次に作るものを調子に乗ってドローンに決定してしまった。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;すぐに完成すると思ったが、偽物の充電器をつかまされたり、おもったような挙動をしてくれなかったりと結局苦労することになる。
                            </p>
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
                                <img class="project_pic project-pic-round" src={Covid19} alt="project's thumbnail"></img>
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
                                さんと共に参加。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;紆余曲折経て、「植物の根っこに頭を突っ込んで寝る空気清浄機」を発案して提出。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;果たしてNASAやJAXAは、丑之日プロジェクトを認めてくれるのか。結果は夏に発表される。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;(2020年8月追記: 認めてもらえませんでした。)
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
                                <img class="project_pic project-pic-round" src={Hiyori} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name project_name-dayone">ぼくらの宇宙アイデアソン -DayONE-</p>
                            <div>
                                <h2 className="award-ribbon"><span>前田亜美賞 受賞</span></h2>
                            </div>
                            <p class="project_description">&nbsp;&nbsp;
                                JAXA提供の「
                                <a href="https://startupgarage.connpass.com/event/182391/" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    ぼくらの宇宙アイデアソン-DayONE-
                                </a>
                                」は、身の回りの困りごとや気になることを、ロケット開発から人工衛星まで幅広い裾野を持つ宇宙技術でhackして解決しよう、というアイデアソン。丑之日プロジェクトはAniiとMarkの2人で大阪とカリフォルニアからリモート参加。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;「気象予測情報・実測情報を用いて洗濯物の感想時刻を予測するアプリ」を考案して発表(
                                <a href="https://youtu.be/AzSkr9oo_QQ" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    発表の様子
                                </a>
                                )。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;ルールを守って短時間で企画・資料発表を強行した結果、甘々な発表になってしまったが、なんとスペシャルゲストで元AKB48の
                                <a href="https://twitter.com/ami__maeda0601" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    前田亜美さん
                                </a>
                                より「前田亜美賞」を受賞。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;AniiとMarkがまさかの受賞と芸能人との会話に大慌てする様子が全世界に生配信された(
                                <a href="https://youtu.be/AzSkr9oo_QQ?t=5264" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    授賞式で大慌てする2人の様子
                                </a>)。
                            </p>

                        </div>
                    </div>
                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://2020.spaceappschallenge.org/challenges/create/virtual-planetary-exploration/teams/ushinohi-project-1/project" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic project-pic-round" src={Vacume} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Space Apps Challenge 2020</p>
                            <div>
                                <h2 className="award-ribbon"><span>NASA Global Nominee</span></h2>
                            </div>
                            <div>
                                <h2 className="award-ribbon"><span>豊橋会場 審査員長賞 受賞</span></h2>
                            </div>
                            <div>
                                <h2 className="award-ribbon"><span>豊橋会場 People's Choice賞 受賞</span></h2>
                            </div> 
                            <p class="project_description">&nbsp;&nbsp;
                                NASA主催の「
                                <a href="https://2020.spaceappschallenge.org" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    Space Apps Challenge 2020
                                </a>
                                」は、身の回りの困りごとや気になることを、ロケット開発から人工衛星まで幅広い裾野を持つ宇宙技術でhackして解決しよう、というHackathon。丑之日プロジェクトはメンバー3人全員でそれぞれカリフォルニア、東京、大阪から愛知県豊橋会場へリモート参加。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;持続可能な宇宙開発を実現する探索モジュール「いちご大福(Manjuu)」と「すいとりくん(Mr. Vacume)」を考案してプロトタイプを作成、発表。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;今までに参加したハッカソンでの反省を活かし、短い制限時間内で満足のいく開発と発表ができたことにより、「審査員長賞」と「ピープルズチョイス賞」をダブル受賞。代表として世界審査に進出し、Global Nomineeとなった(
                                <a href="https://2020.spaceappschallenge.org/challenges/create/virtual-planetary-exploration/teams/ushinohi-project-1/project" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    NASAのWEBページ
                                </a>)。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;丑之日プロジェクトが世界に進出した瞬間であった。
                            </p>
                            <p class="project_description">発表の様子は
                                <a href="https://youtu.be/CBSI1xkIegY?t=586" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                            </p>

                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://youtu.be/lXl-brlEuRw?t=8111" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic project-pic-round" src={Yafumi} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Hack Day 2021</p>
                            <p class="project_description">
                                &nbsp;&nbsp;Yahoo!JAPAN主催で日本最大級のHackathon「
                                    <a href="https://hackday.jp/" target="_blank" rel="noopener noreferrer" className="link-projects">
                                        Hack Day 2021
                                    </a>
                                」に参加して開発、発表したIoT矢文。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;「やふみちゃん」と名付けられたこのガジェットは、全く新しい独自開発のHangarrowシステムにより、迅速で強力なメッセージ送信体験を実現。強靭なHangerから放たれるArrowに結ばれた短冊は、RaspberryPiで取得した画像からCLOVA OCRで内容と宛名を解析され、GASとLINE Messaging APIの連携により正確に相手に届けられる。
                            </p>
                            <p class="project_description">
                                &nbsp;&nbsp;やふみちゃんに射抜かれその心を奪われなかった者はいない。
                            </p>
                            <p class="project_description">発表の様子は
                                <a href="https://youtu.be/lXl-brlEuRw?t=8111" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://www.youtube.com/watch?v=OYtdHdW2QCU&list=PLD6iesuOnD4PeQOzbv5h4e0JavQmN9BDU&index=1" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic project-pic-round" src={Sara} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">水中ROV製作</p>
                            <p class="project_description">&nbsp;&nbsp;2019年の夏休みに初めて丑之日プロジェクトのメンバーが日本に勢揃いした際に、48時間という制限時間を設けて製作に挑戦した、水中ROV(Remotely Operated Vehicle)。&nbsp;&nbsp;果たして時間内に完成させられたのか。</p>
                            <p class="project_description">YouTubeは
                                <a href="https://www.youtube.com/watch?v=OYtdHdW2QCU&list=PLD6iesuOnD4PeQOzbv5h4e0JavQmN9BDU&index=1" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a>
                            </p> 
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://nt-kanazawa.glideapp.io/" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic project-pic-round" src={Emi} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">スマートミラー</p>
                            <p class="project_description">&nbsp;&nbsp;笑顔度を計測し、リアルタイムでその数値を鏡面に表示してくれるスマートミラー。100%を超えると自動音声が褒めてくれます。</p>
                            <p class="project_description">「えみちゃん」と名付けられたこちらのスマートミラー、もちろん木枠から鏡面まで手作りし、「<a href="https://nt-kanazawa.glideapp.io/" target="_blank" rel="noopener noreferrer" className="link-projects">NT金沢2020</a>」に出展しました。</p>
                            <p class="project_description">YouTubeでの公開もお楽しみに！
                                {/* <a href="https://www.youtube.com/watch?v=OYtdHdW2QCU&list=PLD6iesuOnD4PeQOzbv5h4e0JavQmN9BDU&index=1" target="_blank" rel="noopener noreferrer" className="link-projects">
                                    コチラ
                                </a> */}
                            </p> 
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <img class="project_pic project-pic-round" src={WebDesign} alt="project's thumbnail"></img>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Webサイト製作</p>
                            <p class="project_description">&nbsp;&nbsp;もっと色々な人に知ってもらう為に3Dプリンターと同時進行でこの丑之日Webサイトを作っています。&nbsp;&nbsp;ハードウェアだけではなくソフトウエアにも挑戦しています。</p>
                        </div>
                    </div>

                    <div class="project">
                        <div class="project_content_pic">
                            <a href="https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A" target="_blank" rel="noopener noreferrer">
                                <img class="project_pic project-pic-round" src={LChika} alt="project's thumbnail"></img>
                            </a>
                        </div>

                        <div class="project_content">
                            <p class="project_name">Lチカ</p>
                            <p class="project_description">&nbsp;&nbsp;Arduinoを使ってLEDを光らせるだけの丑之日では最短のプロジェクト。簡単すぎてプロジェクトとは言い辛いが、Arduinoの経験があまりない私たちはエラーに苦戦する。&nbsp;&nbsp;苦悩の末３色の信号を作り上げた。</p>
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