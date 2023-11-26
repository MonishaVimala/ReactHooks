import {useState, useReducer} from 'react'


const reducer = (state,action) =>{
    if((action.type === "plus")){
       return state+1;
    }else{
        return state-1;

    }
  return action;
}


function useReducerExample() {
    // const [count,setCount] = useState(0);
    const [count,dispatch] = useReducer(reducer,0)
    return (
        <>
          <div>
              {count}
              <button onClick={e => dispatch({type:"plus"})}>inc reducer</button>
              <button onClick={e => dispatch({type:"minus"})}>dec reducer</button>
              {/* <button onClick={e => dispatch(count+1)}>inc reducer</button>
              <button onClick={e => dispatch(count-1)}>dec reducer</button> */}
          </div>  
        </>
    )
}

export default useReducerExample
