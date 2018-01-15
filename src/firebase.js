import * as Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyBoR00-xgLUYQr1sFt1CytEgZcC2CIIEHs',
  databaseURL: 'https://healint-475cb.firebaseio.com'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()

function fetchData (ref) {
  return new Promise(resolve => {
    db.ref(ref).once('value', function (snapshot) {
      resolve(snapshot.val())
    })
  })
}

export function fetchSettings () {
  return fetchData('/settings')
}

export function updateSettings (settings) {
  const {id: _, ...changedSettings} = settings
  return db.ref(`/settings/${settings.id}`).update(changedSettings)
}

export function fetchRecords () {
  return fetchData('/records')
}

export function updateRecord (record) {
  const {id: _, ...changedRecord} = record
  return db.ref(`/records/${record.id}`).update(changedRecord)
}
