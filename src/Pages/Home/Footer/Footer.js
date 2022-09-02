import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo/PerformCamp-logo.png'

const Footer = () => {
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear
    return (
        <footer class="footer lg:p-20 p-10 bg-slate-700 text-white">
            <div>
                <img src={logo} style={{ width: '300px' }} alt="" />
                <p className='w-80 lg:ml-6 text-white'>PerformCamp is powerful and simple performance management software. For annual reviews, quarterly goals, continuous feedback and everything in between, we reduce the burden on HR and create a simple experience for your employees.</p>
                <p className='lg:ml-6'>© { yearTxt } PerformCamp. All rights reserved.</p>
            </div>
            <div>
                <span class="footer-title text-xl">Services</span>
                <Link to="/overview" className='link link-hover'>Overview</Link>
                <Link to="/reviewCheckin" className='link link-hover'>Review and Check in</Link>
                <Link to="/goalManagement" className='link link-hover'>Goal Management</Link>
                <Link to="/continuousFeedback" className='link link-hover'>Continuos Feedback</Link>
                
            </div>
            <div>
                <span class="footer-title text-xl">Company</span>
                <a href='/about' class="link link-hover">About us</a>
                <a href='/contact' class="link link-hover">Contact</a>
                <a href='/story-leadership' class="link link-hover">Our story</a>
                <a href='/career' class="link link-hover">Career</a>
                
            </div>
            <div>
                <span class="footer-title text-xl">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;