import React from 'react';
import App from './App';
import { useAuth0 } from '@auth0/auth0-react';

function Renderer() {
    const { isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>

    return(
        <>
        <App />
        </>
    );
}

export default Renderer;