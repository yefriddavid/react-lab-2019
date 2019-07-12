import React from 'react'

const ButtonBasic = ({callback}) => {

    return (
            <button className="Button__add" onClick={callback}>
                {console.log("rendered simple button")}
                Add one more simple!
            </button>
        );

};


export default ButtonBasic;

