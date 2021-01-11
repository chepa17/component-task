import classNames from 'classnames';
import './content.css';

interface ContentProps {
    title: string;
    className?: string[];
}
 
const Content: React.FC<ContentProps> = ({title, className = [], children}) => 
     <div 
        className={classNames('content', ...className)}
    >
        <h4>{title}</h4>
        {children}
    </div> 
 
export default Content;
