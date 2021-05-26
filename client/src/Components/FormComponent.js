
import {Form, Button, Segment, Header, Modal} from "semantic-ui-react";
import {React, useState, useRef} from 'react';
const axios = require('axios');
const BASE_API_URL = "http://localhost:4000";

function FormComponent(){
    const [open, setOpen] = useState(false);
    const pendingTime = useRef(0);
    const [user, setUserData] = useState({
        username: "",
        user_phone:"",
        receiver_phone:"",
        duration: '5'
    })

    // const countDown = (seconds)=>{

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: `${BASE_API_URL}/api/call`, 
            method : 'POST',
            headers: { 'content-type': 'application/json' },
            mode: 'no-cors',
            data : user
          })
            .then(response => {
              pendingTime.current = parseInt(user.duration)*60;
              setOpen(true);
              console.log("ress", response);
            })
            .catch((error) => {
              console.log("error",error);
            });
    };

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUserData((prev) =>({...prev, [name]: value}))
        console.log("user",user)
    }
      
    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Segment>
                    <Form.Input
                        label="User Name"
                        placeholder="Enter User Name"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        fluid
                        icon="user"
                        iconPosition="left"
                        required
                    />
                    <Form.Group widths='equal'>
                        <Form.Input
                            label="Phone Number"
                            placeholder="Enter Your Phone Number"
                            name="user_phone"
                            value={user.user_phone}
                            onChange={handleChange}
                            fluid
                            icon="phone"
                            iconPosition="left"
                            required
                        />  
                        <Form.Input
                            label="Receiver Phone Number"
                            placeholder="Enter Receiver Phone Number "
                            name="receiver_phone"
                            value={user.receiver_phone}
                            onChange={handleChange}
                            fluid
                            icon="phone"
                            iconPosition="left"
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group inline>
                        <label>Call Duration :</label>
                        <Form.Input
                            type='radio'
                            name="duration"
                            label='Small'
                            value='5'
                            checked={user.duration === '5'}
                            onChange={handleChange}
                        />
                        <Form.Input
                            type='radio'
                            name="duration"
                            label='Medium'
                            value='10'
                            checked={user.duration === '10'}
                            onChange={handleChange}
                        />
                        <Form.Input
                            type='radio'
                            name="duration"
                            label='Large'
                            value='15'
                            checked={user.duration === '15'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Button color="grey" type='submit'>Call</Button>
                </Segment>
            </Form>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                centered={false}
                open={open}
                >
                <Modal.Header>Call Details</Modal.Header>
                <Modal.Content>
                    {/* <Image size='medium' src='/images/avatar/large/rachel.png' wrapped /> */}
                    <Modal.Description>
                    <Header>Hello {user.username}</Header>
                    <Header>You are talking to : {user.receiver_phone}</Header>
                    <Header>Call will ends in : {pendingTime.current} Seconds</Header>
                    <p>
                       hello
                    </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                    </Button>
                    <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                    />
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default FormComponent;