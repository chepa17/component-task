import { useState, useCallback } from 'react';
import './App.css';
import Button from './components/button/button';
import CheckBox from './components/checkbox/checkbox';
import Content from './components/content/content';
import Dropdown from './components/dropdown/dropdown';
import {
	PERMISSIONS_TYPES, 
	ROLE_TYPES,
	Permissions
} from './types/types';
import {
	ADMIN_PERMISSIONS, 
	CUSTOM_PERMISSIONS, 
	MEMBER_PERMISSIONS,
	USER_PERMISSIONS, 
	PERMISSIONS, 
	ROLES
} from './types/constants';

interface AppProps {
	onSave?: (role: ROLE_TYPES, permissions: Permissions) => void;
}

function App({onSave}: AppProps) {
    const [role, setRole] = useState(ROLE_TYPES.CUSTOM);
    const [permissions, setPermissions] = useState(CUSTOM_PERMISSIONS);
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleRole = useCallback((role: ROLE_TYPES) => { 
            setRole(role);
            switch (role) {
                case ROLE_TYPES.ADMIN:
                    setPermissions(ADMIN_PERMISSIONS);
                    setIsDisabled(true);
                    break;
                case ROLE_TYPES.USER:
                    setPermissions(USER_PERMISSIONS);
                    setIsDisabled(true);
                    break;
                case ROLE_TYPES.MEMBER:
                    setPermissions(MEMBER_PERMISSIONS);
                    setIsDisabled(true);
                    break;
                default:
                    setPermissions(CUSTOM_PERMISSIONS);
                    setIsDisabled(false);
                    break;
			}
			return {currentRole: role, checkboxStates: permissions};  
		}, [setRole, setPermissions, setIsDisabled]);
		
    const toggleFolderPermission = useCallback((action: PERMISSIONS_TYPES) => {
        const previousState = permissions[action];
		setPermissions({...permissions, [action]: {...previousState, folders: {checked: !previousState.folders.checked}}})
	}, [permissions, setPermissions]);
	
    const toggleGemsPermission = useCallback((action: PERMISSIONS_TYPES) => {
        const previousState = permissions[action];
        setPermissions({...permissions, [action]: {...previousState, gems: {checked: !previousState.gems.checked}}})
	}, [permissions, setPermissions]);
	
    const handleOnSave = useCallback(() => {
        onSave?.(role, permissions);
    }, [onSave, permissions, role]);
    
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
                    <div className='permissions-list'>
                        {PERMISSIONS.map(permission => 
							<CheckBox 
                                title={permission}
                                type={permission}
                                checked={permissions[permission].folders.checked}
                                disabled={isDisabled}
                                onChange={toggleFolderPermission}
                                key={permission}
                            />
                        )}
                    </div>
                </Content>
                <Content title='Gems'>
                    <div className='permissions-list'>
                        {PERMISSIONS.map(permission => 
                            <CheckBox 
                                title={permission}
                                type={permission}
                                checked={permissions[permission].gems.checked}
                                disabled={isDisabled}
                                onChange={toggleGemsPermission}
                                key={permission}
                            />
                        )}
                    </div>
                </Content>
            </div>
            <Button onClick={handleOnSave}>SAVE</Button>
        </div>
    );
}

export default App;
