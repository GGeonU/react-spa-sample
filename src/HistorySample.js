import React, {Component} from 'react';

const HistorySample = (props) => {

    console.log(props);

    const handleGoBack = () => {
        props.history.goBack();
    };

    const handleGoHome = () => {
        props.history.push('/');
    };

    return (
        <div>
            <button onClick={handleGoBack}>back</button>
            <button onClick={handleGoHome}>home</button>
        </div>
    )
};

export default HistorySample;