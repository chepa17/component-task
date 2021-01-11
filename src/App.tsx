import { useState, useCallback } from 'react';
import './App.css';
import Button from './components/button/button';
import CheckBox from './components/checkbox/checkbox';
import Content from './components/content/content';
import Dropdown from './components/dropdown/dropdown';
import { PERMISSIONS, ROLES, ROLE_TYPES } from './constants/constants';

function App() {
    const [role, setRole] = useState(ROLE_TYPES.CUSTOM);


    const toggleRole = useCallback((role: ROLE_TYPES) => setRole(role), [setRole])

    return (
        <div className='app'>
            <div className='container'>
                <Content 
                    title='User Role' 
                    className={['-inline']}
                >
                    <Dropdown 
                        currentOption={role}
                        options={ROLES} 
                        onChange={toggleRole}
                    />
                </Content>
                <Content
                    title='Folders'
                    className={['-withBottomBorder']}
                >
                    <div className='permitions-list'>
                        {PERMISSIONS.map(permission => 
                            <CheckBox 
                                title={permission}
                                type={permission}
                                checked={true}
                                disabled={true}
                                onChange={()=> {}}
                                key={permission}
                            />
                        )}
                    </div>
                </Content>
                <Content
                    title='Gems'
                >
                    <div className='permitions-list'>
                        {PERMISSIONS.map(permission => 
                            <CheckBox 
                                title={permission}
                                type={permission}
                                checked={false}
                                disabled={false}
                                onChange={()=> {}}
                                key={permission}
                            />
                        )}
                    </div>
                </Content>
            </div>
            <Button onClick={()=>{}}>SAVE</Button>
        </div>
    );
}

export default App;
