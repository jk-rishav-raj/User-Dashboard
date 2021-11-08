import { useState,useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import swal from 'sweetalert';

const AddEntry = ({onAdd}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        const newEntry = {
            name, email, state, country
        }

        try{
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            };

            const body = JSON.stringify(newEntry);

            const res = await axios.post('/profile', body, config);
            //.setItem('token', res.data.token);
            //console.log(res.data);
            //setAuthenticated(true);
            onAdd({name, email, state, country});

            setName('');
            setEmail('');
            setState('');
            setCountry('');
        }
        catch(err){
            swal({
                text: `${err.response.data.errors[0].msg}`,
                icon: "error"
            });
        }
    }

    return(
        <>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label> Name </Label>
                    <Input
                        name="name"
                        placeholder="Name"
                        value={name}
                        type="text"
                        onChange = {(event) => setName(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label> Email </Label>
                    <Input
                        name="email"
                        placeholder="Email"
                        value={email}
                        type="email"
                        onChange = {(event) => setEmail(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label> State </Label>
                    <Input
                        name="state"
                        placeholder="State"
                        value={state}
                        type="text"
                        onChange = {(event) => setState(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label> Country </Label>
                    <Input
                        name="country"
                        placeholder="Country"
                        value={country}
                        type="text"
                        onChange = {(event) => setCountry(event.target.value)}
                    />
                </FormGroup>

                <Button>Submit</Button>

            </Form>
        </>
    )
}

export default AddEntry;