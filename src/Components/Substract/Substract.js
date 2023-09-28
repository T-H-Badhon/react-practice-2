import React from 'react';

const Substract = (props) => {
    const {first, second}=props;
    const value=parseInt(first)-parseInt(second);
    return (
        <div>
            <p>{value}</p>
        </div>
    );
};

export default Substract;