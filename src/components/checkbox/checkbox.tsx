import classNames from "classnames";
import { PERMISSIONS_TYPES } from "../../constants/constants";
import CheckedIcon from '../../materials/check.svg';
import UncheckedIcon from '../../materials/uncheck.svg';

import './checkbox.css'

export interface CheckBoxProps {
    title: string;
    type: PERMISSIONS_TYPES;
    checked: boolean;
    disabled: boolean;
    onChange: (type: PERMISSIONS_TYPES) => void;
}
 
const CheckBox: React.FC<CheckBoxProps> = ({title, type, checked, disabled, onChange}) =>
    <div className={classNames('checkbox-wrapper', {'-withDisabled' : disabled})}>
        <img src={checked ? CheckedIcon : UncheckedIcon} alt={checked ? 'check' : 'uncheck'}/>
        <div className={classNames('checkbox-wrapper__title', {'-withChecked' : checked})}>
            {title}
        </div>
    </div>
 
export default CheckBox;
