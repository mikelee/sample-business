import styles from '../styles/MenuBar.module.scss';

import MenuIcon from './menu-icon.component';

interface Props {
    setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuBar: React.FC<Props> = ({ setNavVisible }) => (
    <div className={styles['menu-bar']}>
        <h1 className={styles['name']}>Sample</h1>
        <button className={styles['menu-button']} onClick={() => setNavVisible(true)} data-testid='menu-button'>
            <MenuIcon size={60} />
        </button>
    </div>
);

export default MenuBar;