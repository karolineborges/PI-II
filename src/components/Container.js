import React from 'react';
import Footer from './Footer';

const Container = ({ children }) => {
    return (
        <main className='container-content' style={{
            margin: '0 auto', maxWidth: '100vw', maxHeight: "50vh" }}>
            {children}
            <Footer />
        </main>
    );
}

export default Container;