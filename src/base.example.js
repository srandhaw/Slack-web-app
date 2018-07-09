import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config);

//Configure authentication
export const googleProvides = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

//Initialize database and re-base
 const db = firebase.database(app)
 export default Rebase.createClass(db)