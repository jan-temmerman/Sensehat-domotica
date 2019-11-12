import React from 'react';

//Styles
import styles from '../css/plugsCard.module.css'

// Custom components
import Card from './Card'

const PlugsCard = () => {
    return(
        <Card>
            <div className={styles.container}>
                <div className={styles.button}>
                    Kitchen
                </div>
                <div className={styles.button}>
                    Living Room
                </div>
                <div className={styles.button}>
                    Bedroom 1
                </div>
                <div className={styles.button}>
                    Bedroom 2
                </div>
            </div>
        </Card>
    )
}

export default PlugsCard;
