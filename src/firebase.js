import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

// Firebase Configuration
// Replace these placeholders with your actual Firebase project credentials
// Get these from: Firebase Console > Project Settings > Web App config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (the database)
export const db = getFirestore(app);

/**
 * Search for a location in Firestore
 * @param {string} searchQuery - The user's search input (location name or pincode)
 * @returns {Promise<Array>} - Array of matching location documents
 */
export const searchLocation = async (searchQuery) => {
  try {
    // Normalize the query: convert to lowercase for case-insensitive search
    const normalizedQuery = searchQuery.toLowerCase().trim();

    // Reference to the "locations" collection
    const locationsRef = collection(db, "locations");

    // Query: Find documents where search_keys array contains the normalized query
    // Note: Firestore array-contains is case-sensitive, so we store normalized keys
    const q = query(
      locationsRef,
      where("search_keys", "array-contains", normalizedQuery)
    );

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map results to include the document ID (useful for routing)
    const results = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    return results;
  } catch (error) {
    console.error("Error searching locations:", error);
    throw new Error("Failed to search locations. Please try again.");
  }
};

/**
 * Fetch a single location by its document ID
 * @param {string} locationId - The Firestore document ID
 * @returns {Promise<Object>} - The location document data
 */
export const getLocationById = async (locationId) => {
  try {
    const docRef = doc(db, "locations", locationId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("Location not found");
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error fetching location:", error);
    throw new Error("Failed to load location data.");
  }
};
