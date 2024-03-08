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


export const shortenLinkRequest = async (longUrl: string) => {

  try {
    const response1 = await axios.post("https://api-ssl.bitly.com/v4/shorten", {
      long_url: longUrl.value,
      domain: "bit.ly",
      group_guid: 'Bo33kKlqI2R',
    }, {
      headers: {
        Authorization: 'Bearer 6bc6989ab9f1186cd8b3ee60a89a20ac582b3f7e',
        "Content-Type": "application/json",
      }
    });
    
    const new_link = response1.data.link.replace("https://", "");

    const response2 = await axios.get(`https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`, {
      headers: {
        Authorization: 'Bearer 6bc6989ab9f1186cd8b3ee60a89a20ac582b3f7e',
      }
    });
    // console.log('created link', new_link)
    shortLink.value = response2.data;
    console.log('result', response2.data);
  } catch (error) {
    console.error(error);
  }
};
// const updateUrl = async () => {
//   const response = await updateDoc(doc(db, 'urls', data.userId))

// }

// const deleteUrl = async () => {
// const response = await deleteDoc(doc(db, 'urls', userId))
// }