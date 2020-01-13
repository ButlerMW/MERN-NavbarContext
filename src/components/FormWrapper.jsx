// This component should only wrap the Form Component as its child. This is to illustrate 
// that you can use nested components with context without passing down props.


import React, { useState, useContext } from 'react';
import Form from './Form';

const FormWrapper = () => {
    
    return(
        <div>
            <Form />
        </div>
    )
}

export default FormWrapper;