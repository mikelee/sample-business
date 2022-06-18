import styles from '../styles/Card.module.scss';

interface Props {
    title: string,
    text: string
}

const Card: React.FC<Props> = ({ title, text }) => (
    <div className={styles['card']}>
        <h1 className={styles['title']}>{title}</h1>
        <p className={styles['text']}>{text}</p>
    </div>
);

export default Card;