// General imports from libs
import React from 'react';

// Import styles
import styles from './styles.css';
import cardImg from '../../../resources/SignatureScreen/img/genericUserPicture.png';

const UserCard = props => (
    <div className={styles.simpleCard}>
        <div className={styles.simpleCardUser}>
            <img src={cardImg} alt={props.clients.name} />
            <div className={styles.simpleCardUserDescription}>
                <p className={styles.name}>{props.clients.name}</p>
                <p className={styles.shortSpecs}>
                    {props.clients.id}
                </p>
                <p className={styles.priceBig}>{props.clients.email}</p>
                <p className={styles.priceInstallments}>' '</p>
            </div>
        </div>
    </div>
);

export default UserCard;
