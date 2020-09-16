import React, { Component } from 'react';
import Login from './login';
import { withRouter } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="cursor-pointer"  onClick={()=> this.props.history.push('/')}>
                        <img className="you navbar-brand" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-youtube-social-media-icon-png-image_3572474.jpg" alt="user" />
                        <h3 className="navbar-brand">Mytube</h3>
                    </div>
                    <Login />
                </nav>
            </div>
        )
    }
}

export default withRouter(Header);