import React, { useEffect, useState } from 'react';
import Row from '../../components/Row/Row';
import classes from './Main.module.css'

const Main = () => {
    const ar0and1 = [
        ['\u2656' , '\u2658' , '\u2657' , '\u2654' , '\u2655' , '\u2657' , '\u2658' , '\u2656'],
        Array(8).fill('\u2659')
    ]
    const twoToFive =  Array(4).fill(Array(8).fill(''))
    const ar6to7 = [
        Array(8).fill('\u265F'),
        ['\u265C' , '\u265E' , '\u265D' , '\u265B' , '\u265A' , '\u265D' , '\u265E' , '\u265C']
    ]

    const [board , setBoard] = useState([...ar0and1 , ...twoToFive , ...ar6to7 ])

    // useEffect(() => {
    //     console.log([board])
    // } , [])

    const handleClick = () => {
        console.log('hello')
    }

    return (
        <div className={classes.board}>
            {
                board.map((row , index) => (
                    <Row index = {index} data ={row} handleClick = {handleClick}/>
                ))
            }
        </div>
  );
};

export default Main;
