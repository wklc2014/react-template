import React, { Component } from 'react';

class Test extends Component {
    render() {
        const {name} = this.props;
        const text = name || 'home';
        return (
            <div>
                <h2>this is Test component!</h2>
                <p>
                    123
                </p>
                <p>
                    <a href={`${text}.html`}>{text}</a>
                </p>
            </div>
        )
    }
}

export default Test;
