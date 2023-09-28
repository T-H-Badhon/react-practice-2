import React from 'react';

const Add = (props) => {
    const {first,second}=props;
    const sum=parseInt(first)+parseInt(second);
    return (
        <div>
            <p>{sum}</p>
        </div>
    );
};

export default Add;