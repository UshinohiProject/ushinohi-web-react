import React from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';

class Burger extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
  
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }

    render () {
        return (
            <Menu
                right
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
                {/* <a id="Top" className="menu-item" href="/">Top</a> */}
                <Link onClick={() => this.closeMenu()} to="/">Top</Link>
                {/* <a id="Members" className="menu-item" href="/about">Members</a> */}
                <Link onClick={() => this.closeMenu()} to="/Members">Members</Link>
                {/* <a id="Projects" className="menu-item" href="/Projects">Contact</a> */}
                <Link onClick={() => this.closeMenu()} to="/Projects">Projects</Link>
                <Link onClick={() => this.closeMenu()} to="/Business">Business</Link>
                <a onClick={() => this.closeMenu()} id="YouTube" className="menu-item" href="https://www.youtube.com/channel/UCvTSx-2FzWu-x_wDwKjXN5A">YouTube</a>
                <a onClick={() => this.closeMenu()} id="Twitter" className="menu-item" href="https://twitter.com/UshinohiProject">Twitter</a>
            </Menu>
        );
    }
}

export default Burger