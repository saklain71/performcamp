import React from 'react';
import logo from '../../../Image/Copy_of_perform-removebg-preview.png'

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
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title text-xl">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
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