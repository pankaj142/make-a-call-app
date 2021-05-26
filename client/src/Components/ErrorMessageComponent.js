import React from 'react';
import {Message} from "semantic-ui-react";
function ErrorMessageComponent( ) {
    return (
        <>
            <Message negative>
                <Message.Header>Sorry, could not connect the call. Please try again. </Message.Header>
            </Message>
        </>
    )
}

export default ErrorMessageComponent
