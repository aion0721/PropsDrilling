import React, { useState } from 'react';


export const ChildPropsB = (props) => {
    return(
        <div>
            {props.fromUser}
            <button onClick={() => props.setFromUser('ccc')}>change</button>
        </div>
    )
}
