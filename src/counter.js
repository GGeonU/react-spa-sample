import React, {createContext, useState} from 'react';

const CounterContext = createContext({
    number: 0,
    actions: {
        setNumber: () => {},
    }
});

const CounterProvider = ({children}) => {
    const [number, setNumber] = useState(0);
    const value = {
        state: {number},
        actions: {setNumber}
    };
    return(
        <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
    );
};

const CounterConsumer = CounterContext.Consumer;
export {CounterProvider, CounterConsumer};

export default CounterContext;


