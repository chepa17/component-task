import {useCallback} from 'react';
import classNames from "classnames";
import CheckedIcon from '../../materials/check.svg';
import UncheckedIcon from '../../materials/uncheck.svg';

import './checkbox.css'

export interface CheckBoxProps<T extends string> {
    title: string;
    type: T;
    checked: boolean;
    disabled: boolean;
    onChange: (type: T) => void;
}
 
const CheckBox = <T extends string>({title, type, checked, disabled, onChange}: CheckBoxProps<T>) => {
    const onClick = useCallback(() => {
        if (disabled) {
            return;
        }

        onChange(type);
    }, [disabled, onChange, type]);

    return (
        <div 
            className={classNames('checkbox-wrapper', {'-withDisabled' : disabled})}
            onClick={onClick}
        >
            <img src={checked ? CheckedIcon : UncheckedIcon} alt={checked ? 'check' : 'uncheck'}/>
            <div className={classNames('checkbox-wrapper__title', {'-withChecked' : checked})}>
                {title}
            </div>
        </div>
    );
}    
 
export default CheckBox;
