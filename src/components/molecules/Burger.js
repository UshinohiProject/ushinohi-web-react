import React from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

class Burger extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//     .
//     .
//     .
//   }

    render () {
        return (
            <Menu right>
                {/* <a id="Top" className="menu-item" href="/">Top</a> */}
                <Link to="/">Top</Link>
                {/* <a id="Members" className="menu-item" href="/about">Members</a> */}
                <Link to="/Members">Members</Link>
                {/* <a id="Projects" className="menu-item" href="/Projects">Contact</a> */}
                <Link to="/Projects">Projects</Link>
                <a id="YouTube" className="menu-item" href="https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A">Contact</a>
                <a id="Twitter" className="menu-item" href="https://twitter.com/UshinohiProject">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default Burger