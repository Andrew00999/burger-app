import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/database'
import 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAP9ziBZlaaJzFZ181v1OKli56vB1cUwfg",
  authDomain: "burgers-e8e76.firebaseapp.com",
  databaseURL: "https://burgers-e8e76-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }
export default base