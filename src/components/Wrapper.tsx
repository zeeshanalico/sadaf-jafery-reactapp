'use client'
import FloatingWhatsApp from './FloatingWhatsapp';
import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <FloatingWhatsApp number='+923000512401' />

            <Footer/>

        </>
    );
};

export default Wrapper;
