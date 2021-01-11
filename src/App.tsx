import React, { useState, useCallback } from 'react';
import './App.css';
import Button from './components/button/button';
import Content from './components/content/content';
import Dropdown from './components/dropdown/dropdown';
import { ROLES, ROLE_TYPES } from './constants/constants';

function App() {
    const [role, setRole] = useState(ROLE_TYPES.CUSTOM);

    const toggleRole = useCallback((role: ROLE_TYPES) => setRole(role), [setRole])

    return (
        <div className='app'>
            <div className='container'>
                <Content 
                    title='User Role' 
                    className={['']}
                >
                <Dropdown 
                    currentOption={role}
                    options={ROLES} 
                    onChange={toggleRole}
                />
                </Content>
            </div>
            <Button onClick={()=>{}}>SAVE</Button>
        </div>
    );
}

export default App;
