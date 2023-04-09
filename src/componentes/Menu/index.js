import MenuLink from '../MenuLink';
import styles from './Menu.module.css';
import  { Link, useLocation } from 'react-router-dom';

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Início
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre mim
                </MenuLink>
            </nav>

        </header>
    );
}
 
export default Menu;