import React, { useState, useEffect } from 'react';

//Styles
import styles from '../css/doorsCard.module.css'

// Custom components
import Card from './Card'

// DB
import db from '../db/db'

const DoorsCard = (props: any) => {
    const [frontDoor, setFrontDoor] = useState("rgb(145, 56, 56)");
    const [backDoor, setBackDoor] = useState("rgb(145, 56, 56)");
    const [doors, setDoors] = useState({
        frontDoorLocked: true,
        backDoorLocked: true,
    });
    const [justLoaded, setJustLoaded] = useState(true);

    useEffect(() => {
        setTimeout(function(){ 
            setJustLoaded(false)
        }, 100);
    }, []);

    useEffect(() => {
        if(!justLoaded) {
            db.collection("domotica").doc("doors").update({
                doors: doors
            });
        }
    }, [doors]);

    useEffect(() => {
        toggleAllLocks(frontDoor, backDoor, setBackDoor, setFrontDoor, setDoors, justLoaded)
    }, [props.alarm]);

    return(
        <Card>
            <div className={styles.container}>
                <div onClick={(e) => toggleLock(e, frontDoor, setFrontDoor, doors, setDoors)} className={styles.button} style={{backgroundColor: frontDoor}}>
                    Front Door
                </div>
                <div onClick={(e) => toggleLock(e, backDoor, setBackDoor, doors, setDoors)} className={styles.button} style={{backgroundColor: backDoor}}>
                    Back Door
                </div>
            </div>
        </Card>
    )
}

const toggleLock = (e: any, lock: string, setLock: any, doors: any, setDoors: any) => {
    const door = e.target.innerHTML

    switch(door) {
        case 'Front Door':
            if(lock === "rgb(145, 56, 56)") {
                setLock("rgb(52, 240, 52)")
                setDoors({
                    frontDoorLocked: false,
                    backDoorLocked: doors.backDoorLocked
                })
            }
            else {
                setLock("rgb(145, 56, 56)")
                setDoors({
                    frontDoorLocked: true,
                    backDoorLocked: doors.backDoorLocked
                })
            }
            break
        case 'Back Door':
            if(lock === "rgb(145, 56, 56)") {
                setLock("rgb(52, 240, 52)")
                setDoors({
                    frontDoorLocked: doors.frontDoorLocked,
                    backDoorLocked: false
                })
            }
            else {
                setLock("rgb(145, 56, 56)")
                setDoors({
                    frontDoorLocked: doors.frontDoorLocked,
                    backDoorLocked: true
                })
            }
            break
    }
}

const toggleAllLocks = (frontDoor: string, backDoor: string, setBackDoor: any, setFrontDoor: any, setDoors: any, justLoaded: boolean) => {

    if(!justLoaded) {
        setBackDoor("rgb(52, 240, 52)")
        setFrontDoor("rgb(52, 240, 52)")
        setDoors({
            frontDoorLocked: false,
            backDoorLocked: false
        })
    }
}

export default DoorsCard;
