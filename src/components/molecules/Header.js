import React from 'react';
import Burger from './Burger'
import { Link } from 'react-router-dom'
import './Header.css';
import UshinohiLogo from './img/icon_header.jpg'

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="h1-header-logo">
                    <Link to="/">
                        <img
                            src={UshinohiLogo}
                            alt="Ushinohi Project | 妄想あるのみ。"
                            className="header-logo"
                        />
                    </Link>
                </h1>
                <nav className="nav-pc">
                    <ul>
                        <li>
                            <Link to="/">Top</Link>
                        </li>
                        <li>
                            <Link to="/Members">Members</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/Business">Business</Link>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A">YouTube</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/UshinohiProject">Twitter</a>
                        </li>
                    </ul>
                </nav>
                <div className="nav-sp">
                    <Burger right />
                </div>
            </header>
        );
    }
}

export default Header