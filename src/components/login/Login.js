import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: []
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {username,password,error} = this.state;
        console.log(this.state);
        return (
            <div>
                LOGIN <br/> <br/>
                <div>
                    Username <br/><br/> 
                    <input  value={username} onChange={(event) => this.handleChange(event)} type="name" name="username"/>
                </div>
                <div>
                    Password <br/>
                    <input type="password"></input>
                </div> <br/> <br/>
                <input type="button" value="Login"/>
            </div>
        );
    }
}

export default Login;