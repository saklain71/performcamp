import React from 'react';
import propImg from '../../../Image/prof.svg'
import enterpImg from '../../../Image/entrp.svg'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import background_1 from '../../../Image/background_image/background_image_1.png'

const Pricing = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className='container lg:px-9 px-3'>
            <div class="pt-10 bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full" >
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <h1 className='text-4xl font-semibold'>Simple, Transparent, And Affordable Pricing</h1>
                        <p className='py-5'>Every feature is included in one low price and every customer gets a dedicated customer success manager for implementation, training and support at no additional cost.</p>
                        <label for="pricing" class="btn modal-button hover:-translate-y-1 hover:scale-110 hover:bg-base-100 btn-outline text-black hover:text-black font-bold">Get A Price Quote</label>

                        <input type="checkbox" id="pricing" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="pricing" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='flex gap-5'>
                                        <div>
                                            <label class="label">
                                                <span class="label-text">First Name</span>
                                            </label>
                                            <input {...register("firstName", { required: true })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                                            {errors.firstName && <p className='text-red-500'>First name is required</p>}
                                        </div>

                                        <div>
                                            <label class="label">
                                                <span class="label-text">Last Name</span>
                                            </label>
                                            <input {...register("lastName", { required: true })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                                            {errors.lastName && <p className='text-red-500'>Last name is required</p>}
                                        </div>
                                    </div>
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input {...register("mail", { required: "Email Address is required" })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                                    <p className='text-red-500'>{errors.mail?.message}</p>

                                    <label class="label">
                                        <span class="label-text">Organization</span>
                                    </label>
                                    <input {...register("organization", { required: "Organization name is required" })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                                    <p className='text-red-500'>{errors.organization?.message}</p>

                                    <label class="label">
                                        <span class="label-text">Number of Employees</span>
                                    </label>
                                    <input {...register("employee", { required: "Employee number is required" })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                                    <p className='text-red-500'>{errors.employee?.message}</p>

                                    <input type="submit" class="hover:-translate-y-1 hover:scale-110 btn btn-error text-white font-bold w-full mt-5" value='Get a Price Quote' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2  gap-10'>
                <div className='card shadow-2xl'>
                    <div className='flex items-center px-16 my-11'>
                        <img src={propImg} alt="" style={{ width: '48px' }} />
                        <h1 className='text-4xl ml-5 font-bold'>Professional</h1>
                    </div>
                    <div className='py-5 px-16 h-32 bg-gray-200'>
                        <h1 className='text-4xl font-bold'>$4-8</h1>
                        <p>Per employee per month</p>
                    </div>
                    <div className='my-12 px-8'>
                        <ul>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>All our software features including...</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Performance Reviews</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Goal Management</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Continuous Feedback</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>360s and Peer Evaluations</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Dedicated Customer Success Manager</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Google/Office365/Okta/OneLogin SSO</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Phone/Email/Knowledge Base</li>
                        </ul>
                    </div>
                </div>
                <div className='card shadow-xl'>
                    <div className='flex items-center px-16 my-11'>
                        <img src={enterpImg} alt="" style={{ width: '48px' }} />
                        <h1 className='text-4xl ml-5 font-bold'>Enterprise</h1>
                    </div>
                    <div className='py-5 px-16 h-32 bg-gray-200'>
                        <h1 className='text-2xl font-bold'>Customized to your business needs:</h1>
                        <Link to="/" class="btn btn-link font-bold text-blue-400 hover:no-underline text-xl p-0">Get a Price Quote <i class="fas fa-long-arrow-alt-right ml-2"></i></Link>
                    </div>
                    <div className='mt-12 px-8'>
                        <ul>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>All professional features plus...</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Senior Customer Success Manager</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Enhanced On-boarding and Training</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Custom Implementation</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Data Integrations</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Custom Single Sign On (SAML)</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Custom Service Level Agreement</li>
                            <li className='mb-7'><i class="fas fa-check-circle mr-3"></i>Additional document storage</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className='text-center text-xl font-semibold m-16'>Pricing is billed annually and subject to standard terms and conditions including subscription term and minimums.</h2>
            <div class="hero bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full relative" >
                <img src={background_1} class="w-full h-96 absolute rounded-lg mx-6" alt='' />
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <p class="text-xl whitespace-normal lg:font-bold font-semibold py-6">See how PerformCamp can streamline and automate your performance management process.</p>
                        <div className='flex flex-col justify-center items-center'>
                            <label for="pricing" class="btn modal-button w-48 mb-5 hover:-translate-y-1 hover:scale-110 hover:bg-base-100 btn-outline text-black hover:text-black font-bold">Get A Price Quote</label>
                            <button className='hover:-translate-y-1 hover:scale-110 btn btn-error w-40 text-white font-bold'>Get A Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;