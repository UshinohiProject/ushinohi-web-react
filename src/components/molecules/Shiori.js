import React from 'react';
import './Shiori.css';
import Mars from './img/shiori/mars.png'
import Venus from './img/shiori/venus.png'

class Shiori extends React.Component {
    render() {
        return (
            <div className="policies">
                <h2 className="heading-safety" data-en="Safety">安全のしおり</h2>
                	<img className="safety-instruction" src={Mars} alt="Mars Safety Instruction"></img>
                	<img className="safety-instruction" src={Venus} alt="Venus Safety Instruction"></img>
            </div>
        );
    }
}

export default Shiori