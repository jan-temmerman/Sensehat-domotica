import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//Styles
import styles from '../css/sensorCard.module.css'

// Custom components
import Card from './Card'

const SensorCard = (props: any) => {
    return(
        <Card>
            <h1>{props.name}</h1>
            <CircularProgressbar className={styles.meter} value={props.sensorValue} maxValue={props.maxValue} text={`${props.sensorValue}${props.unit}`} />
        </Card>
    )
}

export default SensorCard;
