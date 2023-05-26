import React from 'react';

const Footer = () => {
    return (
        <div className='md:flex p-5  items-center justify-evenly bg-black text-white container mx-auto'>
            <div className='p-5'>
                <div>
                    <h1>Address</h1>
                    <p>1234 Street Name</p>
                    <p>City, AA 99999</p>
                </div>
                <div>
                    <h1>Contacts</h1>
                    <p>Email: support@mobirise.com</p>
                    <p>Phone: +1 (0) 000 0000 001</p>
                </div>
            </div>
            <div className='p-5'>
                <h1>Opening Hours</h1>
                <p>Monday  <span>11:00 - 18:00</span></p>
                <p>Tuesday  <span>11:00 - 18:00</span></p>
                <p>Wednesday <span>11:00 - 18:00</span></p>
                <p>Thursday  <span>11:00 - 18:00</span></p>
                <p>Friday  <span>11:00 - 18:00</span></p>
                <p>Saturday  <span>11:00 - 18:00</span></p>
                <p>Sunday  <span>11:00 - 18:00</span></p>
            </div>
        </div>
    );
};

export default Footer;