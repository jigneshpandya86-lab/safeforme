# Safe For Me - Location Safety Checker

A web application that helps users check the safety conditions of any location. Get comprehensive safety reports with crime statistics, emergency hub information, and night-time safety conditions.

## Features

✨ **Key Features:**
- 🔍 Location Search by name or pincode
- 📊 Comprehensive safety reports with crime statistics
- 🗺️ Location coordinates display
- 🌙 Night-time safety conditions
- 🚨 Emergency hubs and nearest critical infrastructure
- ⭐ Safety rating system (1-5 stars)
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend:** React 18.3 + React Router
- **Styling:** Tailwind CSS 3.3 + Custom CSS
- **Backend:** Firebase & Firestore
- **Icons:** Lucide React
- **Build Tool:** Vite

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Firebase project with Firestore database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jigneshpandya86-lab/safeforme.git
cd safeforme
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Copy your Firebase config
   - Update `src/firebase.js` with your credentials

4. Create Firestore Database:
   - Create a "locations" collection in Firestore
   - Add documents with the following structure:

```javascript
{
  locationName: "Downtown Area",
  pincode: "110001",
  search_keys: ["downtown area", "110001"],
  overallRating: 3.5,
  summaryText: "Moderate safety - busy commercial area",
  coordinates: {
    latitude: 28.6139,
    longitude: 77.2090
  },
  crimeStats: {
    theft: "medium",
    assault: "low",
    robbery: "high"
  },
  emergencyHubs: [
    {
      name: "Police Station",
      type: "Police",
      distance: "0.5 km"
    }
  ],
  nightTimeCondition: "Busy streets until late evening...",
}
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Automatic Deployment:**
   - Push to `main` branch
   - GitHub Actions will automatically build and deploy

3. **Access your site:**
   ```
   https://jigneshpandya86-lab.github.io/safeforme/
   ```

## Project Structure

```
safeforme/
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Global styles
│   ├── firebase.js           # Firebase configuration & utilities
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with search
│   │   └── SafetyReport.jsx  # Safety report display page
│   └── ...
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── package.json              # Dependencies
└── README.md                 # This file
```

## Usage

1. **Search for a Location:**
   - Enter location name or pincode in search bar
   - Click "Search" to find safety report

2. **View Safety Report:**
   - Check safety rating (1-5 stars)
   - Review crime statistics by category
   - Find nearest emergency hubs
   - Read night-time safety conditions

3. **Use Current Location:**
   - Click "Use Current Location" button
   - Grant location permission to browser
   - App will help find nearest location

## Environment Variables

Create a `.env` file with your Firebase configuration:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and feature requests, please create an issue on GitHub.

## Author

**Jignesh Pandya**
- GitHub: [@jigneshpandya86-lab](https://github.com/jigneshpandya86-lab)

---

**Safe For Me** - Your safety is our priority. Stay informed, stay safe! 🛡️
