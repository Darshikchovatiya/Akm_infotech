import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { SignupAs } from '../../services/Actions/Login_action';
import './signup.css';


const viewdata = () => {
    let view = JSON.parse(localStorage.getItem("akm_data"));
    if (view != null) {
        return view;
    }
    return [];
}

function Signup() {

    const [inputval, setInputval] = useState({
        email: '',
        password: '',
        cpassword: ''
    })

    const [showdetails, setShowdetails] = useState(viewdata());

    const dispatch = useDispatch();
    const { userDatas } = useSelector(state => state);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputval({ ...inputval, [name]: value });

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputval.email == "" || inputval.password == "" || inputval.cpassword == "") {
            toast.error("Please Enter Details");
        }
        else if (inputval.password == inputval.cpassword) {

            dispatch(SignupAs(inputval));
            setShowdetails([...showdetails, inputval]);
            toast.success("You are successfully signup");
            setInputval({
                email: '',
                password: '',
                cpassword: ''
            })
        }
        else {
            toast.error("Password and Confirm Password not a same");
        }
    }


    useEffect(() => {

        localStorage.setItem("akm_data", JSON.stringify(showdetails));
    }, [userDatas]);

    return (
        <>
            <div className="signupform" id='login'>
                <h2>Sign Up</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={inputval.email} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={inputval.password} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name='cpassword' value={inputval.cpassword} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Button type='submit'>Sign up</Button>
                </Form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Signup;