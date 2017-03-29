import React, { Component } from 'react';
import image01 from '../asset/img/01.jpg';

class App extends Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                <h2>this is {name || 'app'} app component!</h2>
                <p>
                    <img src={image01} />
                </p>
                <div className="box"></div>
            </div>
        )
    }
}

export default App;
