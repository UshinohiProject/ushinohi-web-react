import React from 'react';
import './Shiori.css';
import Mars from './img/shiori/mars.png'
import Venus from './img/shiori/venus.png'

class Shiori extends React.Component {
    render() {
        return (
            <div className="safe-instructions">
                <h2 className="heading-safety" data-en="Safety">安全のしおり</h2>
                	<img className="safe-instruction" src={Mars} alt="Mars Safe Instruction"></img>
                	<img className="safe-instruction" src={Venus} alt="Venus Safe Instruction"></img>
            </div>
        );
    }
}

export default Shiori