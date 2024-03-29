import React from 'react';
import Project from './Project'
import './Projects.css';

import Shikaku from './img/projects/shikaku.jpg'
import Zao from './img/projects/zao.jpg'
import Toreru from './img/projects/toreru.jpg'
import Koriyama from './img/projects/koriyama.jpg'
import Kaban from './img/projects/kaban.jpg'
import Nezulatoon from './img/projects/nezulatoon.png'
import Chiri from './img/projects/chiri.png'
import Chiko from './img/projects/chiko.png'
import Mai from './img/projects/mai.jpg'
import Covid19 from './img/projects/covid_19.png'
import Hiyori from './img/projects/hiyori.png'
import Vacume from './img/projects/vacume.png'
import Yafumi from './img/projects/yafumi.png'
import Satsue from './img/projects/satsue.JPG'
import Kenko from './img/projects/kenko.jpg'
import Sara from './img/projects/sara.jpg'
import Emi from './img/projects/emi.png'
import WebDesign from './img/projects/web_design.jpg'
import LChika from './img/projects/l_chika.jpg'
import YoutubeIcon from './img/projects/youtube_icon.png'
import LineIcon from './img/projects/line_icon.png'

class Projects extends React.Component {
    render() {
        // メンバーの情報は以下を編集
        const projectList=[
            {
                thumnailUrl: 'https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB',
                thumnailImg: Shikaku,
                projectSubtitle: '自作3Dプリンター',
                projectName: 'しかくちゃん',
                competition: '',
                awardDictList: [],
                projectDescriptionList: [
                    '丑之日プロジェクトによる最初のプロジェクト。ゼロの状態からものづくりを始めた私たちであったが、お金のない私たちは最新機器など買えるはずがなかった。',
                    '「ならば自分で作ればいいじゃないか。」',
                    'そんなクレイジーな発想から始まったプロジェクト第一号。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    }
                ]
            },
            {
                thumnailUrl: 'https://www.youtube.com/watch?v=s58ha8iRuhc&list=PLD6iesuOnD4P_5LHOksX2iRmYkMzcQEwT',
                thumnailImg: Mai,
                projectSubtitle: '自作ドローン',
                projectName: 'まいちゃん',
                competition: '',
                awardDictList: [],
                projectDescriptionList: [
                    '3Dプリンターをなんとか完成させたことで少し自信がついた丑之日プロジェクトが、次に作るものを調子に乗ってドローンに決定してしまった。',
                    'すぐに完成すると思ったが、偽物の充電器をつかまされたり、おもったような挙動をしてくれなかったりと結局苦労することになる。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://www.youtube.com/playlist?list=PLD6iesuOnD4N5p1YKejy6whGA2BegcaRB',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    }
                ]
            },
            {
                thumnailUrl: 'https://2022.spaceappschallenge.org/challenges/2022-challenges/mars-habitat/teams/ushinohi-project-3/project',
                thumnailImg: Zao,
                projectSubtitle: '対火星環境仕様万能モータ',
                projectName: 'ざおちゃん',
                competition: '',
                awardDictList: [{competitionName: 'Space Apps Challenge 2022', awardTitle: '豊橋会場 スタートアップ賞'}],
                projectDescriptionList: [
                    '火星の基地に不時着し、持ってきた道具や探査ローバのタイヤが破損したことを想定し、最悪の状況を打開するプロダクトを備え付けの3Dプリンタで出力するための3Dモデルを制作。',
                    '物干し竿の接続部から着想し、モータ、バッテリを密閉したまま様々なアタッチメントを装着できる「ZAO機構」を開発。',
                    'また、小さい3Dプリンタで大きなタイヤの部品を出力できる仕組みも開発。メンバー3人で徹夜でCADに取り組んだ。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://2022.spaceappschallenge.org/challenges/2022-challenges/mars-habitat/teams/ushinohi-project-3/project',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://youtu.be/7by-7JRb6yk?t=6165',
                thumnailImg: Toreru,
                projectSubtitle: '撮影補助ARアプリ',
                projectName: 'とれるちゃん',
                competition: '',
                awardDictList: [{competitionName: 'Digital Hack Day 2022', awardTitle: 'Happy Hacking賞'}],
                projectDescriptionList: [
                    '「大好きな作品の聖地巡礼できたは良いものの、あの名シーンの画角でうまく写真が撮れない…」',
                    'そんな悩みを解決してくれるアプリを開発。聖地を訪れてアプリを起動、カメラで景色を映すとカメラアイコンが現れ、その画角から撮れば簡単・正確にあの名シーンを再現できる。おのしん氏がソフトウェア開発のヘルプとして参加してくれた。',
                    'さらにデザイナーになるき氏を迎え、完全オリジナルアニメを制作。そのシーンを再現するデモを行った。激戦を制し、視聴者・参加者投票で1位を獲得。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://youtu.be/7by-7JRb6yk?t=6165',
                        img: null,
                        text: '発表の様子'
                    },
                    {
                        type: 'a',
                        url: 'https://twitter.com/fjnaruo28',
                        img: null,
                        text: 'なるき氏のTwitter'
                    }
                ]
            },
            {
                thumnailUrl: 'https://www.minyu-net.com/news/news/FM20220905-726796.php',
                thumnailImg: Koriyama,
                projectSubtitle: '郡山市の魅力を再発見',
                projectName: 'クイズ郡山',
                competition: '',
                awardDictList: [{competitionName: '「一本の水路」ハッカソン', awardTitle: '最高賞'}],
                projectDescriptionList: [
                    '福島県郡山市をお米や果物などの一大産出地へと変貌させた一本の水路、「安積疏水」のように現代の郡山の課題を解決することが目的のハッカソンで、',
                    '地元の方々に徹底的なヒアリングをさせていただいた結果、郡山の課題は「若い人材の流出」であることに気づいた丑之日プロジェクト。',
                    'そこで、生まれ育った町を離れてひとり暮らしを始めると「地元民にしか分からないあるある」に触れるとどうしようもなく帰省したくなる現象に着目したWEBアプリ、「クイズ郡山」を開発。',
                    '郡山市民が郡山市民にしか分からないクイズを投稿し、郡山出身で東京で学ぶ若者に「郡山のためにスキルを活かしたい」と思ってもらうキッカケを作る。最高賞の「マイクロソフト賞」を受賞。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://www.minyu-net.com/news/news/FM20220905-726796.php',
                        img: null,
                        text: 'ニュース記事'
                    }
                ]
            },
            {
                thumnailUrl: 'https://protopedia.net/prototype/3188',
                thumnailImg: Kaban,
                projectSubtitle: 'リュック型延長コード',
                projectName: 'かばんちゃん',
                competition: '',
                awardDictList: [{competitionName: '第3回ツクってアソぶハッカソン', awardTitle: '優秀賞'}],
                projectDescriptionList: [
                    '設定されたテーマは『「いや違う。そうじゃない。」とツッコまれたくなるモノまたはサービスをツクる』。',
                    'リュックにコンセントプラグを合計9個設置することで、部屋の中で場所にとらわれずに電気を使える生活を実現するプロダクトを開発。',
                    'これでもう、部屋の隅で充電が切れそうなスマホを充電しながらタイムラインに齧り付く日々とはお別れである。',
                    '全く役に立たないものを作ろうとしたが、あまりにも便利すぎて普段めちゃめちゃ使っている。(※第二種電気工事士であるAniiが安全に最大限配慮して開発しました。)'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://youtu.be/G_Ej3MDUMuk',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    },
                    {
                        type: 'a',
                        url: 'https://protopedia.net/prototype/3188',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://protopedia.net/prototype/3046',
                thumnailImg: Nezulatoon,
                projectSubtitle: '商店街対抗！色塗り地図アプリ',
                projectName: '根津latoon',
                competition: '',
                awardDictList: [{competitionName: 'bitconnect 2021', awardTitle: '優秀賞'}],
                projectDescriptionList: [
                    '東京都文京区にある商店街連合会のひとつである「根津」の商店街でフィールドワークを行なって課題を見つけ、「Hometown」というテーマに基づいて開発されたプロダクト。',
                    'スマホで「推し商店街」を選択して味方や相手の商店街で「Shoot」ボタンを押しまくるシンプルなゲーム。インクがなくなったら味方商店街で買い物をして補充。相手商店街で買い物をすれば強い武器が手に入る。',
                    '「実は普段の集客には困っていないが、資金難で年に1度しか開けないお祭りのような、商店街全体が盛り上がる何かが欲しい」という商店街の声から生まれた「根津latoon」は、課題へのアプローチや独創性、完成度に加え、その実現性の高さが評価されて東京会場での優勝を勝ち取った。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://youtu.be/hOYtb0X3jZk',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    },
                    {
                        type: 'a',
                        url: 'https://protopedia.net/prototype/3046',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://lin.ee/bXAJ7mq',
                thumnailImg: Chiri,
                projectSubtitle: 'ゴミの日通知アプリ',
                projectName: 'ちりちゃん',
                competition: '',
                awardDictList: [{competitionName: 'インスタントハッカソン@鹿児島 v2022.5', awardTitle: '優勝'}],
                projectDescriptionList: [
                    '明日が「何のゴミの日なのか」を毎晩9時に通知してくれるLINE botを開発。',
                    '郵便番号を「ちりちゃん」にLINEで教えるだけで登録は完了、面倒なユーザー登録などは一切不要。',
                    '現在はAniiとTaroの出身地である鹿児島市にのみ対応中。',
                    '出勤直前に「んんん来週のゴミの日に捨てよう！！」と諦める朝は今日で最後にしよう。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://youtu.be/trTFIMsVm50',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    },
                    {
                        type: 'img',
                        url: 'https://lin.ee/bXAJ7mq',
                        img: LineIcon,
                        alt: 'Line Logo'
                    }
                ]
            },
            {
                thumnailUrl: '/Chiko',
                thumnailImg: Chiko,
                projectSubtitle: '遅刻理由ジェネレーター',
                projectName: 'ちこちゃん',
                competition: '',
                awardDictList: [{competitionName: '第2回ツクってアソぶハッカソン', awardTitle: '優秀賞'}],
                projectDescriptionList: [
                    '設定された「時から開放されるサービス」というテーマに寸分の狂いもなく答えたWEBアプリ、「ちこちゃん」を開発。',
                    '遅刻しそうなときにランダムで遅刻理由を生成し続け、気に入ったものがあれば自動で言い訳文章を生成して待たせている相手に送信することができる。',
                    '本当に公共交通機関の遅延を取得したり、本当に時計が壊れたりする「ガチモード」も実装予定。',
                    'これであなたも時間から解放されるでしょう。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: '/Chiko',
                        img: null,
                        text: 'ちこちゃん'
                    },
                    {
                        type: 'a',
                        url: 'https://protopedia.net/prototype/2924',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://youtu.be/w_Fb7wVX0bA?t=749',
                thumnailImg: Kenko,
                projectSubtitle: 'ツンデレ健康管理システム',
                projectName: 'けんこちゃん',
                competition: '',
                awardDictList: [{competitionName: 'Digital Hack Day 2021', awardTitle: 'Finalist 選出'}],
                projectDescriptionList: [
                    'Yahoo!JAPAN主催で日本最大級のHackathon「Hack Day」のデジタル特化版、「Digital Hack Day 2021」に参加して開発、発表したIoT調味料置き台。',
                    '今回のテーマは「日本のデジタル化」、「課題解決」「Hack」「Fun」の3つの観点で審査され最優秀賞が選ばれる。ルールは「プログラミングを含む、動くプロトタイプを作ること」。',
                    '予選は9月に行われ、24時間以内に開発、発表資料を作成しなければならない。「丑之日プロジェクト with K」として3人で参加した我々は、日本人の塩分摂取過多を解決したいと考え、健康管理をしてくれるIoT調味料置き場「けんこちゃん」をKenkoWEB、KenkoAPIと共に開発し、見事73組の参加チームを勝ち抜き、10組の決勝枠に進出した。',
                    '惜しくも最優秀賞は逃したが、生配信のコメント欄は「けんこちゃん」に魅了された視聴者で溢れた。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://youtu.be/D04R7zEfDG0?t=3904',
                        img: null,
                        text: '予選の様子'
                    },
                    {
                        type: 'a',
                        url: 'https://youtu.be/w_Fb7wVX0bA?t=749',
                        img: YoutubeIcon,
                        text: '決勝の様子'
                    }
                ]
            },
            {
                thumnailUrl: 'https://youtu.be/utKhozqVci4?t=2720',
                thumnailImg: Satsue,
                projectSubtitle: 'ヒト用対宇宙環境仕様自撮棒',
                projectName: 'さつえちゃん',
                competition: '',
                awardDictList: [{competitionName: 'Space Apps Challenge 2021', awardTitle: '豊橋会場 海の男賞'}],
                projectDescriptionList: [
                    'NASA主催の「Space Apps Challenge 2021」は、身の回りの困りごとや気になることを、ロケット開発から人工衛星まで幅広い裾野を持つ宇宙技術でhackして解決しよう、というHackathon。2021年はTaroの参加は叶わなかったものの、Aniiのカリフォルニア在住時代のルームメイトKazooさんを迎え、「丑之日プロジェクト with K」として3人でそれぞれカリフォルニア、東京、大阪から愛知県豊橋会場へリモート参加。',
                    '今年は「VIRTUAL PLANETARY EXPLORATION V2.0」というテーマを選択した。そこで我々は「月や火星を探査しに着陸したらまず何をするか」を考えた。そう、「自撮り」である。そこで、宇宙線や真空空間などの過酷な環境でも使用可能な自撮り棒「さつえちゃん」を考案し、3Dモデルを作成。NASAに提案した。',
                    '次に月を訪れる冒険者は、月の海を背景に「さつえちゃん」で撮った写真をTwitterに投稿することだろう。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://youtu.be/utKhozqVci4?t=2720',
                        img: null,
                        text: '発表の様子'
                    },
                    {
                        type: 'a',
                        url: 'https://2021.spaceappschallenge.org/challenges/statements/virtual-planetary-exploration-v20/teams/ushinohi-project-with-k/project',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://youtu.be/lXl-brlEuRw?t=8111',
                thumnailImg: Yafumi,
                projectSubtitle: '矢文型LINE送信機',
                projectName: 'やふみちゃん',
                competition: 'Hack Day 2021',
                awardDictList: [{competitionName: 'Hero\'s League 2021', awardTitle: '運営事務局特別賞'}],
                projectDescriptionList: [
                    'Yahoo!JAPAN主催で日本最大級のHackathon「Hack Day 2021」に参加して開発、発表したIoT矢文。',
                    '「やふみちゃん」と名付けられたこのガジェットは、全く新しい独自開発のHangarrowシステムにより、迅速で強力なメッセージ送信体験を実現。強靭なHangerから放たれるArrowに結ばれた短冊は、RaspberryPiで取得した画像からCLOVA OCRで内容と宛名を解析され、GASとLINE Messaging APIの連携により正確に相手に届けられる。',
                    'やふみちゃんに射抜かれその心を奪われなかった者はいない。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://youtu.be/lXl-brlEuRw?t=8111',
                        img: null,
                        text: '発表の様子'
                    }
                ]
            },
            {
                thumnailUrl: 'https://2020.spaceappschallenge.org/challenges/create/virtual-planetary-exploration/teams/ushinohi-project-1/project',
                thumnailImg: Vacume,
                projectSubtitle: '宇宙探索モジュール for SDGs',
                projectName: 'いちご大福/すいとりくん',
                competition: '',
                awardDictList: [{competitionName: 'Space Apps Challenge 2020', awardTitle: 'NASA Global Nominee'}, {competitionName: 'Space Apps Challenge 2020', awardTitle: '豊橋会場 審査員長賞'}, {competitionName: 'Space Apps Challenge 2020', awardTitle: '豊橋会場 People\'s Choice賞'}],
                projectDescriptionList: [
                    'NASA主催の「Space Apps Challenge 2020」は、身の回りの困りごとや気になることを、ロケット開発から人工衛星まで幅広い裾野を持つ宇宙技術でhackして解決しよう、というHackathon。丑之日プロジェクトはメンバー3人全員でそれぞれカリフォルニア、東京、大阪から愛知県豊橋会場へリモート参加。',
                    '持続可能な宇宙開発を実現する探索モジュール「いちご大福(Manjuu)」と「すいとりくん(Mr. Vacume)」を考案してプロトタイプを作成、発表。',
                    '今までに参加したハッカソンでの反省を活かし、短い制限時間内で満足のいく開発と発表ができたことにより、「審査員長賞」と「ピープルズチョイス賞」をダブル受賞。代表として世界審査に進出し、Global Nomineeとなった。',
                    '丑之日プロジェクトが世界に進出した瞬間であった。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://youtu.be/CBSI1xkIegY?t=586',
                        img: null,
                        text: '発表の様子'
                    },
                    {
                        type: 'a',
                        url: 'https://2020.spaceappschallenge.org/challenges/create/virtual-planetary-exploration/teams/ushinohi-project-1/project',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://youtu.be/AzSkr9oo_QQ',
                thumnailImg: Hiyori,
                projectSubtitle: '洗濯物感想時刻予想アプリ',
                projectName: 'ひよりちゃん',
                // projectName: 'ぼくらの宇宙アイデアソン -DayONE-',
                competition: '',
                awardDictList: [{competitionName: 'ぼくらの宇宙アイデアソン -DayONE-', awardTitle: '前田亜美賞'}],
                projectDescriptionList: [
                    'JAXA提供の「ぼくらの宇宙アイデアソン-DayONE-」は、身の回りの困りごとや気になることを、ロケット開発から人工衛星まで幅広い裾野を持つ宇宙技術でhackして解決しよう、というアイデアソン。丑之日プロジェクトはAniiとMarkの2人で大阪とカリフォルニアからリモート参加。',
                    '「気象予測情報・実測情報を用いて洗濯物の感想時刻を予測するアプリ」を考案して発表。',
                    'ルールを守って短時間で企画・資料発表を強行した結果、甘々な発表になってしまったが、なんとスペシャルゲストで元AKB48の前田亜美さんより「前田亜美賞」を受賞。',
                    'AniiとMarkがまさかの受賞と芸能人との会話に大慌てする様子が全世界に生配信された。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://youtu.be/AzSkr9oo_QQ?t=123',
                        img: null,
                        text: '発表の様子'
                    },
                    {
                        type: 'a',
                        url: 'https://youtu.be/AzSkr9oo_QQ?t=5264',
                        img: null,
                        text: '授賞式の様子'
                    }
                ]
            },
            {
                thumnailUrl: 'https://covid19.spaceappschallenge.org/challenges/covid-challenges/purify-air-supply/teams/ushinohi-project/project',
                thumnailImg: Covid19,
                projectSubtitle: 'インテリア × 空気清浄',
                projectName: '安眠植木ドーム',                                                                                                                                                                                                                                                                                                                                          
                awardDictList: [],
                competition: 'Space Apps COVID-19 Challenge',
                projectDescriptionList: [
                    'NASA主催の「Space Apps COVID-19 Challenge」は、NASAやJAXAなど、世界中の宇宙機構のもつデータを駆使して新型コロナウイルスに関連する問題をHackしよう、というhackathon。丑之日プロジェクトはTECH-CICLE-KOBEのKazuさんと共に参加。',
                    '紆余曲折経て、「植物の根っこに頭を突っ込んで寝る空気清浄機」を発案して提出。',
                    'しかし、丑之日プロジェクトの画期的なアイデアは、NASAやJAXAには認めてもらえなかった。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'a',
                        url: 'https://covid19.spaceappschallenge.org/challenges/covid-challenges/purify-air-supply/teams/ushinohi-project/project',
                        img: null,
                        text: 'プロジェクトページ'
                    }
                ]
            },
            {
                thumnailUrl: 'https://www.youtube.com/watch?v=OYtdHdW2QCU&list=PLD6iesuOnD4PeQOzbv5h4e0JavQmN9BDU&index=1',
                thumnailImg: Sara,
                projectSubtitle: '水中ROV',
                projectName: 'さらちゃん',
                competition: '',
                awardDictList: [],
                projectDescriptionList: [
                    '2019年の夏休みに初めて丑之日プロジェクトのメンバーが日本に勢揃いした際に、48時間という制限時間を設けて製作に挑戦した、水中ROV(Remotely Operated Vehicle)。  果たして時間内に完成させられたのか。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://www.youtube.com/watch?v=OYtdHdW2QCU&list=PLD6iesuOnD4PeQOzbv5h4e0JavQmN9BDU&index=1',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    }
                ]
            },
            {
                thumnailUrl: 'https://youtu.be/m8MCG3uwAD8',
                thumnailImg: Emi,
                projectSubtitle: 'スマートミラー',
                projectName: 'えみちゃん',
                competition: '',
                awardDictList: [],
                projectDescriptionList: [
                    '笑顔度を計測し、リアルタイムでその数値を鏡面に表示してくれるスマートミラー。100%を超えると自動音声が褒めてくれる。',
                    '「えみちゃん」と名付けられたこちらのスマートミラー、もちろん木枠から鏡面まで手作りし、「NT金沢2020」に出展された。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://youtu.be/m8MCG3uwAD8',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    }
                ]
            },
            {
                thumnailUrl: 'https://ushinohi.com',
                thumnailImg: WebDesign,
                projectSubtitle: '',
                projectName: 'Webサイト製作',
                competition: '',
                awardDictList: [],
                projectDescriptionList: [
                    'もっと色々な人に知ってもらう為に3Dプリンターと同時進行でこの丑之日Webサイトを作っています。',
                    'ハードウェアだけではなくソフトウエアにも挑戦しています。'
                ],
                snsButtonItemDictList: []
            },
            {
                thumnailUrl: 'https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A',
                thumnailImg: LChika,
                projectSubtitle: '',
                projectName: 'Lチカ',
                competition: '',
                awardDictList: [],
                projectDescriptionList: [
                    'Arduinoを使ってLEDを光らせるだけの丑之日では最短のプロジェクト。簡単すぎてプロジェクトとは言い辛いが、Arduinoの経験があまりない私たちはエラーに苦戦する。',
                    '苦悩の末3色の信号を作り上げた。'
                ],
                snsButtonItemDictList: [
                    {
                        type: 'img',
                        url: 'https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A',
                        img: YoutubeIcon,
                        alt: 'YouTube Logo'
                    }
                ]
            }
        ]
        return (
            <div>
                <h2 className="heading-projects" data-en="Projects">プロジェクト一覧</h2>
                <div className="project_main">
                    {projectList.map((projectItem)=>{
                        return(
                            <Project
                                thumnailUrl={projectItem.thumnailUrl}
                                thumnailImg={projectItem.thumnailImg}
                                projectSubtitle={projectItem.projectSubtitle}
                                projectName={projectItem.projectName}
                                competition={projectItem.competition}
                                awardDictList={projectItem.awardDictList}
                                projectDescriptionList={projectItem.projectDescriptionList}
                                snsButtonItemDictList={projectItem.snsButtonItemDictList}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Projects