import React from 'react';

const Panel = ({ width, height, fill }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
            width={width}
            height={height}
            fill={fill}
        >
            <path
                d="M3 3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3zm0-1h15a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z">

            </path>
            <path
                d="M4 6h6v5H4zM11 10h6v5h-6zM4 12h6v3H4zM11 6h6v3h-6z">

            </path>
        </svg>
    );
};

export default Panel;