
import {Form, Button, Segment} from "semantic-ui-react";
import {React, useState} from 'react';

function FormComponent({onFormSubmit}){
    const [user, setUserData] = useState({
        userName: "",
        phone_no1:"",
        phone_no2:"",
        call_duration: '5'

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("sdsddsddsd",user)
        onFormSubmit(user.call_duration)
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
                    name="userName"
                    value={user.userName}
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
                        name="phone_no1"
                        value={user.phone_no1}
                        onChange={handleChange}
                        fluid
                        icon="phone"
                        iconPosition="left"
                        required
                    />  
                    <Form.Input
                        label="Receiver Phone Number"
                        placeholder="Enter Receiver Phone Number "
                        name="phone_no2"
                        value={user.phone_no2}
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
                        name="call_duration"
                        label='Small'
                        value='5'
                        checked={user.call_duration === '5'}
                        onChange={handleChange}
                    />
                    <Form.Input
                        type='radio'
                        name="call_duration"
                        label='Medium'
                        value='10'
                        checked={user.call_duration === '10'}
                        onChange={handleChange}
                    />
                    <Form.Input
                        type='radio'
                        name="call_duration"
                        label='Large'
                        value='15'
                        checked={user.call_duration === '15'}
                        onChange={handleChange}
                    />
                </Form.Group>
                
                <Button color="grey" type='submit'>Call</Button>
            </Segment>
        </Form>
        </>
    )
}

export default FormComponent;