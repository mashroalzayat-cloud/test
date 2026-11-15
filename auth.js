import { initializeApp } from "https://gstatic.com";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile 
} from "https://gstatic.com";
import { 
  getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, 
  collection, onSnapshot, query, orderBy, serverTimestamp 
} from "https://gstatic.com";

// ⚠️ استبدل هذه القيم بمفاتيح مشروعك من لوحة تحكم Firebase
const firebaseConfig = {
  apiKey: "ضع_هنا_API_KEY",
  authDomain: "ضع_هنا_AUTH_DOMAIN",
  projectId: "ضع_هنا_PROJECT_ID",
  storageBucket: "ضع_هنا_STORAGE_BUCKET",
  messagingSenderId: "ضع_هنا_MESSAGING_SENDER_ID",
  appId: "ضع_هنا_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const VIP_ACCOUNTS = [
  { name: 'أستاذة جيهان موسى', email: '115007', password: '160508' },
  { name: 'أستاذة همت صادق', email: '115008', password: '160509' },
  { name: 'أستاذ صلاح اللبان', email: '115009', password: '160510' },
  { name: 'أستاذة ايمان العاودلي', email: '115010', password: '160511' },
  { name: 'المبرمجون: عدي جمال دنيور ومروان محمد منصور', email: '2016', password: '0925' },
];

export { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signInWithPopup, onAuthStateChanged, signOut, updateProfile,
  doc, setDoc, getDoc, updateDoc, deleteDoc, collection, onSnapshot, query, orderBy, serverTimestamp 
};
