// src/firebase/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_STORAGE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SEU_APP_ID',
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Configura o armazenamento (Firebase Storage)
const storage = firebase.storage();

export { storage, firebase as default };