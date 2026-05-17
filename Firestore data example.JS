// FIRESTORE COLLECTION: locations
// DOCUMENT EXAMPLE: documents/ajmer-road-vadodara

{
  "search_keys": [
    "ajmer road",
    "ajmer",
    "vadodara",
    "390019",
    "baroda"
  ],
  "locationName": "Ajmer Road, Vadodara, Gujarat",
  "pincode": "390019",
  "coordinates": {
    "latitude": 22.3072,
    "longitude": 73.1812
  },
  "overallRating": 3.8,
  "summaryText": "Ajmer Road is a moderately safe area in Vadodara with mixed safety metrics. It's a commercial hub with decent street lighting in main areas, though some side lanes require caution during late night hours. Police presence is moderate, and emergency services are accessible.",
  "crimeStats": {
    "violentCrimes": "Low",
    "theftPetty": "Medium",
    "kidnapping": "Low",
    "sexualCrimes": "Low",
    "infrastructure": "Good Street Lighting"
  },
  "emergencyHubs": [
    {
      "type": "Hospital",
      "name": "Baroda Medical College Hospital",
      "distance": "1.2 km"
    },
    {
      "type": "Police Station",
      "name": "Vadodara City Police - Ajmer Road Station",
      "distance": "0.8 km"
    },
    {
      "type": "Fire Station",
      "name": "Vadodara Fire Brigade - Central Station",
      "distance": "2.1 km"
    }
  ],
  "nightTimeCondition": "During night hours (after 9 PM), the area becomes quieter with reduced foot traffic. Main roads are well-lit, but side streets and alleys should be avoided. Police patrols are regular but not always visible. Recommendations:\n\n• Stay on main roads after sunset\n• Avoid isolated alleys and parking lots\n• Travel in groups after 11 PM\n• Use trusted transportation services\n• Keep phone charged and share location with trusted contacts"
}

// INSTRUCTIONS FOR FIRESTORE SETUP:
// 1. Go to Firebase Console > Firestore Database
// 2. Create a new collection called "locations"
// 3. Add documents manually OR use Firebase Admin SDK to bulk import
// 4. Each document ID can be auto-generated or meaningful (e.g., "ajmer-road-vadodara")
// 5. Ensure all fields match the schema above
// 6. Add compound indexes if you plan to query on multiple fields

// BULK IMPORT EXAMPLE (Firebase Admin SDK):
// const admin = require('firebase-admin');
// admin.initializeApp();
// 
// const db = admin.firestore();
// const locations = [
//   { docId: "ajmer-road-vadodara", data: { ... } },
//   { docId: "sat-pura-mumbai", data: { ... } },
// ];
// 
// locations.forEach(async (loc) => {
//   await db.collection('locations').doc(loc.docId).set(loc.data);
// });
