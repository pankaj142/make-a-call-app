import React from 'react';
import {Message, Divider} from "semantic-ui-react";
function ErrorMessageComponent({errorMessage}) {
    return (
        <>
            <Message negative>
                <Message.Header>Sorry, call could not be connected. Please try again. </Message.Header>
                {errorMessage.length > 0 && <>
                    <Divider/>
                    {errorMessage.map((msg)=><p>{msg} </p>)}
                </>}
            </Message>
        </>
    )
}

export default ErrorMessageComponent
