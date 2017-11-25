import firebase from 'firebase'
import env from '../../.env'

let config = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DB_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MSG_SENDER_ID
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
