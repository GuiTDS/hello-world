import styles from './MenuLink.module.css';
import  { Link, useLocation } from 'react-router-dom';

const MenuLink = ( { children, to }) => {
    const location = useLocation();

    return ( 
        <Link className={`
        ${styles.link} 
        ${location.pathname === to ? styles.link__destacado : ''}`
        } to = {to}>
            {children}
        </Link>
     );
}
 
export default MenuLink;