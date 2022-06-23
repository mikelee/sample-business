import services from '../servicesData';
import Head from 'next/head';

import styles from '../styles/Services.module.scss';

import Card from '../components/card.component';

const Services: React.FC = () => (
    <>
        <Head>
            <title>Sample: Services</title>
            <meta name='description' content='Sample business has service 1, service 2, and service 3.'></meta>
        </Head>
        <main className={styles['services']} data-testid='services-page'>
            <h1 className={styles['title']}>Services</h1>
            {
                services.map(service => <Card key={service.id} id={service.id} title={service.title} text={service.text} />)
            }
        </main>
    </>
);

export default Services;