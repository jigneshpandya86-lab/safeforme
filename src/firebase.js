import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7zNL3rYgM7prdtZQA0puMo4g4rHDx3Kw",
  authDomain: "safe-for-me-2bc19.firebaseapp.com",
  projectId: "safe-for-me-2bc19",
  storageBucket: "safe-for-me-2bc19.firebasestorage.app",
  messagingSenderId: "144307434594",
  appId: "1:144307434594:web:9c9bc31070c11f20264d3b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const searchLocation = async (searchQuery) => {
  try {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    const locationsRef = collection(db, "locations");
    const q = query(locationsRef, where("search_keys", "array-contains", normalizedQuery));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to search locations.");
  }
};

export const getLocationById = async (locationId) => {
  try {
    const docRef = doc(db, "locations", locationId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error("Location not found");
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to load location data.");
  }
};