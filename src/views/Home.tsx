import React, {useEffect, } from 'react'

// Style
import styles from '../css/home.module.css'
// Custom components
import SensorCard from '../components/SensorCard'
import LightsCard from '../components/LightsCard'
import PlugsCard from '../components/PlugsCard'

const Home = () => {

    return(
        <div className={styles.container}>
            <div className={styles.groupContainerBig}>
                <h1>Sensors</h1>
                <div className={styles.seperator}/>
                <div className={styles.cardsCluster}>
                    <SensorCard sensorValue={10.02} name={"Humidity"} unit={'%'} maxValue={100} />
                    <SensorCard sensorValue={32.42} name={"Temperature"} unit={'°'} maxValue={50} />
                </div>
                <button onClick={playAudio}>Signup</button>
            </div>
            <div className={styles.groupContainerSmall}>
                <h1>Lights</h1>
                <div className={styles.seperator}/>
                <LightsCard/>
            </div>
            <div className={styles.groupContainerSmall}>
                <h1>Wall Outlets</h1>
                <div className={styles.seperator}/>
                <PlugsCard/>
            </div>
        </div>
    )
}

const playAudio = () => {
    let audio = new Audio();
    audio.src = "alarm.mp3";
    audio.load();
    audio.play()
}

export default Home;
