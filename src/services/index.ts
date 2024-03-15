import {
  collection, getDocs, doc, addDoc, where, query, orderBy, getDoc, updateDoc, deleteDoc
} from "firebase/firestore";
import axios from 'axios'
import { db } from "@/utils/firebase";
import { ref } from "vue";


export interface URL {
  userName: string;
  longUrl: string;
  shortenedUrl: string;
  userId: string,
  id: string
  createdAt: {}
}

export const createURL = async (data: {
  longUrl: string;
  shortenedUrl: string;
  userId: string,
  id: string
  qrCode: string
  createdAt: {}
}) => {
  try {
    const docRef = await addDoc(collection(db, "urls"), data);
    return docRef;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (data: {
}) => {
  try {
    const response = await addDoc(collection(db, "users"), data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


export const getUrls = async (userId: string) => {
  try {
    const urls: any[] = [];
    const urlsRef = collection(db, 'urls')
    const q = query(urlsRef, where('userId', '==', userId), orderBy('createdAt'));
    const querySnapshot = await getDocs(q)

    console.log({ querySnapshot });
    querySnapshot.docs.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      urls.push({...doc.data(), userId: doc.id});
    });
    return urls;
  } catch (error) {
    console.log(error);
  }
};



const updateUrl = async (userId: string) => {
  try {
     await updateDoc(doc(db, 'urls', userId), data)
  } catch (error) {
    console.log(error)
  }

}

export const deleteUrl = async (userId: string) => {
  try {
     await deleteDoc(doc(db, 'urls', userId))
  } catch (error) {
    console.log(error)
  }

}