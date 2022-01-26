import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
      databaseURL: 'YOUR_DB_URL'
    })
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack)
  }
}
export default admin.firestore()

// var admin = require('firebase-admin')

// var serviceAccount = require('path/to/serviceAccountKey.json')

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// })
