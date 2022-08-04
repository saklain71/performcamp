import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from './Loading';
import google from '../../Image/google.png';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      const navigate = useNavigate();
    
      let signInError;
    
     if(user || gUser){
        navigate('/');
     }

  
      if(loading || gLoading){
          return <Loading></Loading>
      }

    if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = async data => {
        console.log(data);
       if(data.password === data.confirmPassword){
        await createUserWithEmailAndPassword(data.email, data.password);
       }
       else{
           toast.error("two password didn't match");
       }
    };

   
    return (
        <div className='flex h-screen items-center justify-center bg-base-100 pb-4 lg:pb-8'>
            <div className="card w-11/12 lg:w-1/4  bg-base-100 shadow-xl">
                <div className="card-body bg-gradient-to-r from-yellow-100 to-fuchsia-200">
                    <h2 className="text-center text-xl mx:text-2xl lg:text-3xl font-bold text-blue-700">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email" placeholder="Your Email"
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
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>

                            <input
                                type="password" placeholder="Confirm Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("confirmPassword", {
                                    required:{
                                        value: true,
                                        message: 'Confirm Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be six characters or longer'
                                    }
                                })} />

                            <label className="label">
                            {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                 
                         {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up"/>
                    </form>
                   
                    <p className='py-1'>Already have an account? <Link className='text-blue-500' to="/login">Please Login</Link></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline"><img className='w-8 h-8' src={google} alt="" /> Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;