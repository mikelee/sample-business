import styles from '../styles/HoursLocation.module.scss';

const HoursLocation = () => (
    <main className={styles['hours-location']}>
        <section className={styles['hours']}>
            <h1 className={styles['hours-title']}>Hours</h1>
            <div className={styles['hours-table']}>
                <p>Monday</p>
                <p>9:00am - 5:00pm</p>
                <p>Tuesday</p>
                <p>9:00am - 5:00pm</p>
                <p>Wednesday</p>
                <p>9:00am - 5:00pm</p>
                <p>Thursday</p>
                <p>9:00am - 5:00pm</p>
                <p>Friday</p>
                <p>9:00am - 5:00pm</p>
                <p>Saturday</p>
                <p>9:00am - 5:00pm</p>
                <p>Sunday</p>
                <p>Closed</p>
            </div>
        </section>
        <section className={styles['location']}>
            <h1 className={styles['location-title']}>Location</h1>
            <p className={styles['location-text']}>We are conveniently located between Location A and Location B!</p>
            <iframe className={styles['map']} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.9949330236277!2d-104.87194428453257!3d38.87835775567118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87135012b5cc9c93%3A0x4e9df5263bf6dab!2sGarden%20of%20the%20Gods!5e0!3m2!1sen!2sus!4v1655771068062!5m2!1sen!2sus" width="600" height="450" style={{border: '0'}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>
);

export default HoursLocation;