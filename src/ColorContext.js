import {createContext} from 'react';

const ColorContext = createContext(
    {
        color: 'skyblue',
        number: 1
    });

export default ColorContext;