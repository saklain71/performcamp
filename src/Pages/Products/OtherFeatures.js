import React from 'react';
import propImg from '../../Image/prof.svg'
import enterpImg from '../../Image/entrp.svg'

const OtherFeatures = () => {
    return (
        <div className='container lg:px-9 px-3'>
            <div className='text-center lg:p-24 lg:mx-20'>
                <h1 className='text-4xl font-semibold'>Simple, Transparent, And Affordable Pricing</h1>
                <p className='py-5'>Every feature is included in one low price and every customer gets a dedicated customer success manager for implementation, training and support at no additional cost.</p>
                <button className='hover:-translate-y-1 hover:scale-110 hover:bg-base-100 btn btn-outline text-black hover:text-black font-bold'>Get A Price Quote</button>
            </div>
            <div className='grid lg:grid-cols-2  gap-10'>
                <div className='card shadow-2xl'>
                    <div className='flex items-center px-16 my-11'>
                        <img src={propImg} alt="" style={{ width: '48px' }} />
                        <h1 className='text-4xl ml-5 font-bold'>Professional</h1>
                    </div>
                    <div className='py-5 px-16 h-32 bg-gray-300'>
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
                        <img src={propImg} alt="" style={{ width: '48px' }} />
                        <h1 className='text-4xl ml-5 font-bold'>Enterprise</h1>
                    </div>
                    <div className='py-5 px-16 h-32 bg-gray-300'>
                        <h1 className='text-2xl font-bold'>Customized to your business needs:</h1>
                        <p>Get a Price Quote <i class="fas fa-long-arrow-alt-right"></i></p>
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
        </div>
    );
};

export default OtherFeatures;