import React from 'react';
import './Shiori.css';
import Mars from './img/shiori/mars.png'
import Venus from './img/shiori/venus.png'

class Shiori extends React.Component {
    render() {
        return (
            <div className="shiori">
                <h2 className="heading-safety" data-en="Safety">安全のしおり</h2>
                <div className="safe-instructions">
                    <a href={Mars} target="_blank" rel="noopener noreferrer">
                        <img className="safe-instruction" src={Mars} alt="Mars Safe Instruction" />
                    </a>
                    <a href={Venus} target="_blank" rel="noopener noreferrer">
                        <img className="safe-instruction" src={Venus} alt="Venus Safe Instruction" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Shiori
