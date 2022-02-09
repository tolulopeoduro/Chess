import React, { useEffect } from 'react';
import Box from '../Box/Box';
import classes from './Row.module.css'

const Row = (props) => {

    const { index , data , handleClick } = props


  return (
      <div className={classes.row}>
          {
              data.map((d) => (
                  <Box data={d} handleClick = {handleClick}/>
              ))
          }
      </div>
  );
};

export default Row;
