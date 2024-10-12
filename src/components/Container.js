import React from 'react';
import Footer from './Footer';

const Container = ({ children }) => {
    return (
        <div className='container-content' style={{
            margin: '0 auto', maxWidth: '100vw', maxHeight: "50vh" }}>
            {children}
            <Footer />
        </div>
    );
}

export default Container;