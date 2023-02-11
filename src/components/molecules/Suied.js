import React, { Component } from 'react';
import River from './img/sui/river.jpeg'

import './Suied.css';

export default class Suied extends Component {
    render() {
        return (
            <div>
                <div class="example">
                    <img src={River} alt='a river' className='river'/>
                </div>
                <p>{this.props.location.state.text}</p>
                <p>これで仲直り。</p>
            </div>
        );
    }
}
