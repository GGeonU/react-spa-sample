import React from 'react';
import {CounterConsumer} from "./counter";

const CounterBox = () => {
    return (
        <CounterConsumer>
            {value => (
                <div>
                    <h1>{value.state.number}</h1>
                    <button onClick={() => value.actions.setNumber(value.state.number + 1)}>+1</button>
                </div>
            )}
        </CounterConsumer>
    )
};

export default CounterBox;