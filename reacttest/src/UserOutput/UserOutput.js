import React from 'react';

const userOutput = ( props ) => {
    return(
        <div>
            <p>{props.paraOne}</p>
            <p>In the another paragraph, we show the user's name: {props.username}</p>
        </div>
    )
};

export default userOutput;