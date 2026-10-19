export interface BusinessInfo {
  name: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  locality: string;
  areas: string[];
  areasText: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Dinesh Singh Raghav',
  subtitle: 'Professional Electrician & House Wiring Services',
  phone: '7240259078',
  phoneDisplay: '+91 72402 59078',
  whatsapp: '7240259078',
  whatsappMessage: 'Hello Dinesh Singh Raghav, mujhe electrical service ke baare mein information chahiye.',
  address: 'Panchudala, Telagav, Kotputli-Behror, Paota, Rajasthan, India',
  locality: 'Panchudala, Telagav, Kotputli-Behror, Paota, Rajasthan',
  areas: ['Panchudala', 'Telagav', 'Kotputli-Behror', 'Paota', 'Rajasthan'],
  areasText: 'Electrical & House Wiring Services available in Panchudala, Telagav, Kotputli-Behror, Paota and nearby areas.',
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const msg = customMessage || BUSINESS_INFO.whatsappMessage;
  return `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
};

export const getCallUrl = (): string => {
  return `tel:${BUSINESS_INFO.phone}`;
};

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  idealFor: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'house-wiring',
    title: 'Complete House Wiring',
    tagline: 'Concealed PVC Pipe & Open Casing Wiring for New & Existing Homes',
    description: 'Safe and high-grade electrical wiring for newly constructed homes, renovations, or room additions with systematic circuit planning.',
    iconName: 'Home',
    features: [
      'Concealed PVC conduit pipe fitting in ceiling slabs & walls',
      'Heavy-duty copper wire pulling with ISI standard color codes',
      'Separate phase, neutral, and dedicated earth line for all rooms',
      'Dedicated AC, Geyser & heavy appliance circuits to prevent heating'
    ],
    idealFor: 'New Houses, Villas, Kothi, Floor Renovations'
  },
  {
    id: 'db-mcb-installation',
    title: 'DB & MCB / RCCB Installation',
    tagline: 'Distribution Board Dressing, RCCB Shock Protection & Phase Balancing',
    description: 'Neat and professional distribution board wiring with double pole isolator, RCCB (Earth Leakage Protection), and proper MCB ratings.',
    iconName: 'ShieldAlert',
    features: [
      'Double Pole / 4-Pole Isolator & RCCB (30mA) installation',
      'Accurate MCB ratings (6A, 10A, 16A, 20A, 25A, 32A C-Curve)',
      'Neat wire dressing with ferrules and neutral copper busbar',
      'Phase load balancing for smooth operation & no tripping'
    ],
    idealFor: 'Every Residential Home, Commercial Shops & Offices'
  },
  {
    id: 'earthing',
    title: 'Earthing & Grounding Solutions',
    tagline: 'Plate Earthing, GI/Copper Pipe Earthing & Chemical Earthing',
    description: 'Essential electrical grounding to eliminate electrical shocks from appliances (geysers, coolers, refrigerators) and protect sensitive electronics.',
    iconName: 'Zap',
    features: [
      'GI / Copper Plate & Pipe earthing with charcoal & crystal salt',
      'Maintenance-free chemical earthing with bentonite compound',
      'Low earthing resistance test for complete home shock safety',
      'Earthing loop connectivity across all 3-pin power sockets'
    ],
    idealFor: 'Houses, Submersible Pumps, Commercial Setups'
  },
  {
    id: 'inverter-wiring',
    title: 'Inverter & Battery Wiring',
    tagline: 'Dedicated Backup Circuits & Inverter Bypass Switch Setup',
    description: 'Safe dual-circuit wiring separating inverter backup points (fans, lights, TV) from heavy load non-inverter points with quick bypass switches.',
    iconName: 'BatteryCharging',
    features: [
      'Dedicated inverter line separation across modular switchboards',
      'Manual rotary bypass changeover switch for zero blackouts during inverter repair',
      'Safe battery terminal connector fitting with heavy copper lead wires',
      'Single and double battery (12V / 24V) UPS wiring'
    ],
    idealFor: 'Homes, Shops & Workplaces requiring uninterrupted power'
  },
  {
    id: 'fan-light-installation',
    title: 'Fan & Decorative Light Installation',
    tagline: 'Ceiling Fans, Chandeliers, Profile Lights & False Ceiling LED',
    description: 'Precise mounting, balanced hanging, and aesthetic lighting design for residential and commercial spaces.',
    iconName: 'Lightbulb',
    features: [
      'Ceiling fan rod hanging with safety pin & electronic regulator',
      'COB light, Panel light & magnetic track lighting in false ceilings',
      'Concealed LED profile light strip installation in kitchens & living rooms',
      'Heavy decorative chandeliers & exterior waterproof flood lights'
    ],
    idealFor: 'Living Rooms, Bedrooms, Kitchens, Showrooms'
  },
  {
    id: 'switch-socket',
    title: 'Modular Switch & Socket Installation',
    tagline: 'Concealed Metal Box Fitting, Switch Plate Dressing & Sockets',
    description: 'Installation of high-grade modular switches, 6A/16A/25A power sockets, USB charging ports, TV sockets, and fan dimmers.',
    iconName: 'Sliders',
    features: [
      '1 to 18-module metal GI concealed box leveling & fitting',
      'High-current 16A/25A power sockets for Geysers, Microwave & AC',
      'Indicator, footlamp, and bell push button wiring',
      'Loose contact and spark repairs to prevent burnt sockets'
    ],
    idealFor: 'Renovations, Broken Plate Replacement, New Constructions'
  },
  {
    id: 'electrical-repair',
    title: 'Electrical Repair & Fault Finding',
    tagline: 'Short Circuit Diagnosis, Wire Burn Fixes & Voltage Tripping Repair',
    description: 'Fast identification and resolution of electrical faults, sparks, blown fuses, tripping MCBs, and power supply interruptions.',
    iconName: 'Wrench',
    features: [
      'Short circuit & phase-to-earth fault tracing using multi-meter',
      'Damaged wire replacement inside concealed conduits',
      'Burnt main switch, fuse grip, and isolator repair',
      'Emergency fault repair in Panchudala, Telagav & nearby areas'
    ],
    idealFor: 'Urgent home & commercial breakdown situations'
  },
  {
    id: 'residential-electrical',
    title: 'Residential Electrical Work',
    tagline: 'End-to-End Home Electrical Contracting & Maintenance',
    description: 'Comprehensive electrical layout planning, execution, and routine servicing for villas, independent houses, and farmhouses.',
    iconName: 'Building',
    features: [
      'Kitchen chimney, RO water purifier & exhaust fan points',
      'Bathroom geyser & heater wiring with heavy safety cable',
      'Balcony, terrace, and garden perimeter lighting',
      'Automatic water level controller sensor wiring for overhead tanks'
    ],
    idealFor: 'Independent Houses, Farmhouses, Floor Upgrades'
  },
  {
    id: 'shop-office-wiring',
    title: 'Shop & Office Wiring',
    tagline: 'Commercial Single & 3-Phase Power Distribution',
    description: 'Heavy duty electrical wiring for retail shops, offices, clinics, workshops, and commercial complexes in Kotputli-Behror and Paota.',
    iconName: 'Store',
    features: [
      '3-Phase changeover switch and rotary switch installation',
      'Display counter lighting, signage LED board power connection',
      'Computer UPS networking power lines with isolated earthing',
      'Heavy machine & AC stabilizer wiring'
    ],
    idealFor: 'Retail Shops, Offices, Showrooms, Service Centers'
  }
];

export interface WireSizeGuideItem {
  gauge: string;
  rating: string;
  currentCapacity: string;
  recommendedUse: string;
  colorCode: string;
}

export const WIRE_SIZE_GUIDE: WireSizeGuideItem[] = [
  {
    gauge: '0.75 sq mm / 1.0 sq mm',
    rating: 'Light Loads (Up to 1000W)',
    currentCapacity: '6 - 10 Amperes',
    recommendedUse: 'Ceiling fans, LED panel lights, bulb holders, TV antennas, indicator lamps.',
    colorCode: 'Phase: Red/Yellow, Neutral: Black'
  },
  {
    gauge: '1.5 sq mm',
    rating: 'General Sockets (Up to 1500W)',
    currentCapacity: '13 - 16 Amperes',
    recommendedUse: '6 Ampere general room switchboards, Inverter backup line, Cooler sockets.',
    colorCode: 'Inverter: White/Blue, Earth: Green'
  },
  {
    gauge: '2.5 sq mm',
    rating: 'Power Sockets (Up to 3000W)',
    currentCapacity: '20 - 24 Amperes',
    recommendedUse: '16A Power sockets, Microwave, Refrigerator, Iron, Inverter Main input/output, Washing machine.',
    colorCode: 'Phase: Red, Neutral: Black, Earth: Green'
  },
  {
    gauge: '4.0 sq mm',
    rating: 'Heavy Appliances (Up to 5000W)',
    currentCapacity: '28 - 32 Amperes',
    recommendedUse: '1.5 Ton / 2 Ton Split AC, 2000W Water Geysers, Submersible Water Pump starter feed.',
    colorCode: 'Phase: Red, Neutral: Black'
  },
  {
    gauge: '6.0 sq mm',
    rating: 'Main Distribution (Up to 8000W)',
    currentCapacity: '38 - 44 Amperes',
    recommendedUse: 'Main Energy Meter to Main MCB Distribution Board, Sub-panel interconnects.',
    colorCode: 'Phase: Red/Yellow/Blue, Neutral: Black'
  },
  {
    gauge: '10.0 sq mm',
    rating: 'Heavy 3-Phase / Commercial (Up to 14000W)',
    currentCapacity: '55 - 65 Amperes',
    recommendedUse: 'Heavy 3-phase incoming service line, Commercial shops, multi-story buildings.',
    colorCode: 'Phase: R-Y-B, Neutral: Black'
  }
];

export interface SafetyTip {
  title: string;
  titleHi: string;
  desc: string;
  descHi: string;
  tag: string;
}

export const SAFETY_TIPS: SafetyTip[] = [
  {
    title: 'Always Install an RCCB (Earth Leakage Protection)',
    titleHi: 'घर में RCCB जरूर लगाएं',
    desc: 'An RCCB (Residual Current Circuit Breaker) automatically cuts off electricity within 30 milliseconds if someone touches a live wire or if there is current leakage, preventing fatal shocks.',
    descHi: 'RCCB 30 मिलीसेकंड में बिजली बंद कर देता है अगर किसी को करंट लगे या किसी उपकरण में करंट उतर रहा हो।',
    tag: 'Life Safety'
  },
  {
    title: 'Never Skip Proper Earthing (Grounding)',
    titleHi: 'प्रॉपर अर्थिंग कभी न छोड़ें',
    desc: 'Metallic body appliances like water geysers, refrigerators, washing machines, and desert coolers must have a dedicated green earth wire connected to a chemical/plate earthing pit.',
    descHi: 'गीजर, फ्रिज, कूलर और वाशिंग मशीन की बॉडी में करंट से बचने के लिए कॉपर या जीआई अर्थिंग जरूर करवाएं।',
    tag: 'Shock Protection'
  },
  {
    title: 'Use Correct MCB Amperage for Circuits',
    titleHi: 'सही एम्पीयर की MCB का उपयोग करें',
    desc: 'Do not put a 32A MCB for light wiring (needs 6A or 10A). An oversized MCB will not trip when wires overheat inside walls, creating fire hazards.',
    descHi: 'लाइटिंग के लिए 6A/10A और एसी/गीजर के लिए 16A/20A MCB ही लगाएं ताकि तार गर्म होने पर तुरंत ट्रिप हो जाए।',
    tag: 'Fire Prevention'
  },
  {
    title: 'Strict Indian Standard Color Coding',
    titleHi: 'मानक कलर कोडिंग का पालन करें',
    desc: 'Phase = Red / Yellow / Blue, Neutral = Black, Earth = Green, Inverter = White / Blue. Standard colors make future repairs safe and confusion-free.',
    descHi: 'फेज के लिए लाल/पीला/नीला, न्यूट्रल के लिए काला और अर्थिंग के लिए केवल हरा तार ही इस्तेमाल करें।',
    tag: 'Standard Practice'
  }
];

export interface ApplianceItem {
  id: string;
  name: string;
  nameHi: string;
  category: 'lighting' | 'cooling' | 'heavy' | 'general';
  watts: number;
  typicalQty: number;
  inverterCapable: boolean;
  wireRecommended: string;
}

export const DEFAULT_APPLIANCES: ApplianceItem[] = [
  { id: 'led_bulb', name: 'LED Tube / Bulb (9W - 20W)', nameHi: 'LED बल्ब / ट्यूबलाइट', category: 'lighting', watts: 15, typicalQty: 6, inverterCapable: true, wireRecommended: '1.0 sq mm' },
  { id: 'ceiling_fan', name: 'Ceiling Fan (75W / BLDC 30W)', nameHi: 'सीलिंग पंखा', category: 'cooling', watts: 70, typicalQty: 3, inverterCapable: true, wireRecommended: '1.5 sq mm' },
  { id: 'cooler', name: 'Desert Air Cooler (180W - 250W)', nameHi: 'एयर कूलर', category: 'cooling', watts: 200, typicalQty: 1, inverterCapable: true, wireRecommended: '1.5 sq mm' },
  { id: 'refrigerator', name: 'Refrigerator / Fridge (200W - 350W)', nameHi: 'फ्रिज', category: 'general', watts: 250, typicalQty: 1, inverterCapable: true, wireRecommended: '2.5 sq mm' },
  { id: 'tv', name: 'LED TV & Set Top Box (100W)', nameHi: 'LED टीवी व सेटअप बॉक्स', category: 'general', watts: 100, typicalQty: 1, inverterCapable: true, wireRecommended: '1.5 sq mm' },
  { id: 'water_pump', name: 'Submersible / Water Motor (1 HP / 750W)', nameHi: 'पानी की मोटर / सबमर्सिबल (1 HP)', category: 'heavy', watts: 800, typicalQty: 1, inverterCapable: false, wireRecommended: '4.0 sq mm' },
  { id: 'split_ac', name: '1.5 Ton Inverter AC (1500W)', nameHi: '1.5 टन एसी', category: 'heavy', watts: 1500, typicalQty: 0, inverterCapable: false, wireRecommended: '4.0 sq mm' },
  { id: 'geyser', name: 'Water Geyser (2000W)', nameHi: 'पानी का गीजर (2000W)', category: 'heavy', watts: 2000, typicalQty: 0, inverterCapable: false, wireRecommended: '4.0 sq mm' },
  { id: 'washing_machine', name: 'Washing Machine (450W)', nameHi: 'वाशिंग मशीन', category: 'general', watts: 450, typicalQty: 1, inverterCapable: false, wireRecommended: '2.5 sq mm' },
  { id: 'microwave', name: 'Microwave / Induction (1500W)', nameHi: 'माइक्रोवेव / इंडक्शन', category: 'heavy', watts: 1500, typicalQty: 0, inverterCapable: false, wireRecommended: '2.5 sq mm' },
];
