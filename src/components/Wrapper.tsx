'use client'
import FloatingWhatsApp from './FloatingWhatsapp';
import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
interface Prop {
    footer?: boolean;
    navbar?: boolean;
    children: React.ReactNode;
}
const Wrapper = ({ children, footer = true }: Prop) => {
    return (
        <>
            <Navbar />
            {children}
            <FloatingWhatsApp number='+92 3000825124' />

            {footer && <Footer />}

        </>
    );
};

export default Wrapper;
