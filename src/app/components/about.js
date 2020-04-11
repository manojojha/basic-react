import React, {useMemo, useEffect, useRef} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import increment from '../actions/increment';
import decrement from '../actions/decrement'
import Input from './input'
let renderCount = 0;
const useMemoHooks = () => {
    const inputRef = useRef(null);
    useEffect( () => {
        renderCount++;
        inputRef.current.focus();
    })
    return (<div>
        <h1>{renderCount}</h1>
        <input type="text"  ref={inputRef}/>
        <p>Forward Ref </p>
        <Input type="text" placeholder="forward ref" ref={inputRef}/> 
    </div>)
}
export const About = (params)=> {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

   const memoizeChild = useMemo( () => {
        return <useMemoHooks></useMemoHooks>
    },[counter])


    return (
        <div >
            <h1>About { params.msg}</h1> 
            <p>Counter: {counter}</p>
            {memoizeChild}
            <button onClick={()=>dispatch(increment(3))}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    
    )

}

//React Flow Tutorial ( Static Type Checking Props, State and set Default Props )
//react with typescrip -> create-react-app react-typescript --scripts-version=react-scripts-ts
//Higher Order Component -> takes component as argument
// Memo -> Memoize --> function return previously stored result (new way to Memoize Functional Components) if state does not change
// it protects from rerendering if state doesnot change eg. when counter changes then only render usMemoHooks Component
// useEffect gets called after page load
// Managing Side Effects with useEffect hook .   Understanding react lifecycle events being replaced with useEffect and  useLayoutEffect
// [] on initial load right after component mounted [i] whenever i changes (runs when i updates)
// we can use multiple useEffect in same component unlike class componentDidMount