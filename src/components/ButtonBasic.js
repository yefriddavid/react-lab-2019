import React from 'react'
import { Button } from 'reactstrap';


const ButtonBasic = ({callback}) => {

    return (
            <Button color="danger" onClick={callback}>
                {console.log("rendered simple button")}
                Add one more from <b>simple</b>!
            </Button>
        );

};


export default ButtonBasic;

