import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import TokenContext from "./tokenContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignupForm.css';
import JoblyApi from "./api";

function SignupForm() {
    const INITIAL_STATE={username:'hpotter', password:'hogwarts', fname:'Harry',
                            lname:'Potter', email:'harry@hogwarts.edu'};
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();
    const {addToken, addCurrUser} =useContext(TokenContext);

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(data => (
             {...data, [name]:value}
        ))
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const newUser = {username:formData.username, 
                         password:formData.password, 
                         firstName:formData.fname, 
                         lastName:formData.lname, 
                         email:formData.email}
        const authToken = await JoblyApi.registerUser(newUser);
        addToken(authToken);
        addCurrUser(newUser.username);
        history.push ('/companies');   
    }

    return(
        <div className='SignupForm col-sm-8 col-md-6'>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text'
                                  value={formData.username}
                                  name='username'
                                  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password'
                                  value={formData.password}
                                  name='password'
                                  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type='text'
                                  value={formData.fname}
                                  name='fname'
                                  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type='text'
                                  value={formData.lname}
                                  name='lname'
                                  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'
                                  value={formData.email}
                                  name='email'
                                  onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignupForm;