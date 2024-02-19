import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

const Settings = () => (
    <div className='settings-con'>
        <FontAwesomeIcon icon={faGears} className='icon' /> 
        <h1>Settings Page</h1>
    </div>
)

export default Settings;
