//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
    appId: process.env.REACT_APP_FIREBASE_API_ID,
    measurementId: "G-MFJVHHZ0ZX"
  };
  
// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };