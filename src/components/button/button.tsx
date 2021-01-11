import './button.css';

interface ButtonProps {
    onClick: () => void;
}
 
const Button: React.FC<ButtonProps> = ({children, onClick}) =>  
    <button 
        type='button'
        className='button'
        onClick={onClick}
    >
        {children}
    </button>

export default Button;
