import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h2>This page doesn't exists</h2>
            <Link to='/home'>
            <button className='btn btn-primary'>Go to Homepage</button>
            
            </Link>
            
        </div>
    );
};

export default Notfound;