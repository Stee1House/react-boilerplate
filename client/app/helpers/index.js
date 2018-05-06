import React from 'react';

export const SVGIcon = ({ width, height, viewBox, id }) => {
    return (
      <svg width={width} height={height} viewBox={viewBox}>
        <use xlinkHref={`${require('svg/sprite.svg')}${id}`} />
      </svg>
    );
};
