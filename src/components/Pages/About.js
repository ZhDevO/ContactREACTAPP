import React from 'react';

function About(props) {
    return (
        <div>
            <h2>About Page</h2>
            <h2>{ props.match.params.id }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias sed ex ratione vero praesentium blanditiis magni iste adipisci autem.</p>
        </div>
    )
}

export default About;