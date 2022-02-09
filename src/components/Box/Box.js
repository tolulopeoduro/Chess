import React, { useEffect } from 'react';
import classes from './Box.module.css'

const Box = (props) => {

    const {index , data , handleClick} = props
    

    return (
        <div className={classes.box} onClick={handleClick} >
            {data}
        </div>
    );
};

export default Box;
