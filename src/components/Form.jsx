
///////////////// This component should actually hold the imput field //////////////////

import React, { useState, useContext } from 'react';
import Wrapper from './Wrapper'

const Form = () => {
    // const [state, setState] = useState({
    //     firstName: ""
    // })
    const context = useContext(Wrapper);
    const onChangeHandler = e => { //MITE NOT NEED THESE    
        e.preventDefault();
        context.setState(
            context.state = e.target.value
        )
        }
    
    // const onSubmitHandler = e => { //SAME
    //     e.preventDefault();
    // }

    return(
        <div>
            <span>Your Name:  </span>
            <input type="text" name="firstName" onChange={onChangeHandler} />
        </div>
    )
}

export default Form;