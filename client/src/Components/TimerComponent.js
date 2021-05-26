import React from 'react';
import {Message} from "semantic-ui-react";
function TimerComponent({ timeInSeconds, disconnect }) {
    const [time, setTime] = React.useState(timeInSeconds);

    React.useEffect(() => {
        if (time === 0) {
            disconnect();
        }
        time > 0 && setTimeout(() => setTime(time - 1), 1000);
    }, [time]);

    return (
        <>
            <Message negative>
                <Message.Header>This Call will End in : {time} Seconds</Message.Header>
            </Message>
        </>
    )
}

export default TimerComponent
