const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKk85oT-aDKvVfYeC_aQvH1I2dGqkemFI",
  authDomain: "paragraph-separation.firebaseapp.com",
  projectId: "paragraph-separation",
  storageBucket: "paragraph-separation.appspot.com",
  messagingSenderId: "722819468378",
  appId: "1:722819468378:web:8abb9a16ececb46d069c63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

module.exports = { storage, db };
