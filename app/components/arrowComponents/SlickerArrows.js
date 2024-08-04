import React from 'react';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'red', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'red', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export { NextArrow, PrevArrow };
