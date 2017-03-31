import React, { Component } from 'react';
import { Button } from 'antd';
import ServiceLogin from '../../service/Serverlogin.js';

class Test extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const params = {
            username: 'test123',
            password: 'password456'
        }
        ServiceLogin(params, (stat, resp) => {
            console.log(resp)
        });
    }

    render() {
        const {name} = this.props;
        const text = name || 'home';
        return (
            <div>
                <h2>this is Test component!</h2>
                <p>
                    <Button
                        onClick={this.handleClick}
                    >
                        登陆
                    </Button>
                </p>
                <p>
                    <a href={`${text}.html`}>{text}</a>
                </p>
            </div>
        )
    }
}

export default Test;
