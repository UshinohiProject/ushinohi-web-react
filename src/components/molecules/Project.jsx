import React from 'react';
import './Project.css';

class Project extends React.Component {
    // // constructorを定義
    // constructor(props) {
    //   super(props);
    // };
    render() {
        let projectSubtitle
        let snsButtons
        let competition
        let awards
        if (this.props.projectSubtitle !== '') {
            projectSubtitle = (
                <p className="project-subtitle">
                    {this.props.projectSubtitle}
                </p>
            )
        }
        if (this.props.snsButtonItemDictList.length !== 0) {
            snsButtons = (
                <div className="sns-buttons">
                    {this.props.snsButtonItemDictList.map((snsButtonItemDict)=>{
                        if (snsButtonItemDict['type'] === 'img') {
                            return(
                                <div>
                                    <a href={snsButtonItemDict['url']} target="_blank" rel="noopener noreferrer">
                                        <img className="sns_icon" src={snsButtonItemDict['img']} alt={snsButtonItemDict['alt']}></img>
                                    </a>
                                </div>
                            )
                        } else if (snsButtonItemDict['type'] === 'a') {
                            return(
                                <div className='button-sns'>
                                    <a href={snsButtonItemDict['url']} target="_blank" rel="noopener noreferrer">
                                        {snsButtonItemDict['text']}
                                    </a>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
            )
        }
        if (this.props.competition !== '') {
            competition = (
                <div>
                    <h2 className="competition-ribbon"><span>{this.props.competition}&nbsp;参加作品</span></h2>
                </div>
            )
        }
        if (this.props.awardDictList.length !== 0) {
            awards = (
                <div>
                    {this.props.awardDictList.map((awardDict)=>{
                        return(
                            <div>
                                <h2 className="award-ribbon"><span className='awarded-competition-name'>{awardDict.competitionName}<br/></span>{awardDict.awardTitle}&nbsp;受賞</h2>
                            </div>
                        )
                    })}
                </div>
            )
        }
        return(
            <div className="project">
                <div className="project_content_pic">
                    <a href={this.props.thumnailUrl} target="_blank" rel="noopener noreferrer">
                        <img className="project_pic project-pic-round" src={this.props.thumnailImg} alt="project's thumbnail"></img>
                    </a>
                </div>
                <div className="project_content">
                    {projectSubtitle}
                    <p className="project_name">{this.props.projectName}</p>
                    {competition}
                    {awards}
                    {this.props.projectDescriptionList.map((projectDescription)=>{
                        return(
                            <p className="project_description">&nbsp;&nbsp;{projectDescription}</p>
                        )
                    })}
                    {snsButtons}
                </div>
            </div>);
    }
}

export default Project;