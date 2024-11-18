import { 
    getFirestore, addDoc, collection, query, 
    where, orderBy, getDocs, updateDoc, doc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js"

import { app } from "./firebase_core.js";
import { itemMemo } from "../model/itemMemo.js";

const ITEMMEMO_COLL = 'inventory';

const db = getFirestore(app);

export async function additemMemo(itemMemo) {
        const docRef = await addDoc(collection(db, ITEMMEMO_COLL), itemMemo.toFirestore());
        return docRef.id; // Auto-generated doc id in Firestore
}

export async function getitemList(email) {
    let itemList = [];
    const coll = collection(db, ITEMMEMO_COLL);
    const q = query(coll, 
                where('email', '==', email), 
                orderBy('timestamp',),
            );
    const snapShot = await getDocs(q);
    snapShot.forEach(doc => {
        const p = new itemMemo(doc.data());
        p.set_docId(doc.id);
        itemList.push(p);
    });
    return itemList;
    
}

export async function updateItemValue(docId, update) {
    const docRef = doc(db, ITEMMEMO_COLL, docId);
    await updateDoc(docRef, update);
}

export async function deleteItemValue(docId) {
    const docRef = doc(db, ITEMMEMO_COLL, docId);
    await deleteDoc(docRef);
}