import express from 'express'
import cors from 'cors'
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import handler from './handlers.js'
import { getFirestore, doc, getDoc, query, where, collection, getDocs, addDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC3OWc2CDCQ3vfY-_fqY4MH9g3zGhzCNuw",
    authDomain: "cityglobetime-60d55.firebaseapp.com",
    databaseURL: "https://cityglobetime-60d55-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cityglobetime-60d55",
    storageBucket: "cityglobetime-60d55.appspot.com",
    messagingSenderId: "198780379886",
    appId: "1:198780379886:web:9fc732ecdfac6a288589ff",
    measurementId: "G-PBPY3L92Z8"
};

const appFirebase = initializeApp(firebaseConfig)

const db = getFirestore();

export const getTopic = async (subject, topic) => {
    const ref = collection(db, subject)
    const query_ = query(ref, where('name', 'array-contains', topic))
    try {
        const docs = await getDocs(query_)
        return docs
    } catch (e) {
        return e
    }
}

const skill = handler.create();
const adapter = new ExpressAdapter(skill, false, false);

const app = express();
app.use(cors());

app.post('/alexa', adapter.getRequestHandlers())
app.get('/', (req, res) => res.send("<Welcome! I'm your personal Learning Assistant!"))
app.listen(process.env.PORT || 5000, () => {
    console.log('Learning Assistent listening on port 5000')
})
