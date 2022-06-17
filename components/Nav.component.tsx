import Link from 'next/link';

import styles from '../styles/Nav.module.scss';

const Nav = () => (
    <nav className={styles['nav']}>
        <ul className={styles['nav-list']}>
            <li>
                <Link href='/services'><a className={styles['nav-link']}>Services</a></Link>
            </li>
            <li>
                <Link href='/location'><a className={styles['nav-link']}>Location</a></Link>
            </li>
        </ul>
    </nav>
);

export default Nav;