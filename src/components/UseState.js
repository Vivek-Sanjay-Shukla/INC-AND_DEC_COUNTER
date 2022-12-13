import React, { useEffect, useReducer/* useState */} from 'react'
import './style.css'

const reducer = (state,action) => {
     
     if(action.type === "INC"){
        state = state + 1;
     }
     
     if(state > 1 && action.type === "DEC"){
      state = state - 1;
     }
    
     if(action.type === "DOUB"){
        state = 2 * state;
      }
    
      if(action.type === "RESET"){
        state = 1;
      }
     
      return state;
}

const UseState = () => {

  // const [counter, setCounter] = useState(1);
  
  // useEffect feature

  //  using useReducer as it works almost same as useState
  const initialData = 1;
  const [state, dispatch] = useReducer(reducer,initialData);

  useEffect(() => {
    document.title = `Count(${state})`;
    // console.log("Hi");
});


  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        {/* <div onClick={() => {
            setCounter(counter + 1)
        }}  
        className="button2">
        */}
        <div onClick={() => dispatch({type:"INC"})}
        className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           INC
        </div>

        {/* <div onClick={() => {
            counter > 1 ? setCounter(counter - 1) : setCounter(1)
        }}
         className="button2"> */}
                <div onClick={() => dispatch({type:"DEC"})}
        className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           DEC
        </div>

        {/* <div onClick={() => {
            setCounter(counter * 2)
        }}
         className="button2"> */}
         <div onClick={() => dispatch({type:"DOUB"})}
        className="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           DOUB
        </div>

        <div onClick={() => dispatch({type:"RESET"})}
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

// VIvek Shukla