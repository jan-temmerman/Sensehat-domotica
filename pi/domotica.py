from sense_hat import SenseHat
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import time

SenseHat().clear()

print('Initializing Firestore connection...')
# Credentials and Firebase App initialization. Always required
firCredentials = credentials.Certificate("./domotica-sensehat-firebase-adminsdk-x6ama-d3553ff47a.json")
firApp = firebase_admin.initialize_app (firCredentials)

# Get access to Firestore
db = firestore.client()
print('Connection initialized')

lightsChanged = False
plugsChanged = False
doorsChanged = False

def on_snapshot(doc_snapshot, changes, read_time):
    global lightsChanged
    global plugsChanged
    global doorsChanged

    for change in changes:
        if change.document.id == 'lights':
            lightsChanged = True
        if change.document.id == 'doors':
            doorsChanged = True
        if change.document.id == 'plugs':
            plugsChanged = True

def setLeds(doc, id):
    if id == 'lights':
        if doc[id]['bedroom1'] == True:
            SenseHat().set_pixel(0, 2, (255, 255, 0))
        else:
            SenseHat().set_pixel(0, 2, (50, 50, 0))

        if doc[id]['bedroom2'] == True:
            SenseHat().set_pixel(0, 5, (255, 255, 0))
        else:
            SenseHat().set_pixel(0, 5, (50, 50, 0))

        if doc[id]['kitchen'] == True:
            SenseHat().set_pixel(4, 2, (255, 255, 0))
        else:
            SenseHat().set_pixel(4, 2, (50, 50, 0))

        if doc[id]['livingRoom'] == True:
            SenseHat().set_pixel(4, 5, (255, 255, 0))
        else:
            SenseHat().set_pixel(4, 5, (50, 50, 0))

    if id == 'plugs':
        if doc[id]['bedroom1'] == True:
            SenseHat().set_pixel(3, 0, (0, 0, 255))
        else:
            SenseHat().set_pixel(3, 0, (0, 0, 50))

        if doc[id]['bedroom2'] == True:
            SenseHat().set_pixel(3, 7, (0, 0, 255))
        else:
            SenseHat().set_pixel(3, 7, (0, 0, 50))

        if doc[id]['kitchen'] == True:
            SenseHat().set_pixel(7, 3, (0, 0, 255))
        else:
            SenseHat().set_pixel(7, 3, (0, 0, 50))

        if doc[id]['livingRoom'] == True:
            SenseHat().set_pixel(7, 4, (0, 0, 255))
        else:
            SenseHat().set_pixel(7, 4, (0, 0, 50))

    if id == 'doors':
        if doc[id]['frontDoorLocked'] == True:
            SenseHat().set_pixel(7, 0, (50, 0, 0))
            SenseHat().set_pixel(6, 0, (50, 0, 0))
            SenseHat().set_pixel(5, 0, (50, 0, 0))
        else:
            SenseHat().set_pixel(7, 0, (0, 255, 0))
            SenseHat().set_pixel(6, 0, (0, 255, 0))
            SenseHat().set_pixel(5, 0, (0, 255, 0))

        if doc[id]['backDoorLocked'] == True:
            SenseHat().set_pixel(7, 7, (50, 0, 0))
            SenseHat().set_pixel(6, 7, (50, 0, 0))
            SenseHat().set_pixel(5, 7, (50, 0, 0))
        else:
            SenseHat().set_pixel(7, 7, (0, 255, 0))
            SenseHat().set_pixel(6, 7, (0, 255, 0))
            SenseHat().set_pixel(5, 7, (0, 255, 0))

def readLights():
    global lightsChanged
    lightsChanged = False
    doc_ref = db.collection(u'domotica').document(u'lights')
    lights = doc_ref.get().to_dict()
    setLeds(lights, 'lights')

def readPlugs():
    global plugsChanged
    plugsChanged = False
    doc_ref = db.collection(u'domotica').document(u'plugs')
    plugs = doc_ref.get().to_dict()
    setLeds(plugs, 'plugs')

def readDoors():
    global doorsChanged
    doorsChanged = False
    doc_ref = db.collection(u'domotica').document(u'doors')
    doors = doc_ref.get().to_dict()
    setLeds(doors, 'doors')
    
def pushSensorsToDb():
    sense = SenseHat()
    humidity = sense.get_humidity()
    temp = sense.get_temperature()
    db.collection(u'domotica').document(u'sensors').update({
        u'humidity': humidity,
        u'temp': temp
    })

doc_ref = db.collection('domotica')
doc_watch = doc_ref.on_snapshot(on_snapshot)

# Keep the app running
while True:
    pushSensorsToDb()
    if lightsChanged:
        readLights()
    if plugsChanged:
        readPlugs()
    if doorsChanged:
        readDoors()
    time.sleep(1)