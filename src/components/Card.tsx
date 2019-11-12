import React from 'react';

//Styles
import styles from '../css/card.module.css'

const Card = (props: any) => {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Card
