import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            <h2>Page Not Found 404</h2>
            <Link to="/">Back to home page</Link>
        </div>
    )
}

export default PageNotFound;