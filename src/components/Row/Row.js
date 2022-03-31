import React, { useEffect } from 'react';
import Box from '../Box/Box';
import classes from './Row.module.css'
import cx from 'classnames'

const Row = (props) => {

    const { row , data , handleClick } = props



    return (
        <div className={cx(classes.row , 'row')}>
            {
                data.map((d , index) => (
                    <Box data={d} key = {index} box = {index} row = {row} handleClick = {handleClick}/>
                ))
            }
        </div>
    );
};

export default Row;
