import { initializeApp } from "firebase/app";
import { deleteObject, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: import.meta.env.REACT_APP_FIREBASE_APPID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(
  firebaseApp,
  "vitetypescriptgallery.appspot.com"
);

export async function deleteImage(image: string) {
  const imageDelete = ref(storage, `images/${image}`);
  return deleteObject(imageDelete);
}

