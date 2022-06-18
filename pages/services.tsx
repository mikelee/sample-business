import services from '../servicesData';

import styles from '../styles/Services.module.scss';

import Card from '../components/card.component';

const Services: React.FC = () => (
    <main className={styles['services']}>
        <h1 className={styles['title']}>Services</h1>
        {
            services.map(service => <Card key={service.id} title={service.title} text={service.text} />)
        }
    </main>
);

export default Services;