import React from 'react';
import './Project.css';

class Project extends React.Component {
    // // constructorを定義
    // constructor(props) {
    //   super(props);
    // };
    render() {
        let snsButtons
        let awards
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
        if (this.props.awardList.length !== 0) {
            awards = (
                <div>
                    {this.props.awardList.map((awardItem)=>{
                        return(
                            <div>
                                <h2 className="award-ribbon"><span>{awardItem}</span></h2>
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
                    <p className="project_name">{this.props.projectName}</p>
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