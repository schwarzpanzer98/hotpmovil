import React from 'react';

const Sales = ({ width, height, fill }) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
        >
            <path d="M4.362 4.039A1.072 1.072 0 0 1 4.645 4H19.97C20.54 4 21 4.448 21 5a.972.972 0 0 1-.025.217l-1.602 7a1.024 1.024 0 0 1-1.005.783H6.518L7 15.005V15h12v1H7v-.604l-1.062.403L2.753 2H0V1h4v1h-.129l.49 2.039zM4.698 5l1.72 7h11.95l1.602-7H4.698z"></path>
            <path opacity=".6" d="M6 15h1v1H6z"></path>
            <circle cx="16.5" cy="18.5" r="1.5"></circle>
            <circle cx="7.5" cy="18.5" r="1.5"></circle>
            <path d="M9 8h7v1H9z"></path>
        </svg>
    );
};

export default Sales;