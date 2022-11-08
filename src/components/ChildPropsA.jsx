import React, { useState } from 'react';


export const ChildPropsA = (props) => {
    return(
        <div>
            {props.fromUser}
            <button onClick={() => props.setFromUser('bbb')}>change</button>
        </div>
    )
}
