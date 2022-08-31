import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import google from '../../Image/Icons/google.png';
import useToken from '../../hooks/useToken';
import Loading from '../../Pages/Shared/Loading';
import loginBanner from '../../Image/banner/loginBanner.png'


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, resetSending, ResetError] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || gUser);
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    let signInError;


    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (gLoading || loading || resetSending) {
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = document.getElementById('email').value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('sent email');
        }

        else {
            toast.error('Please provide your email address');
        }
    }


    const onSubmit = async data => {
        signInWithEmailAndPassword(data.email, data.password);

    };

    return (
        <div className='flex lg:flex-row flex-col-reverse lg:h-screen items-center lg:justify-evenly bg-base-100 overflow-visible bg-gradient-to-r  from-yellow-50  to-fuchsia-100 '>

            <div className=''>
                <img src={loginBanner} className='lg:max-w-2xl hidden lg:block' alt="" />
                <div className='text-center'>
                    <p className='text-lg mt-5 text-center'>If you have any queries, please reach us at</p>
                    <div className="flex justify-center pb-4 border-r border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                        <a href='' className="text-sm ml-2 text-blue-500 dark:text-gray-100">info@performcamp.com</a>
                    </div>
                </div>
            </div>
            <div className="card w-11/12 lg:w-1/4 lg:mt-1 mt-6 mb-3">
                <div className="card-body bg-gradient-to-l  from-yellow-100 to-fuchsia-200">
                    <h2 className="text-center text-xl mx:text-2xl lg:text-3xl font-bold text-blue-700">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email" placeholder="Your Email" id="email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be six characters or longer'
                                    }
                                })} />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p className='text-center'><small>Forgot Password?</small><Link className='text-blue-500' onClick={resetPassword} to="/login"> Reset Password</Link></p>

                    <p className='text-center'><small>New to PerformCamp? </small><Link className='text-blue-500' to="/signUp">Please SignUp</Link></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline"><img className='w-8 h-8' src={google} alt="" />Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;