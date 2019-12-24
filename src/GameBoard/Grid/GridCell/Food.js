
import React from 'react';
import GridCell from "./GridCell";
import defaultGrid from './defaultGrid';

 function Food(props) {
    const foodProps = Object.assign({}, {...props}, {...defaultGrid}, {isFood: true})
    return <GridCell {...foodProps} />
}

export default React.memo(Food);