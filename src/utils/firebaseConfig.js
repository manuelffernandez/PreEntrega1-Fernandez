import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9-5H10c4V9QX3S7c75pGzsCoAkw6Fgec',
  authDomain: 'ecomm-ch-1fbbf.firebaseapp.com',
  projectId: 'ecomm-ch-1fbbf',
  storageBucket: 'ecomm-ch-1fbbf.appspot.com',
  messagingSenderId: '903093168026',
  appId: '1:903093168026:web:b43ae6e65aebda8618fc23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
