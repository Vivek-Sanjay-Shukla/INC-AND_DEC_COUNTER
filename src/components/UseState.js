import React, { useState } from 'react'
import './style.css'

const UseState = () => {

    const [counter, setCounter] = useState(1);


  return (
    <>
      <div className="center_div">
        <p>{counter}</p>
        <div onClick={() => {
            setCounter(counter + 1)
        }} 
        className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           INC
        </div>

        <div onClick={() => {
            counter > 1 ? setCounter(counter - 1) : setCounter(1)
        }}
         className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           DEC
        </div>

        <div onClick={() => {
            setCounter(counter * 2)
        }}
         className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           DOUB
        </div>

        <div onClick={() => {
            setCounter(1)
        }}
         className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           RESET
        </div>
      </div>
    </>
  )
}

export default UseState