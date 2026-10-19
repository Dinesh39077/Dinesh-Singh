import JSZip from 'jszip';
import { BUSINESS_INFO } from '../data/businessData';

export async function generateProjectZip(type: 'all' | 'code' | 'docs' = 'all') {
  const zip = new JSZip();

  // Documentation and Guides
  const electricalGuideContent = `# ${BUSINESS_INFO.name} - Official House Wiring & Electrical Engineering Manual
Location: ${BUSINESS_INFO.areasText}
Mobile: ${BUSINESS_INFO.phone} | WhatsApp: ${BUSINESS_INFO.whatsapp}
Address: ${BUSINESS_INFO.address}

=============================================================================
1. INDIAN STANDARD HOUSE WIRING SPECIFICATIONS (IS 732 / NBC 2016)
=============================================================================

1.1 Standard Copper Wire Gauge Selection:
-----------------------------------------------------------------------------
- Lighting & Ceiling Fans (Up to 800W per circuit): 1.5 sq.mm FR Copper Wire
- 6A Convenience Sockets (TV, Mobile, Router): 1.5 sq.mm FR Copper Wire
- 16A Power Sockets (Geyser, AC, Microwave, Iron, Fridge): 2.5 sq.mm or 4.0 sq.mm
- 1.5 Ton to 2.0 Ton AC dedicated circuits: 4.0 sq.mm FR Copper Wire
- Main Incomer from Meter to Distribution Board (Single Phase): 6.0 sq.mm or 10.0 sq.mm
- Sub-main feed for multi-storey floors: 6.0 sq.mm to 10.0 sq.mm
- Protective Earthing (Green Wire): 1.0 sq.mm for lighting, 1.5 - 2.5 sq.mm for power

1.2 MCB & RCCB Protection Sizing:
-----------------------------------------------------------------------------
- Lighting Sub-circuits: 6A / 10A B-Curve MCB
- Power Plug Points (16A): 16A / 20A C-Curve MCB
- Air Conditioners (1.5 Ton): 20A / 25A C-Curve MCB
- Geyser (2-3 kW): 16A / 20A C-Curve MCB
- Main Incomer DP MCB: 32A / 40A / 63A DP MCB (Based on sanctioned connected load)
- Human Shock Protection (RCCB / ELCB): 40A / 63A with 30mA trip sensitivity (MANDATORY)

=============================================================================
2. STEP-BY-STEP HOUSE WIRING WORKFLOW (हिंदी और English)
=============================================================================
Phase 1: Ceiling & Slab Pipe Laying (छत ढलाई से पहले पाइप फिटिंग)
- Placement of fan boxes, deep light boxes, and heavy-duty 25mm PVC conduits before RCC casting.

Phase 2: Wall Chasing & Box Concealing (दीवारों की झिरी कटाई व बॉक्स जाम करना)
- Chasing walls with diamond cutter groover at exact switch height (48 inches from floor level).
- Fixing GI / PVC modular boxes in level with cement mortar.

Phase 3: Wire Pulling & Neutral Separation (वायर खींचना और न्यूट्रल अलग करना)
- Pulling multistrand copper wires with steel fish tape.
- Keeping separate neutral and earth for Inverter and Grid supplies.

Phase 4: Distribution Board Dressing & MCB Ferruling (डीबी ड्रेसिंग व एमसीबी कनेक्शन)
- Neat comb busbar connection, color coding (Red/Yellow/Blue Phase, Black Neutral, Green Earth).

Phase 5: Earthing & Chemical Earth Pit (अर्थिंग और अर्थ गड्ढा निर्माण)
- Copper-bonded 2-meter rod or GI plate with conductive bentonite chemical compound. Target < 2 Ohms.

Phase 6: Testing, Megger & Handover (मेगर टेस्टिंग व अंतिम लोड चेक)
- Insulation resistance testing (> 1 Mega-ohm), polarity test, and RCCB test button verification.

=============================================================================
3. INVERTER & BATTERY CALCULATOR FORMULA
=============================================================================
Total Inverter Load (Watts) = Sum of (Light + Fan + Router + TV)
VA Rating = Total Inverter Watts / Power Factor (0.8)
Recommended Inverter Size = VA Rating * 1.25 (Safety Margin)
Battery Backup (Hours) = (Battery Ah * 12V * Battery Efficiency 0.8) / Total Running Watts

=============================================================================
For direct on-site work and contractor services in Panchudala, Telagav,
Kotputli-Behror, and Paota, call Dinesh Singh Raghav at 7240259078.
`;

  const csvContent = `Appliance Name,Hindi Name,Default Watts,Recommended MCB,Recommended Wire Gauge,Inverter Backup Suitable
LED Tube Light / Bulb,एलईडी लाइट / बल्ब,20,6A,1.5 mm²,YES
Ceiling Fan,छत का पंखा,75,6A,1.5 mm²,YES
Refrigerator (Fridge),फ्रिज,250,10A,2.5 mm²,NO / High Inverter
LED TV (43-55 inch),स्मार्ट टीवी,100,6A,1.5 mm²,YES
Split AC (1.5 Ton 3/5 Star),स्प्लिट एसी (1.5 टन),1800,20A / 25A,4.0 mm²,NO
Water Heater (Geyser),पानी का गीजर,2000,16A / 20A,2.5 mm² - 4.0 mm²,NO
Water Submersible Pump,सबमर्सिबल / मोटर,750,16A,2.5 mm²,NO
Washing Machine,वाशिंग मशीन,500,16A,2.5 mm²,NO
Microwave Oven,माइक्रोवेव ओवन,1200,16A,2.5 mm²,NO
Kitchen Mixer Grinder,मिक्सर ग्राइंडर,750,16A,2.5 mm²,NO
Room Cooler,रूम कूलर,200,6A / 10A,1.5 mm²,YES
WiFi Router / Laptop Charger,वाईफाई राउटर / लैपटॉप,40,6A,1.5 mm²,YES
Iron (Press),प्रेस / इस्त्री,1000,16A,2.5 mm²,NO
`;

  const offlineHtmlGuide = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${BUSINESS_INFO.name} - House Wiring & Electrical Handbook</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 24px; }
    .container { max-width: 900px; margin: 0 auto; background: #1e293b; padding: 32px; border-radius: 16px; border: 1px solid #334155; }
    h1 { color: #f97316; margin-top: 0; }
    h2 { color: #38bdf8; border-bottom: 1px solid #334155; padding-bottom: 8px; margin-top: 24px; }
    .badge { background: #ea580c; color: white; padding: 4px 10px; border-radius: 9999px; font-weight: bold; font-size: 12px; }
    .callout { background: #0f172a; border-left: 4px solid #f97316; padding: 16px; border-radius: 8px; margin: 16px 0; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { border: 1px solid #334155; padding: 10px; text-align: left; font-size: 14px; }
    th { background: #0f172a; color: #fb923c; }
    .contact-box { background: #032b17; border: 1px solid #16a34a; padding: 20px; border-radius: 12px; margin-top: 30px; text-align: center; }
    .btn { display: inline-block; background: #16a34a; color: white; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; margin: 6px; }
    .btn-call { background: #ea580c; }
  </style>
</head>
<body>
  <div class="container">
    <span class="badge">RAJASTHAN ELECTRICAL CONTRACTOR MANUAL</span>
    <h1>⚡ ${BUSINESS_INFO.name}</h1>
    <p><strong>Professional Electrician & House Wiring Services</strong></p>
    <p>Serving: Panchudala, Telagav, Kotputli-Behror, Paota and nearby areas</p>
    
    <div class="callout">
      <h3>📞 Direct Contact:</h3>
      <p>Mobile: <strong>7240259078</strong> | WhatsApp: <strong>7240259078</strong></p>
      <p>Address: Panchudala, Telagav, Rajasthan 303108</p>
    </div>

    <h2>1. Wire Gauge & MCB Rating Quick Chart</h2>
    <table>
      <thead>
        <tr>
          <th>Application</th>
          <th>Recommended Wire</th>
          <th>Recommended MCB</th>
          <th>Typical Load</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ceiling Fans & Lighting</td>
          <td>1.5 sq.mm FR Copper</td>
          <td>6A / 10A</td>
          <td>Up to 800W</td>
        </tr>
        <tr>
          <td>Power Sockets (Fridge, Microwave)</td>
          <td>2.5 sq.mm FR Copper</td>
          <td>16A</td>
          <td>Up to 2000W</td>
        </tr>
        <tr>
          <td>1.5 Ton AC / Geyser</td>
          <td>4.0 sq.mm FR Copper</td>
          <td>20A / 25A</td>
          <td>Up to 3500W</td>
        </tr>
        <tr>
          <td>Main Incomer (Single Phase)</td>
          <td>6.0 - 10.0 sq.mm</td>
          <td>32A / 40A / 63A DP</td>
          <td>Whole House</td>
        </tr>
      </tbody>
    </table>

    <h2>2. Key Safety Rules for Indian Households</h2>
    <ul>
      <li><strong>RCCB / ELCB is Mandatory:</strong> Install a 30mA sensitivity Residual Current Circuit Breaker to prevent fatal electric shocks.</li>
      <li><strong>Separate Inverter Neutral:</strong> Never mix inverter neutral with main grid neutral to prevent back-feeding and inverter burnout.</li>
      <li><strong>Solid Earthing (< 2 Ohms):</strong> Provide dedicated GI/Copper pipe earthing with chemical salt compound for all 3-pin plugs.</li>
    </ul>

    <div class="contact-box">
      <h3>Need On-Site House Wiring or Fault Repair?</h3>
      <p>Connect with Dinesh Singh Raghav directly:</p>
      <a href="tel:7240259078" class="btn btn-call">📞 Call 7240259078</a>
      <a href="https://wa.me/917240259078?text=Hello%20Dinesh%20Singh%20Raghav,%20mujhe%20house%20wiring%20ke%20liye%20quotation%20chahiye." class="btn">💬 WhatsApp Us</a>
    </div>
  </div>
</body>
</html>`;

  // Always add docs
  zip.file('DOCS/HOUSE_WIRING_MANUAL.md', electricalGuideContent);
  zip.file('DOCS/APPLIANCE_LOAD_WORKSHEET.csv', csvContent);
  zip.file('DOCS/OFFLINE_ELECTRICAL_GUIDE.html', offlineHtmlGuide);

  if (type === 'all' || type === 'code') {
    // Project files
    zip.file('package.json', JSON.stringify({
      name: "dinesh-singh-raghav-electrician-website",
      private: true,
      version: "1.0.0",
      type: "module",
      scripts: {
        dev: "vite --port=3000 --host=0.0.0.0",
        build: "vite build",
        preview: "vite preview",
        lint: "tsc --noEmit"
      },
      dependencies: {
        "@tailwindcss/vite": "^4.1.14",
        "@vitejs/plugin-react": "^5.0.4",
        "jszip": "^3.10.1",
        "lucide-react": "^0.546.0",
        "react": "^19.0.1",
        "react-dom": "^19.0.1",
        "vite": "^6.2.3",
        "tailwindcss": "^4.1.14"
      },
      devDependencies: {
        "@types/node": "^22.14.0",
        "typescript": "~5.8.2"
      }
    }, null, 2));

    zip.file('README.md', `# ${BUSINESS_INFO.name} - Web Application & House Wiring System

This is the full production source code for the **${BUSINESS_INFO.name}** website, featuring:
- Interactive Indian House Wiring & Electrical Load Calculator (kW, Amps, MCB & Inverter recommendations)
- 6-Stage Visual House Wiring Process Flow
- Interactive Wiring Diagrams & Schematics (Single Phase DB, 2-Way Switch, Earthing Pit)
- Complete Services & Projects Showcase
- Bilingual (English + Hindi) Safety Guidelines
- Direct WhatsApp & Mobile One-Click Connections to 7240259078

## How to Run Locally:
\`\`\`bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
\`\`\`

## Contact:
- Owner: Dinesh Singh Raghav
- Mobile: 7240259078
- WhatsApp: 7240259078
- Service Area: Panchudala, Telagav, Kotputli-Behror, Paota and nearby areas
`);

    zip.file('vite.config.ts', `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
`);

    zip.file('tsconfig.json', `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`);

    zip.file('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${BUSINESS_INFO.name} - Electrician & House Wiring Services</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-50 text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

    zip.file('src/index.css', `@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
}
`);
  }

  // Generate blob
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const fileName = type === 'docs' 
    ? 'Dinesh-Singh-Raghav-Electrical-Manual.zip'
    : 'Dinesh-Singh-Raghav-Electrical-Project.zip';

  // Trigger download
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
