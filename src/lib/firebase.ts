import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNzyRytAq0QzAxeEA-Oe8Nu9NdKtIS8Xw",
  authDomain: "vitetypescriptgallery.firebaseapp.com",
  projectId: "vitetypescriptgallery",
  storageBucket: "vitetypescriptgallery.appspot.com",
  messagingSenderId: "310311366630",
  appId: "1:310311366630:web:522e67fcf3fa6ecf81f027",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
