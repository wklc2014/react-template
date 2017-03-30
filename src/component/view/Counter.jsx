import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';

class Counter extends Component {

    static defaultProps = {
        autoPlay: false
    }

    static PropTypes = {
        counter: React.PropTypes.number.isRequired,
        ActionIncrement: React.PropTypes.func.isRequired,
        ActionDecrement: React.PropTypes.func.isRequired,
        ActionIncrementIfOdd: React.PropTypes.func.isRequired,
        ActionIncrementAsync: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    handleClick(operate) {
        this.setState({
            disabled: operate === 'IncrementAsync'
        }, () => {
            this.props[`Action${operate}`]();
        });
    }

    render() {

        const {counter} =this.props;

        return (
            <div className="appWraper">
                <h2 className="mb16">
                    this is Counter component {counter}
                </h2>
                <div className="mb16">
                    <Button
                        className="mr16"
                        type="primary"
                        onClick={this.handleClick.bind(this, 'Increment')}
                    >
                        +
                    </Button>
                    <Button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'Decrement')}
                    >
                        -
                    </Button>
                    <Button
                        className="mr16"
                        onClick={this.handleClick.bind(this, 'IncrementIfOdd')}
                    >
                        Increment if odd
                    </Button>
                    <Button
                        type="danger"
                        disabled={this.state.disabled}
                        onClick={this.handleClick.bind(this, 'IncrementAsync')}
                    >
                        Increment async
                    </Button>
                </div>
                <div className="box" />
            </div>
        );
    }
}

export default Counter;
