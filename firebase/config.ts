import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBEs7vkZ9zRT2rfGqq4LE67gRcIFBbkAmM",
  authDomain: "pme-investor-dashboard.firebaseapp.com",
  databaseURL: "https://pme-investor-dashboard-default-rtdb.firebaseio.com",
  projectId: "pme-investor-dashboard",
  storageBucket: "pme-investor-dashboard.appspot.com",
  messagingSenderId: "862289684970",
  appId: "1:862289684970:web:b17e8152a83343e8862a93",
  measurementId: "G-S3P3LJ6KMB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
