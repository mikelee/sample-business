import { useEffect, useState } from 'react';
import styles from '../styles/Card.module.scss';

interface Props {
    id: number,
    title: string,
    text: string
}

const Card: React.FC<Props> = ({ id, title, text }) => {
    const TRANSITION_DURATION = 300;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, id * TRANSITION_DURATION);
    }, []);
    return (
        <div className={`${styles['card']} ${loading ? styles['loading'] : ''} `}>
            <h1 className={styles['title']}>{title}</h1>
            <p className={styles['text']}>{text}</p>
        </div>
    );
}

export default Card;