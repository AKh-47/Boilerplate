import firebase from "firebase";

const firebaseConfig = {};

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export default app;
