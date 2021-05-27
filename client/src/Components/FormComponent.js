
import {Form, Button, Segment,  Dimmer, Loader, Image} from "semantic-ui-react";
import {React, useState} from 'react';
import CallDeatilsComponent from "./CallDeatilsComponent";
import ErrorMessageComponent from './ErrorMessageComponent';

const axios = require('axios');
const BASE_API_URL = "http://localhost:4000";

function FormComponent(){
    const [open, setOpen] = useState(false);
    const [errorView, setErrorView] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [errorMessage, seterrorMessage] = useState([]);
    const [user, setUserData] = useState({
        username: "",
        user_phone:"",
        receiver_phone:"",
        duration: '5'
    })

    const handleSubmit = (e) => {
        setShowLoader(true);
        setErrorView(false);
        e.preventDefault();
        axios({
            url: `${BASE_API_URL}/api/call`, 
            method : 'POST',
            headers: { 'content-type': 'application/json' },
            mode: 'no-cors',
            data : user
          })
            .then(response => {
              setShowLoader(false);
              setOpen(true);
            })
            .catch((error) => {
                let err_data = error.response.data;
                let err_msg = [];
                if(err_data && err_data.data.length){
                    for (let i = 0; i < err_data.data.length; i++) { 
                        err_msg.push(err_data.data[i].msg)
                      }
                }
                setShowLoader(false);
                setErrorView(true);
                seterrorMessage(err_msg);
            });
    };

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUserData((prev) =>({...prev, [name]: value}))
    }

    const toggelModal = () => {
        setOpen(prev =>!prev)
        setUserData({
            username: "",
            user_phone:"",
            receiver_phone:"",
            duration: '5'
        })
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
                            label='5 Mins'
                            value='5'
                            checked={user.duration === '5'}
                            onChange={handleChange}
                        />
                        <Form.Input
                            type='radio'
                            name="duration"
                            label='10 Mins'
                            value='10'
                            checked={user.duration === '10'}
                            onChange={handleChange}
                        />
                        <Form.Input
                            type='radio'
                            name="duration"
                            label='15 Mins'
                            value='15'
                            checked={user.duration === '15'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Button color="grey" type='submit'>Call</Button>
                </Segment>
            </Form>

            {/* <Segment> */}
                <Dimmer active={showLoader} inverted>
                    <Loader inverted content='Calling...' />
                </Dimmer>

                {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
            {/* </Segment> */}

            <CallDeatilsComponent user={user} open={open} toggelModal={toggelModal}/>
            { errorView && <ErrorMessageComponent errorMessage ={errorMessage}/>}
        </>
    )
}

export default FormComponent;