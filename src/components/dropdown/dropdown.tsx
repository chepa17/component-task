import './dropdown.css'
import arrow from '../../materials/collapse-arrow.svg'
import { useState, useCallback } from "react";
import classNames from "classnames";

export interface DropdownProps<T extends string> {
    currentOption: T;
    options: T[];
    onChange: (option: T) => void;
}
 
const Dropdown = <T extends string>({currentOption, options, onChange}: DropdownProps<T>) => {
    const [isOptionsShown, setIsOptionsShown] = useState(false);
    
    const toggleOptions = useCallback(() => {
        setIsOptionsShown(!isOptionsShown)
    }, [isOptionsShown, setIsOptionsShown]);

    const chooseOption = useCallback((role)=>{
        onChange(role); 
        toggleOptions();
    }, [onChange, toggleOptions]);

    return (
        <div className="dropdown">
            <button 
                type='button' 
                className='dropdown__button' 
                onClick = {toggleOptions}
            >
                {currentOption}
                <img src={arrow} alt={'arrow'}/>
            </button>
            <div className={classNames('dropdown__content', {'shown' : isOptionsShown})}>
                {options.map(option => 
                    <button 
                        type='button' 
                        className='dropdown__option' 
                        onClick={option => chooseOption(option)}
                        key={option}
                    >
                        {option}
                    </button>
                )}
            </div>
        </div> 
    );
}
 
export default Dropdown;
