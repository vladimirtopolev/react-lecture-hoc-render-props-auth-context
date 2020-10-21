import React from 'react';

export default (props) => {
    const id = props.match.params.id;
    return (
        <div style={{margin: '40px'}}>
            id: {id}
        </div>
    )
}