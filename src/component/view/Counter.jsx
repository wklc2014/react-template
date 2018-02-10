import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class Counter extends Component {

    static defaultProps = {
        autoPlay: false
    }

    static PropTypes = {
        counter: PropTypes.number.isRequired,
        ActionIncrement: PropTypes.func.isRequired,
        ActionDecrement: PropTypes.func.isRequired,
        ActionIncrementIfOdd: PropTypes.func.isRequired,
        ActionIncrementAsync: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 'this example state'
        };
    }

    handleClick(operate) {
        this.props[`Action${operate}`]();
    }

    render() {

        const {counter, disabled} =this.props;

        return (
            <div className="appWraper">
                <h2 className="mb16">
                    this is Counter component {counter}
                </h2>
                <div className="mb16">
                    <Button
                        className="mr16"
                        type="primary"
                        disabled={disabled}
                        onClick={this.handleClick.bind(this, 'Increment')}
                    >
                        +
                    </Button>
                    <Button
                        className="mr16"
                        disabled={disabled}
                        onClick={this.handleClick.bind(this, 'Decrement')}
                    >
                        -
                    </Button>
                    <Button
                        className="mr16"
                        disabled={disabled}
                        onClick={this.handleClick.bind(this, 'IncrementIfOdd')}
                    >
                        Increment if odd
                    </Button>
                    <Button
                        type="danger"
                        disabled={disabled}
                        onClick={this.handleClick.bind(this, 'IncrementAsync')}
                    >
                        Increment async
                    </Button>
                </div>
                <p className="baseLine">{this.state.number}</p>
                <div className="box" />
            </div>
        );
    }
}

export default Counter;
