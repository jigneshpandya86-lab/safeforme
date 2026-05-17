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
      'Strong daytime movement around transport, markets, hospitals, and civic zones gives central Vadodara a dependable safety baseline. Late-night travel near isolated lanes, parking stretches, and "dark spots" like Navlakhi compound still needs careful planning.',
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
      ['Isolated parking edges', 'Two-wheeler theft and harassment exposure', 'Night', 'Medium'],
      ['Navlakhi Compound area', 'Isolated "dark spot" risk', 'Late night', 'High'],
    ],
    hubs: [
      ['SSG Hospital', 'Hospital', '1.0 km', '24/7'],
      ['Raopura Police Station', 'Police', '1.2 km', '24/7'],
      ['181 Abhayam Helpline', 'Women Help', 'Direct call', '24/7'],
      ['Vadodara Fire Brigade HQ', 'Fire', '1.8 km', '24/7'],
    ],
    plan: ['Prefer station pickup points and main roads after 10 PM', 'Park two-wheelers in guarded or visible areas', 'Keep valuables close in Mandvi, Nyay Mandir, and market crowds'],
  },
  {
    id: 'alkapuri-sayajigunj',
    name: 'Alkapuri and Sayajigunj',
    city: 'Vadodara, Gujarat',
    query: ['alkapuri', 'sayajigunj', 'fatehgunj', '390005', '390020'],
    score: 77,
    confidence: 85,
    trend: 'Stable',
    updated: 'May 17, 2026',
    summary:
      'Commercial activity, hotels, and transport access keep this corridor active. However, the Fatehgunj area is currently flagged as a high-risk zone for violent crimes. Risks include late-night walking alone and street harassment near busy stops.',
    coordinates: [22.3104, 73.1708],
    stats: [
      ['Personal safety', 'Moderate', 72],
      ['Theft exposure', 'Moderate', 50],
      ['Street lighting', 'Strong', 83],
      ['Transit access', 'Strong', 91],
      ['Crowd support', 'Strong', 82],
      ['Response proximity', 'Strong', 86],
    ],
    incidents: [
      ['Station road approaches', 'Phone and wallet theft exposure', 'Evening', 'Medium'],
      ['Hotel and cafe parking', 'Two-wheeler theft exposure', 'Night', 'Medium'],
      ['Fatehgunj corridor', 'Violent crime risk and harassment', 'Late evening', 'High'],
      ['College-area side lanes', 'Eve-teasing and harassment risk', 'Late evening', 'Medium'],
    ],
    hubs: [
      ['Sterling Hospital Vadodara', 'Hospital', '1.6 km', '24/7'],
      ['Sayajigunj Police Station', 'Police', '0.8 km', '24/7'],
      ['181 Abhayam Helpline', 'Women Help', 'Direct call', '24/7'],
      ['Akota Fire Station', 'Fire', '3.0 km', '24/7'],
    ],
    plan: ['Use main pickup points near hotels, malls, and station roads', 'Avoid isolated campus-side lanes after late dinners', 'Do not leave helmets, laptops, or bags visible on two-wheelers or in cars'],
  },
  {
    id: 'manjalpur-makarpura',
    name: 'Manjalpur and Makarpura',
    city: 'Vadodara, Gujarat',
    query: ['manjalpur', 'makarpura', 'tarsali', '390009', '390010'],
    score: 62,
    confidence: 82,
    trend: 'Under Surveillance',
    updated: 'May 17, 2026',
    summary:
      'Residential blocks and industrial movement make daytime travel practical. However, both areas are officially flagged under "Project Shastra" for violent crime risks, particularly between 6 PM and midnight. Higher risk in low-footfall industrial stretches.',
    coordinates: [22.2559, 73.1885],
    stats: [
      ['Personal safety', 'Elevated risk', 58],
      ['Theft exposure', 'Moderate', 58],
      ['Street lighting', 'Moderate', 64],
      ['Transit access', 'Moderate', 68],
      ['Crowd support', 'Moderate', 61],
      ['Response proximity', 'Moderate', 73],
    ],
    incidents: [
      ['Makarpura GIDC area', 'Violent crime risk (Project Shastra)', '6 PM - 12 AM', 'High'],
      ['Service road stretches', 'Harassment and vehicle theft risk', 'Night', 'Medium'],
      ['Isolated approaches', 'Low-footfall travel risk for women', 'Late evening', 'High'],
    ],
    hubs: [
      ['Makarpura Police Station', 'Police', '1.4 km', '24/7'],
      ['SHE Team Patrol (Vadodara Police)', 'Women Safety', 'Mobile', '24/7'],
      ['181 Abhayam Helpline', 'Women Help', 'Direct call', '24/7'],
      ['Makarpura Fire Station', 'Fire', '1.8 km', '24/7'],
    ],
    plan: [
      'Avoid traveling alone in industrial stretches after 6 PM',
      'Utilize the 181 Abhayam helpline for any distress or safe passage needs',
      'Stick to well-lit arterial roads; avoid service lanes after dark',
      'Share live location with emergency contacts when commuting after shift hours',
    ],
  },
  {
    id: 'ajwa-road',
    name: 'Ajwa Road',
    city: 'Vadodara, Gujarat',
    query: ['ajwa road', 'baroda', '390019', 'vrundavan', 'kamla nagar', 'ajwa chowkdi'],
    score: 68,
    confidence: 82,
    trend: 'Stable',
    updated: 'May 17, 2026',
    summary:
      'Ajwa Road is a major residential and commercial corridor in East Vadodara. While generally safe during the day with excellent hospital and police coverage, it faces high road safety risks due to its proximity to the NH-48 highway. Residential theft spikes and traffic congestion at Ajwa Chowkdi are notable concerns.',
    coordinates: [22.3167, 73.2306],
    stats: [
      ['Personal safety', 'Strong', 75],
      ['Theft exposure', 'Moderate', 60],
      ['Street lighting', 'Moderate', 65],
      ['Transit access', 'Strong', 80],
      ['Road safety', 'Elevated risk', 45],
      ['Response proximity', 'Strong', 85],
    ],
    incidents: [
      ['Ajwa Chowkdi & NH-48', 'High-speed traffic and accident risk', 'Night', 'High'],
      ['Vrundavan & Kamla Nagar', 'Petty theft and vehicle snatching', 'Late evening', 'Medium'],
      ['Interior service roads', 'Low lighting and blind spot risk', 'Late night', 'Medium'],
    ],
    hubs: [
      ['Bapod Police Station', 'Police', '0.5 km', '24/7'],
      ['Siddhi ICU & Multispeciality', 'Hospital', '0.8 km', '24/7'],
      ['BAG Hospital', 'Hospital', '2.5 km', '24/7'],
      ['181 Abhayam Helpline', 'Women Help', 'Direct call', '24/7'],
    ],
    plan: [
      'Use caution at Ajwa Chowkdi and highway feeder roads',
      'Ensure home security with double locks for independent houses',
      'Avoid service roads after 11 PM if unlit',
    ],
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
  view: window.location.hash === '#admin' ? 'admin' : 'report',
};

const $ = (selector) => document.querySelector(selector);
let firebaseApiPromise;

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function icon(name) {
  const paths = {
    shield: '<path d="M12 3l7 3v5c0 5-3 9-7 10-4-1-7-5-7-10V6l7-3z"></path><path d="M9 12l2 2 4-5"></path>',
    search: '<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path>',
    map: '<path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"></path><path d="M9 3v15"></path><path d="M15 6v15"></path>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path>',
    alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
    print: '<path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 14h12v8H6z"></path>',
    check: '<path d="M20 6L9 17l-5-5"></path>',
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

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function rowsToText(rows) {
  return rows.map((row) => row.join(' | ')).join('\n');
}

function listToText(items) {
  return items.join('\n');
}

function parseList(value) {
  return value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseRows(value, expectedColumns) {
  return value
    .split('\n')
    .map((line) => line.split('|').map((item) => item.trim()))
    .filter((row) => row.some(Boolean))
    .map((row) => {
      while (row.length < expectedColumns) row.push('');
      return row.slice(0, expectedColumns);
    });
}

function adminTemplateReport() {
  return getActiveReport();
}

function getAdminPayload(form) {
  const formData = new FormData(form);
  const name = formData.get('name').trim();
  const city = formData.get('city').trim();
  const searchKeys = parseList(formData.get('search_keys')).map((item) => item.toLowerCase());
  const stats = parseRows(formData.get('stats'), 3).map(([label, level, value]) => [label, level, Number(value) || 0]);
  const coordinates = [Number(formData.get('latitude')) || 22.3072, Number(formData.get('longitude')) || 73.1812];

  return {
    locationName: name,
    name,
    city,
    state: formData.get('state').trim() || 'Gujarat',
    search_keys: [...new Set(searchKeys)],
    score: Number(formData.get('score')) || 70,
    confidence: Number(formData.get('confidence')) || 80,
    trend: formData.get('trend').trim() || 'Stable',
    updated: formData.get('updated').trim() || new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    summary: formData.get('summary').trim(),
    summaryText: formData.get('summary').trim(),
    coordinates,
    stats,
    incidents: parseRows(formData.get('incidents'), 4),
    emergencyHubs: parseRows(formData.get('hubs'), 4).map(([hubName, type, distance, hours]) => ({
      name: hubName,
      type,
      distance,
      hours,
    })),
    plan: parseList(formData.get('plan')),
  };
}

function getAiEndpoint() {
  return localStorage.getItem('safeforme-ai-endpoint') || '';
}

function setFieldValue(form, name, value) {
  const field = form.elements.namedItem(name);
  if (field) field.value = value ?? '';
}

function applyAiDraftToForm(form, draft) {
  const data = draft.report || draft;
  const coordinates = normalizeCoordinates(data);
  const stats = normalizeStats(data);
  const incidents = normalizeIncidents(data);
  const hubs = normalizeHubs(data);
  const plan = data.plan || data.recommendations || data.safetyTips || [];

  setFieldValue(form, 'document_id', data.id || slugify(data.name || data.locationName || form.elements.namedItem('name').value));
  setFieldValue(form, 'name', data.name || data.locationName || '');
  setFieldValue(form, 'city', data.city || data.region || data.address || 'Vadodara, Gujarat');
  setFieldValue(form, 'state', data.state || 'Gujarat');
  setFieldValue(form, 'latitude', coordinates[0]);
  setFieldValue(form, 'longitude', coordinates[1]);
  setFieldValue(form, 'score', data.score || data.safetyScore || 70);
  setFieldValue(form, 'confidence', data.confidence || 80);
  setFieldValue(form, 'trend', data.trend || 'AI draft');
  setFieldValue(form, 'updated', data.updated || new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
  setFieldValue(form, 'search_keys', listToText(data.search_keys || data.query || []));
  setFieldValue(form, 'summary', data.summary || data.summaryText || '');
  setFieldValue(form, 'plan', listToText(plan));
  setFieldValue(form, 'stats', rowsToText(stats));
  setFieldValue(form, 'incidents', rowsToText(incidents));
  setFieldValue(form, 'hubs', rowsToText(hubs));
}

async function generateAiDraft(form) {
  const endpoint = form.elements.namedItem('ai_endpoint').value.trim();
  const status = $('#ai-status');
  const brief = form.elements.namedItem('ai_brief').value.trim();

  if (!endpoint) {
    status.textContent = 'Add your AI proxy endpoint first.';
    return;
  }

  if (!brief) {
    status.textContent = 'Describe the location you want the AI to draft.';
    return;
  }

  localStorage.setItem('safeforme-ai-endpoint', endpoint);
  status.textContent = 'Generating AI draft...';

  const payload = getAdminPayload(form);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locationBrief: brief,
      currentDraft: payload,
      outputSchema: {
        id: 'document-id',
        name: 'Location name',
        city: 'City, Gujarat',
        state: 'Gujarat',
        search_keys: ['lowercase', 'pin code'],
        score: 0,
        confidence: 0,
        trend: 'Stable',
        updated: 'date label',
        summary: 'short safety summary',
        coordinates: [22.3072, 73.1812],
        stats: [['Personal safety', 'Strong', 80]],
        incidents: [['Area', 'Signal', 'Time', 'Medium']],
        emergencyHubs: [{ name: 'Hub name', type: 'Police', distance: '1.0 km', hours: '24/7' }],
        plan: ['Safety recommendation'],
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`AI endpoint returned ${response.status}`);
  }

  const draft = await response.json();
  applyAiDraftToForm(form, draft);
  status.textContent = 'AI draft applied. Review it, then save to Firestore.';
}

function renderAdmin() {
  const report = adminTemplateReport();

  $('#app').innerHTML = `
    <div class="shell admin-shell">
      <aside class="sidebar">
        <a class="brand" href="#" data-view="report" aria-label="Safe For Me reports">
          <span class="brand-mark">${icon('shield')}</span>
          <span><strong>Safe For Me</strong><small>Admin console</small></span>
        </a>

        <div class="admin-note">
          <strong>Firestore target</strong>
          <span>Collection: locations</span>
        </div>

        <nav class="location-list" aria-label="Admin presets">
          ${getAllReports().map(
            (item) => `
              <button class="location-item ${item.id === report.id ? 'active' : ''}" data-admin-report="${item.id}">
                <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.city)}</small></span>
                <b>${item.score}</b>
              </button>
            `,
          ).join('')}
        </nav>
      </aside>

      <main class="workspace admin-workspace">
        <header class="topbar">
          <div>
            <p class="eyebrow">Admin</p>
            <h1>Update safety data</h1>
            <p>Create or update Firestore location documents for Gujarat and Vadodara reports.</p>
          </div>
          <div class="actions">
            <button class="ghost" type="button" data-view="report">${icon('map')} Reports</button>
          </div>
        </header>

        <form class="admin-form" id="admin-form">
          <section class="panel admin-panel ai-panel">
            <div class="section-title"><h2>AI report draft</h2></div>
            <p class="field-help">Use a server-side proxy for Gemini. GitHub Pages cannot safely read GitHub Secrets in the browser.</p>
            <label>AI proxy endpoint<input name="ai_endpoint" value="${escapeHtml(getAiEndpoint())}" placeholder="https://your-worker.example.com/generate-report" /></label>
            <label>Location brief<textarea name="ai_brief" rows="3" placeholder="Example: Generate a safety report for Gotri, Vadodara with hospitals, police, road safety, night travel, and PIN codes."></textarea></label>
            <div class="inline-actions">
              <button class="ghost" type="button" id="generate-ai-draft">${icon('shield')} Generate AI draft</button>
              <p class="form-note" id="ai-status">Draft first, then review before saving.</p>
            </div>
          </section>

          <section class="admin-grid">
            <article class="panel admin-panel">
              <div class="section-title"><h2>Document</h2></div>
              <label>Document ID<input name="document_id" value="${escapeHtml(report.id)}" placeholder="vadodara-central" required /></label>
              <label>Location name<input name="name" value="${escapeHtml(report.name)}" required /></label>
              <label>City / region<input name="city" value="${escapeHtml(report.city)}" required /></label>
              <label>State<input name="state" value="Gujarat" /></label>
              <div class="form-row">
                <label>Latitude<input name="latitude" type="number" step="0.0001" value="${report.coordinates[0]}" /></label>
                <label>Longitude<input name="longitude" type="number" step="0.0001" value="${report.coordinates[1]}" /></label>
              </div>
            </article>

            <article class="panel admin-panel">
              <div class="section-title"><h2>Score</h2></div>
              <div class="form-row">
                <label>Safety score<input name="score" type="number" min="0" max="100" value="${report.score}" /></label>
                <label>Confidence<input name="confidence" type="number" min="0" max="100" value="${report.confidence}" /></label>
              </div>
              <label>Trend<input name="trend" value="${escapeHtml(report.trend)}" /></label>
              <label>Updated label<input name="updated" value="${escapeHtml(report.updated)}" /></label>
              <label>Search keys<textarea name="search_keys" rows="5">${escapeHtml(listToText(report.query))}</textarea></label>
            </article>
          </section>

          <section class="panel admin-panel">
            <div class="section-title"><h2>Report copy</h2></div>
            <label>Summary<textarea name="summary" rows="4" required>${escapeHtml(report.summary)}</textarea></label>
            <label>Recommended plan<textarea name="plan" rows="4">${escapeHtml(listToText(report.plan))}</textarea></label>
          </section>

          <section class="admin-grid">
            <article class="panel admin-panel">
              <div class="section-title"><h2>Stats</h2></div>
              <p class="field-help">One row per stat: label | level | score</p>
              <textarea name="stats" rows="8">${escapeHtml(rowsToText(report.stats))}</textarea>
            </article>
            <article class="panel admin-panel">
              <div class="section-title"><h2>Incident signals</h2></div>
              <p class="field-help">One row per incident: area | type | time | severity</p>
              <textarea name="incidents" rows="8">${escapeHtml(rowsToText(report.incidents))}</textarea>
            </article>
          </section>

          <section class="panel admin-panel">
            <div class="section-title"><h2>Emergency hubs</h2></div>
            <p class="field-help">One row per hub: name | type | distance | hours</p>
            <textarea name="hubs" rows="6">${escapeHtml(rowsToText(report.hubs))}</textarea>
          </section>

          <footer class="admin-actions">
            <button class="primary" type="submit">${icon('shield')} Save to Firestore</button>
            <button class="ghost" type="button" id="load-firestore-location">${icon('search')} Load by document ID</button>
            <p class="form-note" id="admin-status">Use Firestore rules to protect admin writes.</p>
          </footer>
        </form>
      </main>
    </div>
  `;

  bindAdminEvents();
}

function render() {
  if (state.view === 'admin') {
    renderAdmin();
    return;
  }

  const report = getActiveReport();
  const score = adjustedScore(report);

  $('#app').innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <a class="brand" href="#${report.id}" aria-label="Safe For Me home">
          <span class="brand-mark">${icon('shield')}</span>
          <span><strong>Safe For Me</strong><small>Safety intelligence</small></span>
        </a>
        <button class="ghost sidebar-action" type="button" data-view="admin">${icon('shield')} Admin</button>

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
                <span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.city)}</small></span>
                <b>${item.score}</b>
              </button>
            `,
          ).join('')}
        </nav>
      </aside>

      <main class="workspace">
        <header class="topbar">
          <div>
            <p class="eyebrow">Updated ${escapeHtml(report.updated)}</p>
            <h1>${escapeHtml(report.name)}</h1>
            <p>${escapeHtml(report.city)}</p>
          </div>
          <div class="actions">
            <button class="ghost" id="print-report" type="button">${icon('print')} Print</button>
            <a class="danger" href="tel:112">${icon('phone')} Emergency: 112</a>
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
                <span class="pill">${escapeHtml(report.trend)}</span>
                <span class="pill neutral">${report.confidence}% confidence</span>
              </div>
              <h2>Personal safety report</h2>
              <p>${escapeHtml(report.summary)}</p>
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
                  <div class="metric-info"><span>${escapeHtml(label)}</span><strong>${escapeHtml(level)}</strong></div>
                  <div class="progress-bar"><div class="progress-fill" style="width:${value}%"></div></div>
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
                      <span class="severity ${escapeHtml(String(severity).toLowerCase())}">${escapeHtml(severity)}</span>
                      <div><strong>${escapeHtml(area)}</strong><small>${escapeHtml(type)} / ${escapeHtml(time)}</small></div>
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
                      <div>
                        <strong>${escapeHtml(name)}</strong>
                        <small>${escapeHtml(type)} / ${escapeHtml(hours)}</small>
                      </div>
                      <div class="hub-actions">
                        <span>${escapeHtml(distance)}</span>
                        <a href="tel:112" class="hub-call" aria-label="Call ${escapeHtml(name)}">${icon('phone')}</a>
                      </div>
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
          <ul class="checklist">
            ${report.plan.map((item) => `<li>${icon('check')}${escapeHtml(item)}</li>`).join('')}
          </ul>
        </section>
      </main>
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => {
      state.view = button.dataset.view;
      window.location.hash = state.view === 'admin' ? 'admin' : state.activeId;
      render();
    });
  });

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

function bindAdminEvents() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => {
      state.view = button.dataset.view;
      window.location.hash = state.activeId;
      render();
    });
  });

  document.querySelectorAll('[data-admin-report]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeId = button.dataset.adminReport;
      renderAdmin();
    });
  });

  $('#load-firestore-location').addEventListener('click', async () => {
    const form = $('#admin-form');
    const status = $('#admin-status');
    const locationId = new FormData(form).get('document_id').trim();

    if (!locationId) {
      status.textContent = 'Enter a document ID first.';
      return;
    }

    status.textContent = 'Loading from Firestore...';
    try {
      const { getLocationById } = await loadFirebaseApi();
      const data = await getLocationById(locationId);
      const report = normalizeRemoteReport(data);
      state.remoteReports.set(report.id, report);
      state.activeId = report.id;
      renderAdmin();
    } catch (error) {
      status.textContent = error.message || 'Could not load this document.';
    }
  });

  $('#generate-ai-draft').addEventListener('click', async () => {
    const form = $('#admin-form');
    const button = $('#generate-ai-draft');
    const status = $('#ai-status');

    button.disabled = true;
    try {
      await generateAiDraft(form);
    } catch (error) {
      status.textContent = error.message || 'AI generation failed.';
    } finally {
      button.disabled = false;
    }
  });

  $('#admin-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = $('#admin-status');
    const payload = getAdminPayload(form);
    const documentId = new FormData(form).get('document_id').trim() || slugify(payload.name);

    status.textContent = 'Saving to Firestore...';
    form.querySelector('button[type="submit"]').disabled = true;

    try {
      const { saveLocation } = await loadFirebaseApi();
      const saved = await saveLocation(documentId, payload);
      const report = normalizeRemoteReport(saved);
      state.remoteReports.set(report.id, report);
      state.activeId = report.id;
      status.textContent = `Saved ${documentId} to Firestore.`;
    } catch (error) {
      status.textContent = error.message || 'Could not save this document.';
    } finally {
      form.querySelector('button[type="submit"]').disabled = false;
    }
  });
}

const initialId = window.location.hash.replace('#', '');
if (initialId === 'admin') {
  state.view = 'admin';
} else if (REPORTS.some((report) => report.id === initialId)) {
  state.activeId = initialId;
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  state.view = hash === 'admin' ? 'admin' : 'report';
  if (hash && hash !== 'admin') state.activeId = hash;
  render();
});

render();
