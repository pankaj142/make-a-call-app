
import {Segment} from "semantic-ui-react";
function TimerComponent({time}) {
    return (
        <>
            <Segment>
                This is timer {time} 
            </Segment>
        </>
    );
}

export default TimerComponent;