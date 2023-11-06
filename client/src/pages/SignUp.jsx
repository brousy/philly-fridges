import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Signup(){
    

    return(
        <main class="bg-custom container border rounded logcont mainhandles container-fluid p-5 mt-5" id="content">
            <section  id="lll">
                <h1 id="title">User Registration</h1>
                <div class="push mt-500px"></div>
                <section class="mb-4">
                    <input class="textbox" type="email" placeholder="Email"/>
                    <input class="textbox" type="username" placeholder='Username'/>
                    <input class="textbox" type="first_name" placeholder="First Name"/>
                    <input class="textbox" type="last_name" placeholder="Last Name"/>

                </section>
                <div class="push"></div>
                <section class="mt-4 mx-3">
                    <button class="logbtn mx-3">Register</button>
                </section>
            </section>
            
        </main>
    )
}

export default Signup;