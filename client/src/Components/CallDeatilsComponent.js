
import {Button,  Header, Modal, Segment, Divider, Grid} from "semantic-ui-react";
import TimerComponent from './TimerComponent';

function CallDeatilsComponent({user, toggelModal, open}) {
    return (
        <>
            <Modal
                centered={false}
                open={open}
                >
                <Modal.Header>Call Details</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Segment placeholder>
                            <Grid columns={2} relaxed='very' stackable>
                            <Grid.Column>
                                <Header>Hello {user.username}</Header>
                                <Header>You are talking to {user.receiver_phone}</Header>
                                <Header>Call Duration is {user.duration} Mins</Header>
                            </Grid.Column>

                            <Grid.Column verticalAlign='middle'>
                            <Header><TimerComponent timeInSeconds={parseInt(user.duration)*60} disconnect={toggelModal}/></Header>
                                {/* <Header><TimerComponent timeInSeconds={10} disconnect={toggelModal}/></Header> */}
                            </Grid.Column>
                            </Grid>
                            <Divider vertical>And</Divider>
                        </Segment>
                            
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button inverted color='yellow' onClick={() => toggelModal()}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
}

export default CallDeatilsComponent;