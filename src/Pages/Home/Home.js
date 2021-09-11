import React from 'react'
import { Link } from 'react-router-dom'

const Home=()=>{
    return (
        <>
        <div>
            <a href="/register">Register</a>
        </div>
        <a href="/login">Login</a>
        </>
    );
}
export default Home;
