import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sample</title>
                <meta name='description' content='Sample business does this and that.'></meta>
            </Head>
            <div className={styles['home']} data-testid='home-page'>
                <main className={styles['main']}>
                    <h1 className={styles['title']}>Sample</h1>
                    <p className={styles['description']}>This is where you put a short description of your business or a slogan</p>
                </main>
                <div className={styles['buttons']}>
                    <Link href='/services'><a className={styles['button']}>Services</a></Link>
                    <Link href='/hours-location'><a className={styles['button']}>Find Us</a></Link>
                </div>
            </div>
        </>
    );
}

export default Home
