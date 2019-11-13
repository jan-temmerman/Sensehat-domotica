import React, { useState, useEffect } from 'react';

//Styles
import styles from '../css/lightsCard.module.css'

// Custom components
import Card from './Card'

// DB
import db from '../db/db'

const LightsCard = (props: any) => {
    const [kitchenLight, setKitchenLight] = useState("rgb(112, 109, 66)");
    const [livingRoomLight, setLivingRoomLight] = useState("rgb(112, 109, 66)");
    const [bedroom1Light, setBedroom1Light] = useState("rgb(112, 109, 66)");
    const [bedroom2Light, setBedroom2Light] = useState("rgb(112, 109, 66)");
    const [lights, setLights] = useState({
        kitchen: false,
        livingRoom: false,
        bedroom1: false,
        bedroom2: false
    });
    const [justLoaded, setJustLoaded] = useState(true);

    useEffect(() => {
        setTimeout(function(){ 
            setJustLoaded(false)
        }, 100);
    }, []);

    useEffect(() => {
        if(!justLoaded) {
            db.collection("domotica").doc("lights").update({
                lights: lights
            });
        }
    }, [lights]);

    useEffect(() => {
        toggleAllLights(kitchenLight, setKitchenLight, setLivingRoomLight, setBedroom1Light, setBedroom2Light, setLights, justLoaded)
    }, [props.alarm]);

    return(
        <Card>
            <div className={styles.container}>
                <div onClick={(e) => toggleLight(e, kitchenLight, setKitchenLight, setLights, lights)} className={styles.button} style={{backgroundColor: kitchenLight}}>
                    Kitchen
                </div>
                <div onClick={(e) => toggleLight(e, livingRoomLight, setLivingRoomLight, setLights, lights)} className={styles.button} style={{backgroundColor: livingRoomLight}}>
                    Living Room
                </div>
                <div onClick={(e) => toggleLight(e, bedroom1Light, setBedroom1Light, setLights, lights)} className={styles.button} style={{backgroundColor: bedroom1Light}}>
                    Bedroom 1
                </div>
                <div onClick={(e) => toggleLight(e, bedroom2Light, setBedroom2Light, setLights, lights)} className={styles.button} style={{backgroundColor: bedroom2Light}}>
                    Bedroom 2
                </div>
            </div>
        </Card>
    )
}

const toggleLight = (e: any, light: string, setLight: any, setLights: any, lights: any) => {
    const area = e.target.innerHTML
    
    switch(area) {
        case 'Kitchen':
            if(light === "rgb(112, 109, 66)") {
                setLight("rgb(233, 223, 85)")
                setLights({
                    kitchen: true,
                    livingRoom: lights.livingRoom,
                    bedroom1: lights.bedroom1,
                    bedroom2: lights.bedroom2
                })
            }
            else {
                setLight("rgb(112, 109, 66)")
                setLights({
                    kitchen: false,
                    livingRoom: lights.livingRoom,
                    bedroom1: lights.bedroom1,
                    bedroom2: lights.bedroom2
                })
            }
            break
        case 'Living Room':
            if(light === "rgb(112, 109, 66)") {
                setLight("rgb(233, 223, 85)")
                setLights({
                    kitchen: lights.kitchen,
                    livingRoom: true,
                    bedroom1: lights.bedroom1,
                    bedroom2: lights.bedroom2
                })
            }
            else {
                setLight("rgb(112, 109, 66)")
                setLights({
                    kitchen: lights.kitchen,
                    livingRoom: false,
                    bedroom1: lights.bedroom1,
                    bedroom2: lights.bedroom2
                })
            }
            break
        case 'Bedroom 1':
            if(light === "rgb(112, 109, 66)") {
                setLight("rgb(233, 223, 85)")
                setLights({
                    kitchen: lights.kitchen,
                    livingRoom: lights.livingRoom,
                    bedroom1: true,
                    bedroom2: lights.bedroom2
                })
            }
            else {
                setLight("rgb(112, 109, 66)")
                setLights({
                    kitchen: lights.kitchen,
                    livingRoom: lights.livingRoom,
                    bedroom1: false,
                    bedroom2: lights.bedroom2
                })
            }
            break
        case 'Bedroom 2':
            if(light === "rgb(112, 109, 66)") {
                setLight("rgb(233, 223, 85)")
                setLights({
                    kitchen: lights.kitchen,
                    livingRoom: lights.livingRoom,
                    bedroom1: lights.bedroom1,
                    bedroom2: true
                })
            }
            else {
                setLight("rgb(112, 109, 66)")
                setLights({
                    kitchen: lights.kitchen,
                    livingRoom: lights.livingRoom,
                    bedroom1: lights.bedroom1,
                    bedroom2: false
                })
            }
            break
    }
}

const toggleAllLights = (kitchenLight: string, setKitchenLight: any, setLivingRoomLight: any, setBedroom1Light: any, setBedroom2Light: any, setLights: any,justLoaded: boolean) => {

    if(!justLoaded) {
        if(kitchenLight === "rgb(112, 109, 66)") {
            setKitchenLight("rgb(233, 223, 85)")
            setLivingRoomLight("rgb(233, 223, 85)")
            setBedroom1Light("rgb(233, 223, 85)")
            setBedroom2Light("rgb(233, 223, 85)")
            setLights({
                kitchen: true,
                livingRoom: true,
                bedroom1: true,
                bedroom2: true
            })
        }
        else {
            setKitchenLight("rgb(112, 109, 66)")
            setLivingRoomLight("rgb(112, 109, 66)")
            setBedroom1Light("rgb(112, 109, 66)")
            setBedroom2Light("rgb(112, 109, 66)")
            setLights({
                kitchen: false,
                livingRoom: false,
                bedroom1: false,
                bedroom2: false
            })
        }
    }
}

export default LightsCard;
