import React, { useState, useEffect } from 'react';

//Styles
import styles from '../css/plugsCard.module.css'

// Custom components
import Card from './Card'

// DB
import db from '../db/db'

const PlugsCard = () => {
    const [kitchenPlug, setKitchenPlug] = useState("rgb(66, 90, 112)");
    const [levingRoomPlug, setLivingRoomPlug] = useState("rgb(66, 90, 112)");
    const [bedroom1Plug, setBedroom1Plug] = useState("rgb(66, 90, 112)");
    const [bedroom2Plug, setBedroom2Plug] = useState("rgb(66, 90, 112)");
    const [plugs, setPlugs] = useState({
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
            db.collection("domotica").doc("plugs").update({
                plugs: plugs
            });
        }
    }, [plugs]);

    return(
        <Card>
            <div className={styles.container}>
                <div onClick={(e) => togglePlug(e, kitchenPlug, setKitchenPlug, plugs, setPlugs)} className={styles.button} style={{backgroundColor: kitchenPlug}}>
                    Kitchen
                </div>
                <div onClick={(e) => togglePlug(e, levingRoomPlug, setLivingRoomPlug, plugs, setPlugs)} className={styles.button} style={{backgroundColor: levingRoomPlug}}>
                    Living Room
                </div>
                <div onClick={(e) => togglePlug(e, bedroom1Plug, setBedroom1Plug, plugs, setPlugs)} className={styles.button} style={{backgroundColor: bedroom1Plug}}>
                    Bedroom 1
                </div>
                <div onClick={(e) => togglePlug(e, bedroom2Plug, setBedroom2Plug, plugs, setPlugs)} className={styles.button} style={{backgroundColor: bedroom2Plug}}>
                    Bedroom 2
                </div>
            </div>
        </Card>
    )
}

const togglePlug = (e: any, plug: string, setPlug: any, plugs: any, setPlugs: any) => {
    const area = e.target.innerHTML

    switch(area) {
        case 'Kitchen':
            if(plug === "rgb(66, 90, 112)") {
                setPlug("rgb(86, 170, 248)")
                setPlugs({
                    kitchen: true,
                    livingRoom: plugs.livingRoom,
                    bedroom1: plugs.bedroom1,
                    bedroom2: plugs.bedroom2
                })
            }
            else {
                setPlug("rgb(66, 90, 112)")
                setPlugs({
                    kitchen: false,
                    livingRoom: plugs.livingRoom,
                    bedroom1: plugs.bedroom1,
                    bedroom2: plugs.bedroom2
                })
            }
            break
        case 'Living Room':
            if(plug === "rgb(66, 90, 112)") {
                setPlug("rgb(86, 170, 248)")
                setPlugs({
                    kitchen: plugs.kitchen,
                    livingRoom: true,
                    bedroom1: plugs.bedroom1,
                    bedroom2: plugs.bedroom2
                })
            }
            else {
                setPlug("rgb(66, 90, 112)")
                setPlugs({
                    kitchen: plugs.kitchen,
                    livingRoom: false,
                    bedroom1: plugs.bedroom1,
                    bedroom2: plugs.bedroom2
                })
            }
            break
        case 'Bedroom 1':
            if(plug === "rgb(66, 90, 112)") {
                setPlug("rgb(86, 170, 248)")
                setPlugs({
                    kitchen: plugs.kitchen,
                    livingRoom: plugs.livingRoom,
                    bedroom1: true,
                    bedroom2: plugs.bedroom2
                })
            }
            else {
                setPlug("rgb(66, 90, 112)")
                setPlugs({
                    kitchen: plugs.kitchen,
                    livingRoom: plugs.livingRoom,
                    bedroom1: false,
                    bedroom2: plugs.bedroom2
                })
            }
            break
        case 'Bedroom 2':
            if(plug === "rgb(66, 90, 112)") {
                setPlug("rgb(86, 170, 248)")
                setPlugs({
                    kitchen: plugs.kitchen,
                    livingRoom: plugs.livingRoom,
                    bedroom1: plugs.bedroom1,
                    bedroom2: true
                })
            }
            else {
                setPlug("rgb(66, 90, 112)")
                setPlugs({
                    kitchen: plugs.kitchen,
                    livingRoom: plugs.livingRoom,
                    bedroom1: plugs.bedroom1,
                    bedroom2: false
                })
            }
            break
    }
}

export default PlugsCard;
