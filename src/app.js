const REPORTS = [
  {
    id: 'vadodara-central',
    name: 'Vadodara Central',
    city: 'Vadodara, Gujarat',
    query: ['vadodara', 'baroda', 'vadodara central', '390001', '390005', '390007'],
    score: 78,
    confidence: 86,
    trend: 'Improving',
    updated: 'May 17, 2026',
    summary:
      'Strong daytime movement around transport, markets, hospitals, and civic zones gives central Vadodara a dependable safety baseline. Late-night travel near isolated lanes and parking stretches still needs planning.',
    coordinates: [22.3072, 73.1812],
    stats: [
      ['Personal safety', 'Strong', 78],
      ['Theft exposure', 'Moderate', 54],
      ['Street lighting', 'Strong', 81],
      ['Transit access', 'Strong', 88],
      ['Crowd support', 'Strong', 76],
      ['Response proximity', 'Strong', 89],
    ],
    incidents: [
      ['Railway station exits', 'Bag snatching and touting risk', 'Late evening', 'Medium'],
      ['Mandvi and market lanes', 'Pickpocketing in dense crowds', 'Afternoon', 'Low'],
      ['Isolated parking edges', 'Two-wheeler theft exposure', 'Night', 'Medium'],
    ],
    hubs: [
      ['SSG Hospital', 'Hospital', '1.0 km', '24/7'],
      ['Raopura Police Station', 'Police', '1.2 km', '24/7'],
      ['Vadodara Fire Brigade HQ', 'Fire', '1.8 km', '24/7'],
    ],
    plan: ['Prefer station pickup points and main roads after 10 PM', 'Park two-wheelers in guarded or visible areas', 'Keep valuables close in Mandvi, Nyay Mandir, and market crowds'],
  },
  {
    id: 'alkapuri-sayajigunj',
    name: 'Alkapuri and Sayajigunj',
    city: 'Vadodara, Gujarat',
    query: ['alkapuri', 'sayajigunj', 'fatehgunj', '390005', '390020'],
    score: 81,
    confidence: 85,
    trend: 'Stable',
    updated: 'May 17, 2026',
    summary:
      'Commercial activity, hotels, colleges, and transport access keep this corridor active through most of the day. The main risks are late-night walking alone, unguarded parking, and crowd-related theft near busy stops.',
    coordinates: [22.3104, 73.1708],
    stats: [
      ['Personal safety', 'Strong', 84],
      ['Theft exposure', 'Moderate', 50],
      ['Street lighting', 'Strong', 83],
      ['Transit access', 'Strong', 91],
      ['Crowd support', 'Strong', 82],
      ['Response proximity', 'Strong', 86],
    ],
    incidents: [
      ['Station road approaches', 'Phone and wallet theft exposure', 'Evening', 'Medium'],
      ['Hotel and cafe parking', 'Two-wheeler theft exposure', 'Night', 'Medium'],
      ['College-area side lanes', 'Harassment complaints risk', 'Late evening', 'Low'],
    ],
    hubs: [
      ['Sterling Hospital Vadodara', 'Hospital', '1.6 km', '24/7'],
      ['Sayajigunj Police Station', 'Police', '0.8 km', '24/7'],
      ['Akota Fire Station', 'Fire', '3.0 km', '24/7'],
    ],
    plan: ['Use main pickup points near hotels, malls, and station roads', 'Avoid isolated campus-side lanes after late dinners', 'Do not leave helmets, laptops, or bags visible on two-wheelers or in cars'],
  },
  {
    id: 'manjalpur-makarpura',
    name: 'Manjalpur and Makarpura',
    city: 'Vadodara, Gujarat',
    query: ['manjalpur', 'makarpura', 'tarsali', '390009', '390010'],
    score: 73,
    confidence: 82,
    trend: 'Stable',
    updated: 'May 17, 2026',
    summary:
      'Residential blocks, industrial movement, and arterial roads make daytime travel practical. Risk increases late at night around low-footfall stretches, service roads, and industrial approaches.',
    coordinates: [22.2559, 73.1885],
    stats: [
      ['Personal safety', 'Moderate', 70],
      ['Theft exposure', 'Moderate', 58],
      ['Street lighting', 'Moderate', 64],
      ['Transit access', 'Moderate', 68],
      ['Crowd support', 'Moderate', 61],
      ['Response proximity', 'Moderate', 73],
    ],
    incidents: [
      ['Makarpura GIDC approaches', 'Low-footfall travel risk', 'Night', 'Medium'],
      ['Service road parking', 'Vehicle theft exposure', 'Evening', 'Medium'],
      ['Tarsali junction area', 'Traffic and pedestrian conflict', 'Peak hours', 'Low'],
    ],
    hubs: [
      ['Bhailal Amin General Hospital', 'Hospital', '6.0 km', '24/7'],
      ['Makarpura Police Station', 'Police', '1.4 km', '24/7'],
      ['Makarpura Fire Station', 'Fire', '1.8 km', '24/7'],
    ],
    plan: ['Prefer cab or auto for late-night industrial-area travel', 'Stick to arterial roads instead of service lanes', 'Share live location when commuting after shift hours'],
  },
  {
    id: 'ahmedabad-west',
    name: 'Ahmedabad West',
    city: 'Ahmedabad, Gujarat',
    query: ['ahmedabad', 'amdavad', 'sg highway', 'navrangpura', 'bodakdev', '380009', '380054'],
    score: 77,
    confidence: 84,
    trend: 'Stable',
    updated: 'May 17, 2026',
    summary:
      'West Ahmedabad has strong road access, commercial activity, and hospital coverage. Late-night exposure is mostly around high-speed corridors, event dispersal points, and isolated parking areas.',
    coordinates: [23.0225, 72.5714],
    stats: [
      ['Personal safety', 'Strong', 79],
      ['Theft exposure', 'Moderate', 56],
      ['Street lighting', 'Strong', 78],
      ['Transit access', 'Moderate', 70],
      ['Crowd support', 'Strong', 75],
      ['Response proximity', 'Strong', 84],
    ],
    incidents: [
      ['SG Highway service roads', 'Late-night road safety risk', 'Night', 'Medium'],
      ['Mall and event parking', 'Vehicle break-in exposure', 'Evening', 'Medium'],
      ['Navrangpura market areas', 'Crowd theft exposure', 'Afternoon', 'Low'],
    ],
    hubs: [
      ['Civil Hospital Ahmedabad', 'Hospital', '7.5 km', '24/7'],
      ['Navrangpura Police Station', 'Police', '1.0 km', '24/7'],
      ['Ahmedabad Fire and Emergency Services', 'Fire', '3.5 km', '24/7'],
    ],
    plan: ['Use marked pickup zones after events and mall visits', 'Avoid walking on service roads late at night', 'Keep emergency contacts ready for highway travel'],
  },
];

const state = {
  activeId: REPORTS[0].id,
  remoteReports: new Map(),
  time: 'evening',
  transport: 'walk',
  query: '',
};

const $ = (selector) => document.querySelector(selector);
let firebaseApiPromise;

function icon(name) {
  const paths = {
    shield: '<path d="M12 3l7 3v5c0 5-3 9-7 10-4-1-7-5-7-10V6l7-3z"></path><path d="M9 12l2 2 4-5"></path>',
    search: '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path>',
    map: '<path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"></path><path d="M9 3v15"></path><path d="M15 6v15"></path>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
    print: '<path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path>',
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
}

function getActiveReport() {
  return state.remoteReports.get(state.activeId) || REPORTS.find((report) => report.id === state.activeId) || REPORTS[0];
}

function getAllReports() {
  return [...state.remoteReports.values(), ...REPORTS.filter((report) => !state.remoteReports.has(report.id))];
}

function adjustedScore(report) {
  let score = report.score;
  if (state.time === 'night') score -= 9;
  if (state.time === 'morning') score += 3;
  if (state.transport === 'drive') score += 4;
  if (state.transport === 'transit') score -= 2;
  return Math.max(0, Math.min(100, score));
}

function riskLabel(score) {
  if (score >= 80) return 'Low risk';
  if (score >= 65) return 'Moderate risk';
  return 'Elevated risk';
}

function findReport(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;
  return getAllReports().find((report) => report.query.some((term) => term.includes(normalized) || normalized.includes(term)));
}

function loadFirebaseApi() {
  firebaseApiPromise ||= import('./firebase.js');
  return firebaseApiPromise;
}

function scoreFromValue(value, fallback = 70) {
  if (typeof value === 'number') return Math.round(value);
  if (typeof value !== 'string') return fallback;
  const normalized = value.toLowerCase();
  if (normalized.includes('low') || normalized.includes('strong')) return 78;
  if (normalized.includes('high') || normalized.includes('elevated')) return 68;
  return 58;
}

function normalizeStats(data) {
  if (Array.isArray(data.stats)) return data.stats;
  if (!data.crimeStats || typeof data.crimeStats !== 'object') {
    return [
      ['Personal safety', 'Moderate', 70],
      ['Theft exposure', 'Moderate', 58],
      ['Street lighting', 'Moderate', 65],
      ['Transit access', 'Moderate', 66],
      ['Crowd support', 'Moderate', 64],
      ['Response proximity', 'Moderate', 70],
    ];
  }

  return Object.entries(data.crimeStats).map(([key, value]) => [
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase()),
    String(value),
    scoreFromValue(value),
  ]);
}

function normalizeIncidents(data) {
  if (!Array.isArray(data.incidents)) return [];
  return data.incidents.map((incident) => {
    if (Array.isArray(incident)) return incident;
    return [
      incident.area || incident.location || incident.name || 'Reported area',
      incident.type || incident.description || 'Safety signal',
      incident.time || incident.timeOfDay || 'Recent',
      incident.severity || 'Medium',
    ];
  });
}

function normalizeHubs(data) {
  const hubs = data.hubs || data.emergencyHubs || [];
  if (!Array.isArray(hubs)) return [];
  return hubs.map((hub) => {
    if (Array.isArray(hub)) return hub;
    return [hub.name || 'Emergency hub', hub.type || 'Emergency', hub.distance || 'Nearby', hub.hours || '24/7'];
  });
}

function normalizeCoordinates(data) {
  if (Array.isArray(data.coordinates)) return data.coordinates;
  if (data.coordinates?.latitude && data.coordinates?.longitude) {
    return [data.coordinates.latitude, data.coordinates.longitude];
  }
  if (data.latitude && data.longitude) return [data.latitude, data.longitude];
  return [22.3072, 73.1812];
}

function normalizeRemoteReport(data) {
  const ratingScore = typeof data.overallRating === 'number' ? data.overallRating * 20 : undefined;
  const score = Math.round(data.score || data.safetyScore || ratingScore || 70);
  const cityParts = [data.city, data.district, data.state || data.region].filter(Boolean);

  return {
    id: data.id,
    name: data.name || data.locationName || data.location_name || 'Gujarat location',
    city: cityParts.join(', ') || data.address || 'Gujarat',
    query: data.search_keys || data.query || [],
    score,
    confidence: data.confidence || 80,
    trend: data.trend || 'Live from Firestore',
    updated: data.updated || data.updatedAt || 'Firestore',
    summary: data.summary || data.summaryText || 'Live Firestore safety report loaded for this location.',
    coordinates: normalizeCoordinates(data),
    stats: normalizeStats(data),
    incidents: normalizeIncidents(data),
    hubs: normalizeHubs(data),
    plan: data.plan || data.recommendations || data.safetyTips || ['Use main roads after dark', 'Share your live location for late travel', 'Keep emergency numbers 112 and 108 ready'],
  };
}

function render() {
  const report = getActiveReport();
  const score = adjustedScore(report);

  $('#app').innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <a class="brand" href="#${report.id}" aria-label="Safe For Me home">
          <span class="brand-mark">${icon('shield')}</span>
          <span><strong>Safe For Me</strong><small>Safety intelligence</small></span>
        </a>

        <form class="search" id="search-form">
          <label for="location-search">Location</label>
          <div class="search-box">
            ${icon('search')}
            <input id="location-search" name="location" autocomplete="off" placeholder="City, area, or PIN code" value="${state.query}" />
          </div>
          <button class="primary" type="submit">${icon('map')} Generate report</button>
          <p class="form-note" id="search-note">Try Vadodara, Alkapuri, Manjalpur, Ahmedabad, or 390001.</p>
        </form>

        <nav class="location-list" aria-label="Saved locations">
          ${getAllReports().map(
            (item) => `
              <button class="location-item ${item.id === report.id ? 'active' : ''}" data-report="${item.id}">
                <span><strong>${item.name}</strong><small>${item.city}</small></span>
                <b>${item.score}</b>
              </button>
            `,
          ).join('')}
        </nav>
      </aside>

      <main class="workspace">
        <header class="topbar">
          <div>
            <p class="eyebrow">Updated ${report.updated}</p>
            <h1>${report.name}</h1>
            <p>${report.city}</p>
          </div>
          <div class="actions">
            <button class="ghost" id="print-report" type="button">${icon('print')} Print</button>
            <button class="danger" type="button">${icon('phone')} Emergency: 112 / 108</button>
          </div>
        </header>

        <section class="hero-grid">
          <article class="score-panel">
            <div class="score-ring" style="--score:${score * 3.6}deg">
              <span>${score}</span>
              <small>${riskLabel(score)}</small>
            </div>
            <div class="score-copy">
              <div class="status-row">
                <span class="pill">${report.trend}</span>
                <span class="pill neutral">${report.confidence}% confidence</span>
              </div>
              <h2>Personal safety report</h2>
              <p>${report.summary}</p>
            </div>
          </article>

          <article class="map-panel" aria-label="Area safety map">
            <div class="map-visual">
              <span class="pin main" style="left:52%;top:42%"></span>
              <span class="pin warn" style="left:34%;top:62%"></span>
              <span class="pin safe" style="left:70%;top:58%"></span>
              <span class="route"></span>
            </div>
            <div class="map-meta">
              <span>${report.coordinates[0].toFixed(4)}, ${report.coordinates[1].toFixed(4)}</span>
              <strong>${state.transport.toUpperCase()} / ${state.time.toUpperCase()}</strong>
            </div>
          </article>
        </section>

        <section class="controls" aria-label="Report filters">
          <div class="segmented" role="group" aria-label="Time of day">
            ${['morning', 'evening', 'night'].map((time) => `<button class="${state.time === time ? 'selected' : ''}" data-time="${time}">${time}</button>`).join('')}
          </div>
          <div class="segmented" role="group" aria-label="Transport mode">
            ${['walk', 'transit', 'drive'].map((mode) => `<button class="${state.transport === mode ? 'selected' : ''}" data-transport="${mode}">${mode}</button>`).join('')}
          </div>
        </section>

        <section class="metrics">
          ${report.stats
            .map(
              ([label, level, value]) => `
                <article class="metric">
                  <div><span>${label}</span><strong>${level}</strong></div>
                  <meter min="0" max="100" value="${value}"></meter>
                </article>
              `,
            )
            .join('')}
        </section>

        <section class="content-grid">
          <article class="panel">
            <div class="section-title">${icon('alert')}<h2>Incident signals</h2></div>
            <div class="incident-list">
              ${report.incidents
                .map(
                  ([area, type, time, severity]) => `
                    <div class="incident">
                      <span class="severity ${severity.toLowerCase()}">${severity}</span>
                      <div><strong>${area}</strong><small>${type} / ${time}</small></div>
                    </div>
                  `,
                )
                .join('')}
            </div>
          </article>

          <article class="panel">
            <div class="section-title">${icon('phone')}<h2>Emergency hubs</h2></div>
            <div class="hub-list">
              ${report.hubs
                .map(
                  ([name, type, distance, hours]) => `
                    <div class="hub">
                      <div><strong>${name}</strong><small>${type} / ${hours}</small></div>
                      <span>${distance}</span>
                    </div>
                  `,
                )
                .join('')}
            </div>
          </article>
        </section>

        <section class="plan-band">
          <div>
            <p class="eyebrow">Recommended plan</p>
            <h2>Before you go</h2>
          </div>
          <ol>
            ${report.plan.map((item) => `<li>${item}</li>`).join('')}
          </ol>
        </section>
      </main>
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  $('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchText = formData.get('location');
    const localMatch = findReport(searchText);
    state.query = searchText;

    if (localMatch) {
      state.activeId = localMatch.id;
      window.location.hash = localMatch.id;
      render();
      return;
    }

    const note = $('#search-note');
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    note.textContent = 'Searching Firestore...';
    submitButton.disabled = true;

    try {
      const { searchLocation } = await loadFirebaseApi();
      const results = await searchLocation(searchText);

      if (!results.length) {
        note.textContent = 'No Gujarat report found. Try Vadodara, Alkapuri, Manjalpur, Ahmedabad, or 390001.';
        return;
      }

      const remoteReport = normalizeRemoteReport(results[0]);
      state.remoteReports.set(remoteReport.id, remoteReport);
      state.activeId = remoteReport.id;
      window.location.hash = remoteReport.id;
      render();
    } catch (error) {
      note.textContent = error.message || 'Unable to reach Firestore right now.';
    } finally {
      submitButton.disabled = false;
    }
  });

  document.querySelectorAll('[data-report]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeId = button.dataset.report;
      state.query = '';
      window.location.hash = state.activeId;
      render();
    });
  });

  document.querySelectorAll('[data-time]').forEach((button) => {
    button.addEventListener('click', () => {
      state.time = button.dataset.time;
      render();
    });
  });

  document.querySelectorAll('[data-transport]').forEach((button) => {
    button.addEventListener('click', () => {
      state.transport = button.dataset.transport;
      render();
    });
  });

  $('#print-report').addEventListener('click', () => window.print());
}

const initialId = window.location.hash.replace('#', '');
if (REPORTS.some((report) => report.id === initialId)) {
  state.activeId = initialId;
}

render();
