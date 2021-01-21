import React from 'react';
import Book from '../components/book';
import Layout from '../components/layout';

const Contact = () => {
    return (
        <Layout>
            <div className="elementor elementor-138 elementor-3883">
                <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                    <Book />
                    <Contact />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;