import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import auth from '../../../firebase.init';
import logo from '../../../Image/logo/PerformCamp-logo.png'

const WelcomeMessage = () => {
    const {transaction} = useParams()
    const [user] = useAuthState(auth)
    
    return (
        <div className='lg:h-screen lg:py-0 py-16 flex justify-center items-center bg-green-100'>
            <div class="card lg:max-w-xl bg-green-50 shadow-xl text-xl">
                <div class="card-body">
                    <p>Hello <b>{user.displayName}!</b></p>
                    <br />
                    <p>I just wanted to drop you a quick note and let you know that I received your recent payment. Your Transaction Id is: <sapn className="text-purple-500">{transaction}</sapn></p>
                    <br />
                    <p>Thank you so much. I really appreciate it.</p>
                    <p>Have a great day!</p>
                    <br />
                    <p>Rashed Sabbir,</p>
                    <p>Chief Accounts and Finance Officer (CAFO)</p>
                    <img src={logo} style={{ width: "200px" }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessage;