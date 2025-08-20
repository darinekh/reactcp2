import React, { useState } from 'react';
import ExempleComponent from './components/ExempleComponent';

const App = () => {
    const [message, setMessage] = useState('Bienvenue dans mon projet React!');

    return (
        <div>
            <h1>{message}</h1>
            <ExempleComponent />
        </div>
    );
};

export default App;