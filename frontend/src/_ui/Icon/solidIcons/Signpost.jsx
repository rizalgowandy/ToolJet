import React from 'react';

const Signpost = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9998 2.78906H11.9998C11.4475 2.78906 10.9998 3.23678 10.9998 3.78906V6.72694L13.9998 4.99489V3.78906C13.9998 3.23678 13.552 2.78906 12.9998 2.78906ZM10.9998 21.7891V17.1193L13.9998 15.3872V21.7891C13.9998 22.3413 13.552 22.7891 12.9998 22.7891H11.9998C11.4475 22.7891 10.9998 22.3413 10.9998 21.7891ZM10.9998 8.45895L4.36589 12.2891C3.8876 12.5652 3.72372 13.1768 3.99986 13.6551L5.99986 17.1192C6.27601 17.5975 6.8876 17.7613 7.36589 17.4852L10.9998 15.3872L13.9998 13.6551L19.1315 10.6923C19.3612 10.5597 19.5288 10.3413 19.5975 10.0851L20.3295 7.35306C20.4724 6.81959 20.1559 6.27125 19.6224 6.12831L16.8903 5.39626C16.6342 5.32762 16.3612 5.36355 16.1315 5.49616L13.9998 6.7269L10.9998 8.45895Z"
      fill={fill}
    />
  </svg>
);

export default Signpost;
