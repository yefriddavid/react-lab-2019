import React from 'react'
import { Button } from 'reactstrap';

const ButtonMemo = React.memo(({callback}) => {

    return (
            <Button type="info" className="Button__add" onClick={callback}>
                {console.log("Renderd memo button")}
                Add one more from <b>memo</b>!
            </Button>
        );

});


export default ButtonMemo;

