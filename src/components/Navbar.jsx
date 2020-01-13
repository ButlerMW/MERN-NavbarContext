// This component should be your navbar which contains the greeting.

import React, { useState, useContext } from 'react';
import Wrapper from './Wrapper';

const Navbar = () => {
    const context = useContext(Wrapper);

    return(
        <div>
            <header>
                <span >Hi {context.state} </span>
            </header>
        </div>
    )
}

export default Navbar;