import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, ResetSending, ResetError] = useSendPasswordResetEmail(auth);
      const navigate = useNavigate();
      const location = useLocation();
     
     if(gUser || user){
        navigate('/');
     }

      let signInError;
      

    if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const resetPassword = async () => {
        const email = document.getElementById('email').value;
        console.log(email);
       if(email){
        await sendPasswordResetEmail(email);
        toast.success('sent email');
       }

       else{
           toast.error('Please provide your email address');
       }
    }


    const onSubmit = async data => {
        signInWithEmailAndPassword(data.email, data.password);
       
    };

   
    return (
        <div className='flex h-screen items-center justify-center bg-gradient-to-r from-blue-300 to-fuchsia-300'>
            <div className="card w-10/12 lg:w-1/4 shadow-xl
            ">
                <div className="card-body bg-yellow-100">
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
                                    required:{
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />

                            <label className="label">
                            {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}

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
                                    required:{
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be six characters or longer'
                                    }
                                })} />

                            <label className="label">
                            {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>
                         {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login"/>
                    </form>
                    <p><small>Forgot Password?</small><Link className='text-blue-500' onClick={resetPassword} to="/login"> Reset Password</Link></p>

                    <p><small>New to PerformCamp? </small><Link className='text-blue-500' to="/signUp"> SignUp</Link></p>
                     
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;