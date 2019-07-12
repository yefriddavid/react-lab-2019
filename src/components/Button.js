import React from 'react'

const Button = React.memo(({callback}) => {

    return (
            <button className="Button__add" onClick={callback}>
                {console.log("Renderd memo button")}
                Add one more!
            </button>
        );

});


export default Button;

