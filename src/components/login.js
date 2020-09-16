import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';
import { Logout, Login_user } from '../redux/action/user';
import { bindActionCreators } from 'redux';
class Login extends Component {
    componentDidMount() {
        //console.log(this.props)
    }
    responseGoogle = async (response) => {
        localStorage.setItem('accessToken',response.wc.access_token);
        await this.props.Login_user(response.profileObj)
        // console.log(response);
    }
    render() {
        return (
            <div className="row">
                <div className="name">
                    {(this.props.isAuthenticating && this.props.user) &&
                        <p>
                            <img className="image" src={this.props.user.imageUrl}  alt="video"/>
                            {this.props.user.name}
                        </p>
                    }
                </div>

                <div className="user">
                    <nav className="navbar navbar-light bg-light">
                        {(this.props.isAuthenticating && this.props.user) ?
                            <div className="navbar-brand" onClick={() => this.props.Logout()}>
                                <GoogleLogout
                                    clientId="918874479926-6s6aginv7e5qldqik095hmt507qtfsm5.apps.googleusercontent.com"
                                    buttonText="Logout"
                                    onLogoutSuccess={() => console.log('logout')}
                                />
                            </div>
                            : <div>
                                <GoogleLogin
                                    clientId="918874479926-6s6aginv7e5qldqik095hmt507qtfsm5.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'} />

                            </div>
                        }
                    </nav>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        isAuthenticating: state.userReducer.isAuthenticating
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        Login_user, Logout
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);