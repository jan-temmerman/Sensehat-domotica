import React, { useState } from 'react';

//Styles
import styles from '../css/lightsCard.module.css'

// Custom components
import Card from './Card'

const LightsCard = () => {
    const [kitchenLight, setKitchenLight] = useState("rgb(112, 109, 66)");
    const [livingRoomLight, setLivingRoomLight] = useState("rgb(112, 109, 66)");
    const [bedroom1Light, setBedroom1Light] = useState("rgb(112, 109, 66)");
    const [bedroom2Light, setBedroom2Light] = useState("rgb(112, 109, 66)");

    return(
        <Card>
            <div className={styles.container}>
                <div onClick={(e) => toggleLight(e, kitchenLight, setKitchenLight)} className={styles.button} style={{backgroundColor: kitchenLight}}>
                    Kitchen
                </div>
                <div onClick={(e) => toggleLight(e, livingRoomLight, setLivingRoomLight)} className={styles.button} style={{backgroundColor: livingRoomLight}}>
                    Living Room
                </div>
                <div onClick={(e) => toggleLight(e, bedroom1Light, setBedroom1Light)} className={styles.button} style={{backgroundColor: bedroom1Light}}>
                    Bedroom 1
                </div>
                <div onClick={(e) => toggleLight(e, bedroom2Light, setBedroom2Light)} className={styles.button} style={{backgroundColor: bedroom2Light}}>
                    Bedroom 2
                </div>
            </div>
        </Card>
    )
}

const toggleLight = (e: any, light: string, setLight: any) => {
    const area = e.target.innerHTML
    console.log(area)
    switch(area) {
        case 'Kitchen':
            if(light === "rgb(112, 109, 66)")
                setLight("rgb(233, 223, 85)")
            else
                setLight("rgb(112, 109, 66)")
            break
        case 'Living Room':
            if(light === "rgb(112, 109, 66)")
                setLight("rgb(233, 223, 85)")
            else
                setLight("rgb(112, 109, 66)")
            break
        case 'Bedroom 1':
            if(light === "rgb(112, 109, 66)")
                setLight("rgb(233, 223, 85)")
            else
                setLight("rgb(112, 109, 66)")
            break
        case 'Bedroom 2':
            if(light === "rgb(112, 109, 66)")
                setLight("rgb(233, 223, 85)")
            else
                setLight("rgb(112, 109, 66)")
            break
    }
}

export default LightsCard;
