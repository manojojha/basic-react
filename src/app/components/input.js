import React, {forwardRef} from 'react';
function Input({type,placeholder},ref) {
    return <input type={type} placeholder={placeholder} ref={ref}/>
}

const forwardInput = forwardRef(Input); 

export default forwardInput;


//forward ref into a component (cant pass ref into an component directly as props)