import * as Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyBoR00-xgLUYQr1sFt1CytEgZcC2CIIEHs',
  databaseURL: 'https://healint-475cb.firebaseio.com'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

export function fetchSettings () {
  return new Promise(resolve => {
    db.ref('/settings').once('value', function (snapshot) {
      resolve(snapshot.val())
    })
  })
}

export function updateSettings (settings) {
  const {id: _, ...changedSettings} = settings
  return db.ref(`/settings/${settings.id}`).update(changedSettings)
}
