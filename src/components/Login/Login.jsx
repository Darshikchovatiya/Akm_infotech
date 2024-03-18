import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAs } from '../../services/Actions/Login_action';
import { useNavigate } from 'react-router';

const viewdata = () => {
    let view = JSON.parse(localStorage.getItem("akm_data"));
    if (view != null) {
        return view;
    }
    return [];
}

function Login() {

    const [inputval, setInputval] = useState({
        email: '',
        password: ''
    })

    const [showdetails, setShowdetails] = useState(viewdata());
    // console.log(showdetails);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { login } = useSelector(state => state);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInputval({ ...inputval, [name]: value });

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        let count = 0;

        if (inputval.email == "" || inputval.password == "") {
            toast.error("Please Enter Details");
        }
        else {
            showdetails.map((shd) => {
                if (shd.email == inputval.email) {
                    count = 1;
                }
            })

            if (count == 1) {
                await dispatch(LoginAs(inputval, showdetails));

                if (!login) {
                    toast.success('Login Successfully');
                    navigate('/home');
                }
                else {
                    toast.error('Email or Password is Wrong');
                }
            }
            else {
                toast.error("You are not Signed up");
            }
        }
    }


    return (
        <>
            <div className="loginform">
                <h2>Login</h2>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={inputval.email} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={inputval.password} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                </Form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login;