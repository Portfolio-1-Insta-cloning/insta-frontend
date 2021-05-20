import React from 'react';

const Success = (props) => {
    return (
        <div>
            <h1>welcome, { props.currentUser.username} !</h1>
        </div>
    )
}

export default Success