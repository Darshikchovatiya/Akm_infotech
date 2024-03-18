import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './home.css'

function Home() {

    const { user_data } = useSelector(state => state);
    
    return (
        <>
            <Container>
                {
                    user_data ? 
                    <h1>Welcome {user_data.email}</h1>
                    :
                    <NavLink to='/' className='login_a'>Login</NavLink>
                }
            </Container>
        </>
    )
}

export default Home;