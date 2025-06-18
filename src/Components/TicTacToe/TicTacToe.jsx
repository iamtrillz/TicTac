import React, { useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["","","","","","","","",""];

export const TicTacToe = () => {

    
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    
    const toggle = (e,num) => {
        if (lock) {
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num]="o";
            setCount(++count);
        }
        console.log('About to check Win')
        checkWin();
        console.log(`Win checked`)

    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data);
        }     
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            won(data);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")                            
        {
            won(data);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
            won(data);
        }

        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
            won(data);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
            won(data);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data);
        }
        /* else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data);
        } */
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
            won(data);
        }        
    }

    const won = (winner) => {
        setLock(true);
    }

  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes"onClick={(e)=>{toggle(e,0)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            </div>
        </div>
        <botton className="reset">Reset</botton>
    </div>
  )
}
