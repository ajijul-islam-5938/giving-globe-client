import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Not found</title>
            </Helmet>
            <img className='mx-auto' src="not-found.avif" alt="" />
        </div>
    );
};

export default NotFound;