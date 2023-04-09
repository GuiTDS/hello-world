import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

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