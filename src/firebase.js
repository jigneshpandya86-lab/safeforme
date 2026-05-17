import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query as firestoreQuery,
  where,
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA7zNL3rYgM7prdtZQA0puMo4g4rHDx3Kw',
  authDomain: 'safe-for-me-2bc19.firebaseapp.com',
  projectId: 'safe-for-me-2bc19',
  storageBucket: 'safe-for-me-2bc19.firebasestorage.app',
  messagingSenderId: '144307434594',
  appId: '1:144307434594:web:9c9bc31070c11f20264d3b',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function searchLocation(searchText) {
  try {
    const normalizedQuery = searchText.toLowerCase().trim();
    const locationsRef = collection(db, 'locations');
    const locationsQuery = firestoreQuery(locationsRef, where('search_keys', 'array-contains', normalizedQuery));
    const querySnapshot = await getDocs(locationsQuery);

    return querySnapshot.docs.map((locationDoc) => ({
      id: locationDoc.id,
      ...locationDoc.data(),
    }));
  } catch (error) {
    console.error('Error searching locations:', error);
    throw new Error('Failed to search locations. Please try again.');
  }
}

export async function getLocationById(locationId) {
  try {
    const docRef = doc(db, 'locations', locationId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Location not found');
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error('Error fetching location:', error);
    throw new Error('Failed to load location data.');
  }
}
