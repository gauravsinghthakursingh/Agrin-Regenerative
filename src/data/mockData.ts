import { LanguageOption, RegionHotspot, ImpactCaseStudy } from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', bricsCountry: 'Global' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', bricsCountry: 'India' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', bricsCountry: 'India' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', bricsCountry: 'India' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', bricsCountry: 'India' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', bricsCountry: 'India' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', bricsCountry: 'Russia' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', bricsCountry: 'Brazil' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', bricsCountry: 'China' },
];

export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    heroTitle: 'AgriN',
    heroSubtitle: 'Regenerative Agricultural Intelligence',
    tagline: 'Turning farmer voices into actionable agricultural intelligence.',
    heroDesc: 'AgriN connects farmer feedback with agricultural, environmental and infrastructure data to help identify regional needs, support regenerative agriculture and improve evidence-based development planning.',
    reportProblem: 'Report a Problem',
    exploreIntelligence: 'Explore Agricultural Intelligence',
    hotspotMap: 'Hotspot Map',
    regenerativeAg: 'Regenerative Agriculture',
    govDashboard: 'Government Dashboard',
    impactTracking: 'Impact Tracking',
    aboutAgriN: 'About AgriN',
    loadDemo: 'Load Demo Scenario',
    demoModeActive: 'Rajasthan Demo Loaded',
    farmerPortalTitle: 'Report an Agricultural Problem',
    aiAnalysis: 'AI Analysis',
    govTitle: 'Agricultural Development Intelligence',
    responsibleAi: 'Responsible AI',
  },
  hi: {
    heroTitle: 'एग्रीएन (AgriN)',
    heroSubtitle: 'पुनर्योजी कृषि आसूचना',
    tagline: 'किसानों की आवाज़ को कार्रवाई योग्य कृषि बुद्धिमत्ता में बदलना।',
    heroDesc: 'एग्रीएन क्षेत्रीय आवश्यकताओं की पहचान करने, पुनर्योजी कृषि का समर्थन करने और साक्ष्य-आधारित विकास योजना को सशक्त बनाने के लिए किसानों की प्रतिक्रिया को पर्यावरण और अवसंरचना डेटा से जोड़ता है।',
    reportProblem: 'समस्या दर्ज करें',
    exploreIntelligence: 'कृषि आसूचना देखें',
    hotspotMap: 'हॉटस्पॉट मानचित्र',
    regenerativeAg: 'पुनर्योजी कृषि',
    govDashboard: 'सरकारी डैशबोर्ड',
    impactTracking: 'प्रभाव ट्रैकिंग',
    aboutAgriN: 'एग्रीएन के बारे में',
    loadDemo: 'डेमो परिदृश्य लोड करें',
    demoModeActive: 'राजस्थान डेमो सक्रिय',
    farmerPortalTitle: 'कृषि समस्या की रिपोर्ट करें',
    aiAnalysis: 'एआई विश्लेषण',
    govTitle: 'कृषि विकास आसूचना प्रणाली',
    responsibleAi: 'जिम्मेदार एआई',
  },
  bn: {
    heroTitle: 'AgriN',
    heroSubtitle: 'পুনর্জন্মশীল কৃষি গোয়েন্দা ব্যবস্থা',
    tagline: 'কৃষকের মতামতকে কার্যকর কৃষি তথ্যে রূপান্তরিত করা।',
    heroDesc: 'AgriN আঞ্চলিক চাহিদা চিহ্নিত করতে এবং টেকসই কৃষির সমর্থনে পরিবেশগত তথ্যের সাথে কৃষকদের প্রতিক্রিয়া সংযুক্ত করে।',
    reportProblem: 'সমস্যা জানান',
    exploreIntelligence: 'কৃষি তথ্য এক্সপ্লোর করুন',
    hotspotMap: 'হটস্পট ম্যাপ',
    regenerativeAg: 'পুনর্জন্মশীল কৃষি',
    govDashboard: 'সরকারি ড্যাশবোর্ড',
    impactTracking: 'প্রভাব ট্র্যাকিং',
    aboutAgriN: 'AgriN সম্পর্কে',
    loadDemo: 'ডেমো লোড করুন',
    demoModeActive: 'রাজস্থান ডেমো সক্রিয়',
    farmerPortalTitle: 'কৃষি সমস্যার রিপোর্ট করুন',
    aiAnalysis: 'এআই বিশ্লেষণ',
    govTitle: 'কৃষি উন্নয়ন পর্যবেক্ষণ',
    responsibleAi: 'দায়িত্বশীল এআই',
  },
  mr: {
    heroTitle: 'AgriN',
    heroSubtitle: 'पुनरुत्पादक शेती बुद्धिमत्ता',
    tagline: 'शेतकऱ्यांच्या आवाजाचे कृतीयोग्य कृषी बुद्धिमत्तेत रूपांतर.',
    heroDesc: 'AgriN प्रादेशिक गरजा ओळखण्यासाठी आणि पुनरुत्पादक शेतीला पाठिंबा देण्यासाठी शेतकऱ्यांचा अभिप्राय कृषी व पायाभूत सुविधांच्या डेटाशी जोडते.',
    reportProblem: 'समस्या नोंदवा',
    exploreIntelligence: 'कृषी बुद्धिमत्ता पहा',
    hotspotMap: 'हॉटस्पॉट नकाशा',
    regenerativeAg: 'पुनरुत्पादक शेती',
    govDashboard: 'सरकारी डॅशबोर्ड',
    impactTracking: 'प्रभाव ट्रॅकिंग',
    aboutAgriN: 'AgriN विषयी',
    loadDemo: 'डेमो सुरू करा',
    demoModeActive: 'राजस्थान डेमो सुरू',
    farmerPortalTitle: 'कृषी समस्येची नोंद करा',
    aiAnalysis: 'एआय विश्लेषण',
    govTitle: 'कृषी विकास बुद्धिमत्ता प्रणाली',
    responsibleAi: 'जबाबदार एआय',
  },
  ta: {
    heroTitle: 'AgriN',
    heroSubtitle: 'மீளுருவாக்க விவசாய நுண்ணறிவு',
    tagline: 'விவசாயிகளின் குரலை பயனுள்ள விவசாய நுண்ணறிவாக மாற்றுதல்.',
    heroDesc: 'விவசாயிகளின் தேவைகளைக் கண்டறிந்து நிலையான வேளாண்மையை ஆதரிக்க AgriN தகவல்களை ஒருங்கிணைக்கிறது.',
    reportProblem: 'பிரச்சினையை தெரிவிக்க',
    exploreIntelligence: 'விவசாய தகவல்களை ஆராய்க',
    hotspotMap: 'ஹாட்ஸ்பாட் வரைபடம்',
    regenerativeAg: 'மீளுருவாக்க வேளாண்மை',
    govDashboard: 'அரசு டாஷ்போர்டு',
    impactTracking: 'தாக்கக் கண்காணிப்பு',
    aboutAgriN: 'AgriN பற்றி',
    loadDemo: 'மாதிரி காட்சியை ஏற்றுக',
    demoModeActive: 'ராஜஸ்தான் மாதிரி செயலில்',
    farmerPortalTitle: 'விவசாயப் பிரச்சினையை பதிவு செய்க',
    aiAnalysis: 'AI பகுப்பாய்வு',
    govTitle: 'விவசாய மேம்பாட்டு நுண்ணறிவு',
    responsibleAi: 'பொறுப்பான AI',
  },
  te: {
    heroTitle: 'AgriN',
    heroSubtitle: 'పునరుత్పాదక వ్యవసాయ మేధస్సు',
    tagline: 'రైతుల గొంతును ఆచరణాత్మక వ్యవసాయ మేధస్సుగా మార్చడం.',
    heroDesc: 'ప్రాంతీయ అవసరాలను గుర్తించి వ్యవసాయ అభివృద్ధిని బలోపేతం చేయడానికి AgriN రైతు అభిప్రాయాలను అనుసంధానిస్తుంది.',
    reportProblem: 'సమస్యను నివేదించండి',
    exploreIntelligence: 'వ్యవసాయ సమాచారం చూడండి',
    hotspotMap: 'హాట్‌స్పాట్ మ్యాప్',
    regenerativeAg: 'పునరుత్పాదక వ్యవసాయం',
    govDashboard: 'ప్రభుత్వ డ్యాష్‌బోర్డ్',
    impactTracking: 'ప్రభావ ట్రాకింగ్',
    aboutAgriN: 'AgriN గురించి',
    loadDemo: 'డెమో లోడ్ చేయండి',
    demoModeActive: 'రాజస్థాన్ డెమో యాక్టివ్',
    farmerPortalTitle: 'వ్యవసాయ సమస్యను నివేదించండి',
    aiAnalysis: 'AI విశ్లేషణ',
    govTitle: 'వ్యవసాయ అభివృద్ధి మేధస్సు',
    responsibleAi: 'బాధ్యతాయుతమైన AI',
  },
  ru: {
    heroTitle: 'AgriN',
    heroSubtitle: 'Регенеративная агрономическая разведка',
    tagline: 'Превращение голоса фермера в действенную сельскохозяйственную аналитику.',
    heroDesc: 'AgriN связывает отзывы фермеров с агроэкологическими данными и инфраструктурой для выявления региональных потребностей стран БРИКС.',
    reportProblem: 'Сообщить о проблеме',
    exploreIntelligence: 'Сельхоз-аналитика',
    hotspotMap: 'Карта очагов',
    regenerativeAg: 'Регенеративное земледелие',
    govDashboard: 'Государственная панель',
    impactTracking: 'Отслеживание эффекта',
    aboutAgriN: 'О проекте AgriN',
    loadDemo: 'Загрузить демо',
    demoModeActive: 'Демо Раджастхана активно',
    farmerPortalTitle: 'Заявить о проблеме',
    aiAnalysis: 'ИИ-анализ',
    govTitle: 'Интеллектуальная панель развития',
    responsibleAi: 'Ответственный ИИ',
  },
  pt: {
    heroTitle: 'AgriN',
    heroSubtitle: 'Inteligência Agrícola Regenerativa',
    tagline: 'Transformando a voz do agricultor em inteligência agrícola acionável.',
    heroDesc: 'O AgriN conecta o feedback dos produtores rurais com dados agronômicos e climáticos para apoiar o planejamento público e a agricultura regenerativa nos países do BRICS.',
    reportProblem: 'Relatar Problema',
    exploreIntelligence: 'Explorar Inteligência',
    hotspotMap: 'Mapa de Calor',
    regenerativeAg: 'Agricultura Regenerativa',
    govDashboard: 'Painel Governamental',
    impactTracking: 'Métricas de Impacto',
    aboutAgriN: 'Sobre o AgriN',
    loadDemo: 'Carregar Cenário Demo',
    demoModeActive: 'Demo Rajastão Ativo',
    farmerPortalTitle: 'Relatar Problema Agrícola',
    aiAnalysis: 'Análise de IA',
    govTitle: 'Painel de Desenvolvimento Agrícola',
    responsibleAi: 'IA Responsável',
  },
  zh: {
    heroTitle: 'AgriN',
    heroSubtitle: '再生农业智能决策平台',
    tagline: '将农户心声转化为切实可行的农业决策智能。',
    heroDesc: 'AgriN 将基层农户反馈与土壤、水文、气候及基础设施数据深度融合，精准识别金砖国家重点农业需求热点，服务循证施策与再生农业。',
    reportProblem: '提交农业诉求',
    exploreIntelligence: '浏览农业智能',
    hotspotMap: '热点态势图',
    regenerativeAg: '再生农业智库',
    govDashboard: '政务决策仪表板',
    impactTracking: '治理成效追踪',
    aboutAgriN: '关于 AgriN',
    loadDemo: '加载演示场景',
    demoModeActive: '已载入拉贾斯坦邦演示',
    farmerPortalTitle: '农户问题反馈门户',
    aiAnalysis: '人工智能剖析',
    govTitle: '农业发展决策智能中心',
    responsibleAi: '负责任人工智能',
  }
};

export const SAMPLE_FARMER_INPUTS = [
  {
    language: 'hi' as const,
    label: 'Hindi - Water & Canal deficit (Rajasthan)',
    text: 'हमारे गांव में पानी की समस्या है और सिंचाई की सुविधा पर्याप्त नहीं है।',
    english: 'In our village there is a severe water problem and irrigation facilities are not adequate.',
    category: 'Water & Irrigation' as const,
    issue: 'Water availability and canal tail-end shortfall',
    location: 'Jaipur, Rajasthan',
    region: 'Rajasthan',
    state: 'Rajasthan',
    potentialImpact: 'Irrigation constraint on Rabi wheat & mustard crop',
    urgency: 'High' as const,
    relatedFactors: [
      'Water availability',
      'Irrigation infrastructure',
      'Soil moisture deficit',
      'Rainfall dependency'
    ],
    confidence: 96.8
  },
  {
    language: 'mr' as const,
    label: 'Marathi - Soil degradation & chemical cost (Maharashtra)',
    text: 'मातीचा पोत खराब होत चालला आहे, रासायनिक खतांचा खर्च परवडत नाही आणि उत्पादन घटत आहे.',
    english: 'Soil texture is degrading, chemical fertilizer expenses are unaffordable, and crop yield is plummeting.',
    category: 'Soil Health & Fertility' as const,
    issue: 'Soil organic carbon depletion & micronutrient deficit',
    location: 'Amravati, Vidarbha',
    region: 'Maharashtra',
    state: 'Maharashtra',
    potentialImpact: 'Stunted soybean & cotton germination, high input debt',
    urgency: 'High' as const,
    relatedFactors: [
      'Soil organic matter',
      'Chemical fertilizer overuse',
      'Moisture retention loss',
      'Topsoil erosion'
    ],
    confidence: 94.2
  },
  {
    language: 'ta' as const,
    label: 'Tamil - Groundwater depletion (Tamil Nadu)',
    text: 'மழை பொய்த்துவிட்டதால் ஆழ்துளை கிணறுகளில் நிலத்தடி நீர்மட்டம் மிகவும் குறைந்துவிட்டது.',
    english: 'Due to failed monsoon rains, groundwater table in deep borewells has dropped drastically.',
    category: 'Water & Irrigation' as const,
    issue: 'Critical aquifer depletion and borewell failure',
    location: 'Thanjavur, Tamil Nadu',
    region: 'Tamil Nadu',
    state: 'Tamil Nadu',
    potentialImpact: 'Paddy crop drying up before panicle stage',
    urgency: 'Critical' as const,
    relatedFactors: [
      'Groundwater depth',
      'Aquifer recharge rates',
      'Monsoon deficit',
      'Borewell electrical grid'
    ],
    confidence: 95.5
  },
  {
    language: 'en' as const,
    label: 'English - Road infrastructure & perishable loss (Punjab)',
    text: 'Rural access road is completely washed out, our tractor trailers cannot reach the APMC mandi without spoiling the vegetables.',
    english: 'Rural access road is completely washed out, our tractor trailers cannot reach the APMC mandi without spoiling the vegetables.',
    category: 'Infrastructure & Roads' as const,
    issue: 'All-weather connectivity collapse to agricultural market',
    location: 'Bathinda, Punjab',
    region: 'Punjab',
    state: 'Punjab',
    potentialImpact: 'Post-harvest spoilage and localized market price crash',
    urgency: 'Medium' as const,
    relatedFactors: [
      'Rural road connectivity',
      'APMC market distance',
      'Cold transport availability',
      'Seasonal flooding'
    ],
    confidence: 97.1
  }
];

export const REGIONAL_HOTSPOTS: RegionHotspot[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    state: 'Rajasthan',
    coordinates: { x: 26, y: 35 },
    farmerRequests: 4280,
    waterRelatedRequests: 1620,
    soilRelatedRequests: 890,
    infrastructureRequests: 740,
    marketRequests: 610,
    waterStress: 'High',
    soilHealthConcern: 'Moderate',
    rainfallDependency: 'High',
    reviewStatus: 'Review',
    mainObservedConcerns: [
      'Water availability',
      'Irrigation access',
      'Soil moisture',
      'Rainfall dependency'
    ],
    whyHighlighted:
      'AgriN identified a concentration of similar farmer requests in this region. Additional agricultural and environmental indicators are displayed to help officials review the situation.',
    sampleQuotes: [
      '"हमारे गांव में पानी की समस्या है और सिंचाई की सुविधा पर्याप्त नहीं है।" — Farmer, Jaipur',
      '"भूजल स्तर 450 फीट नीचे चला गया है, सौर पंप का सहयोग आवश्यक है।" — Farmer, Jodhpur'
    ],
    regenerativeFocus: [
      'Water conservation & farm ponds',
      'Soil moisture management (mulching)',
      'Crop diversification towards pearl millet & pulses',
      'Agroforestry (Khejri tree shelterbelts)',
      'Reduced soil disturbance & zero-tillage'
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    state: 'Maharashtra',
    coordinates: { x: 38, y: 55 },
    farmerRequests: 3640,
    waterRelatedRequests: 980,
    soilRelatedRequests: 1420,
    infrastructureRequests: 620,
    marketRequests: 620,
    waterStress: 'Moderate',
    soilHealthConcern: 'High',
    rainfallDependency: 'Moderate',
    reviewStatus: 'Review',
    mainObservedConcerns: [
      'Soil organic carbon deficit',
      'Excess chemical fertilizer cost',
      'Erratic dry-spells during Kharif',
      'Credit & input pricing access'
    ],
    whyHighlighted:
      'High density of soil health degradation reports clustered in Marathwada and Vidarbha, correlated with rising input expenditures.',
    sampleQuotes: [
      '"मातीचा पोत खराब होत आहे, सेंद्रिय खतांचे मार्गदर्शन हवे आहे." — Farmer, Yavatmal',
      '"कापूस पिकावर बोंडअळीचा प्रादुर्भाव वाढला आहे." — Farmer, Nanded'
    ],
    regenerativeFocus: [
      'Bio-char and compost enrichment for black cotton soil',
      'Intercropping pigeonpea with cotton',
      'Contour bunding for runoff retention',
      'Subsurface drip systems to protect water efficiency'
    ]
  },
  {
    id: 'punjab',
    name: 'Punjab',
    state: 'Punjab',
    coordinates: { x: 30, y: 22 },
    farmerRequests: 2950,
    waterRelatedRequests: 1340,
    soilRelatedRequests: 610,
    infrastructureRequests: 580,
    marketRequests: 420,
    waterStress: 'Moderate',
    soilHealthConcern: 'Moderate',
    rainfallDependency: 'Low',
    reviewStatus: 'Monitoring',
    mainObservedConcerns: [
      'Over-exploited groundwater aquifers',
      'Mono-cropping cycle exhaustion (Paddy-Wheat)',
      'Crop residue management options',
      'High electricity peak loads'
    ],
    whyHighlighted:
      'Tubewell density exceeding sustainable recharge envelope; farmers reporting declining water tables despite high canal presence.',
    sampleQuotes: [
      '"Water table is sinking 60-80cm every season, need direct seeded rice support." — Farmer, Ludhiana',
      '"Need subsidized seed drills for happy seeder wheat planting." — Farmer, Sangrur'
    ],
    regenerativeFocus: [
      'Direct Seeded Rice (DSR) transition',
      'In-situ crop residue incorporation',
      'Diversification into maize, oilseeds, and basmati',
      'Precision laser land leveling'
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    state: 'Karnataka',
    coordinates: { x: 36, y: 72 },
    farmerRequests: 2710,
    waterRelatedRequests: 1120,
    soilRelatedRequests: 530,
    infrastructureRequests: 590,
    marketRequests: 470,
    waterStress: 'Moderate',
    soilHealthConcern: 'Moderate',
    rainfallDependency: 'High',
    reviewStatus: 'Review',
    mainObservedConcerns: [
      'Canal tail-end delivery deficits',
      'Storage & warehousing access in arid north',
      'Soil salinity in command areas',
      'Drought vulnerability in dry belts'
    ],
    whyHighlighted:
      'Clustered grievances regarding delayed canal schedules in North Karnataka, overlapping with rain-shadow meteorological zones.',
    sampleQuotes: [
      '"Canal water reached only head reaches, tail-end villages dry for 40 days." — Farmer, Raichur',
      '"Drip subsidy disbursement pending for 14 months." — Farmer, Bagalkote'
    ],
    regenerativeFocus: [
      'Micro-watershed rainwater harvesting checkdams',
      'Millet-based cropping systems (Ragi & Jowar)',
      'Desiltation of community irrigation tanks (Eris)',
      'Legume intercropping in sugarcane'
    ]
  },
  {
    id: 'uttar_pradesh',
    name: 'Uttar Pradesh',
    state: 'Uttar Pradesh',
    coordinates: { x: 48, y: 35 },
    farmerRequests: 3420,
    waterRelatedRequests: 1040,
    soilRelatedRequests: 780,
    infrastructureRequests: 920,
    marketRequests: 680,
    waterStress: 'High',
    soilHealthConcern: 'Moderate',
    rainfallDependency: 'Moderate',
    reviewStatus: 'Review',
    mainObservedConcerns: [
      'Bundelkhand rocky drought terrain',
      'Rural feeder road potholes',
      'Cold storage capacity shortages for potato',
      'Stray cattle grazing damage'
    ],
    whyHighlighted:
      'High convergence of cold storage deficits and rural transportation delays in southern UP agro-climatic sub-zones.',
    sampleQuotes: [
      '"Cold storage capacity full, farmers forced to distress-sell at 4 Rs/kg." — Farmer, Agra',
      '"Check-dams in Bundelkhand need silt clearing before monsoon." — Farmer, Jhansi'
    ],
    regenerativeFocus: [
      'Bundelkhand traditional Haveli cultivation & bunds',
      'Agroforestry with citrus and drumstick (Moringa)',
      'Community seed banks for drought-tolerant pulse varieties',
      'Solar-powered micro-irrigation cooperatives'
    ]
  },
  {
    id: 'tamil_nadu',
    name: 'Tamil Nadu',
    state: 'Tamil Nadu',
    coordinates: { x: 42, y: 84 },
    farmerRequests: 2340,
    waterRelatedRequests: 880,
    soilRelatedRequests: 420,
    infrastructureRequests: 460,
    marketRequests: 580,
    waterStress: 'Moderate',
    soilHealthConcern: 'Low',
    rainfallDependency: 'Moderate',
    reviewStatus: 'Approved',
    mainObservedConcerns: [
      'Cauvery delta tail-end salinity',
      'Coastal groundwater intrusion',
      'Coconut root wilt management',
      'Direct procurement center wait times'
    ],
    whyHighlighted:
      'Sanctioned modernization of tail-end regulators underway; ongoing real-time telemetry monitoring.',
    sampleQuotes: [
      '"Seawater intrusion affecting borewells within 8km of the coast." — Farmer, Nagapattinam',
      '"DPC paddy procurement token queue requires digital kiosk." — Farmer, Thiruvarur'
    ],
    regenerativeFocus: [
      'System of Rice Intensification (SRI) water-saving',
      'Multi-tier agroforestry with coconut, pepper, and cocoa',
      'Green manuring with Sesbania (Daincha)',
      'Desalination barrier vegetation zones'
    ]
  },
  {
    id: 'madhya_pradesh',
    name: 'Madhya Pradesh',
    state: 'Madhya Pradesh',
    coordinates: { x: 42, y: 46 },
    farmerRequests: 2180,
    waterRelatedRequests: 620,
    soilRelatedRequests: 590,
    infrastructureRequests: 490,
    marketRequests: 480,
    waterStress: 'Moderate',
    soilHealthConcern: 'Moderate',
    rainfallDependency: 'Moderate',
    reviewStatus: 'Monitoring',
    mainObservedConcerns: [
      'Soil compaction from heavy combines',
      'Wheat rust disease early warning',
      'Market yard logistics & electronic weighbridges',
      'Pulse certification delays'
    ],
    whyHighlighted:
      'Rapid organic expansion in tribal belts seeking regenerative bio-input validation.',
    sampleQuotes: [
      '"Organic certification processing takes over 2 years, need decentralized labs." — Farmer, Hoshangabad',
      '"Soil hardpan preventing monsoon water percolation." — Farmer, Sehore'
    ],
    regenerativeFocus: [
      'Zero-budget natural farming bio-inputs (Jeevamrutha)',
      'Broad bed furrow (BBF) soil layout',
      'Crop residue mulching without burning',
      'Micro-check dams in Narmada catchment tributaries'
    ]
  }
];

export const COMMON_AGRICULTURAL_NEEDS = [
  {
    rank: 1,
    name: 'Water and Irrigation',
    requestCount: 7420,
    percentage: 30.2,
    trend: '+14% MoM',
    priority: 'Critical',
    description: 'Groundwater table drawdown, delayed canal rotational schedules, and lack of pressurized micro-drip infrastructure.',
    levers: ['Check-dam silt removal', 'Solar micro-irrigation subsidies', 'Canal tail-end flow telemetry']
  },
  {
    rank: 2,
    name: 'Soil Health & Fertility',
    requestCount: 4860,
    percentage: 19.8,
    trend: '+8% MoM',
    priority: 'High',
    description: 'Soil organic carbon below 0.4%, secondary micronutrient deficiencies (zinc, boron), and severe soil compaction.',
    levers: ['Decentralized soil testing', 'Subsidized green manure seeds', 'Compost & biochar incentives']
  },
  {
    rank: 3,
    name: 'Agricultural Infrastructure',
    requestCount: 3910,
    percentage: 15.9,
    trend: '+5% MoM',
    priority: 'High',
    description: 'Farm-to-market all-weather roads, village three-phase electrical feeders, and culverts damaged during monsoon.',
    levers: ['PMGSY rural road prioritization', 'Solar feeder separation', 'Culvert rehabilitation']
  },
  {
    rank: 4,
    name: 'Market Access & Pricing',
    requestCount: 3320,
    percentage: 13.5,
    trend: '-2% MoM',
    priority: 'Moderate',
    description: 'High commission intermediary margins, lack of transparent electronic weighbridges, and price crashes at harvest.',
    levers: ['e-NAM digital terminal expansion', 'Farmer Producer Org (FPO) aggregation', 'Transparent price ticker']
  },
  {
    rank: 5,
    name: 'Storage & Cold Chain',
    requestCount: 2750,
    percentage: 11.2,
    trend: '+12% MoM',
    priority: 'Moderate',
    description: 'Severe deficit of village-level pre-cooling chambers, hermetic grain storage bags, and cold van logistics for horticulture.',
    levers: ['Solar cold room grants', 'Warehouse receipt financing', 'Village hermetic silo clusters']
  },
  {
    rank: 6,
    name: 'Crop Productivity & Disease',
    requestCount: 2320,
    percentage: 9.4,
    trend: '+3% MoM',
    priority: 'Moderate',
    description: 'Emergence of pest resistance, climate-induced thermal stress during grain filling, and spurious pesticide batches.',
    levers: ['Digital pest surveillance traps', 'Heat-tolerant seed distribution', 'Decentralized quality testing']
  }
];

export const MONTHLY_REQUEST_TREND = [
  { month: 'Oct', total: 1680, water: 420, soil: 310, infra: 260 },
  { month: 'Nov', total: 1820, water: 490, soil: 340, infra: 280 },
  { month: 'Dec', total: 1950, water: 540, soil: 390, infra: 310 },
  { month: 'Jan', total: 2120, water: 620, soil: 410, infra: 330 },
  { month: 'Feb', total: 2280, water: 710, soil: 440, infra: 350 },
  { month: 'Mar', total: 2490, water: 820, soil: 490, infra: 380 },
  { month: 'Apr', total: 2740, water: 950, soil: 510, infra: 410 },
  { month: 'May', total: 2980, water: 1120, soil: 550, infra: 430 },
  { month: 'Jun', total: 2350, water: 780, soil: 480, infra: 390 },
  { month: 'Jul', total: 2010, water: 590, soil: 430, infra: 360 },
  { month: 'Aug', total: 1980, water: 480, soil: 440, infra: 380 },
  { month: 'Sep', total: 2170, water: 610, soil: 470, infra: 390 },
];

export const IMPACT_CASE_STUDIES: ImpactCaseStudy[] = [
  {
    id: 'rajasthan_water',
    title: 'Jaipur & Thar Basin Micro-Irrigation & Check-Dam Program',
    region: 'Rajasthan',
    interventionType: 'Community check-dam desiltation + solar drip irrigation clusters across 48 panchayats',
    timeline: '18 Months Post-Sanction (Q1 2025 - Q3 2026)',
    budgetAllocated: '$4.2M (Public Development Fund + Multilateral Climate Grant)',
    before: {
      waterRequests: 1620,
      waterStress: 'High (78.4 index)',
      infrastructureGap: 'High (42km unlined canal deficit)',
      soilOrganicCarbon: '0.28% (Deficient)',
      cropYieldIndex: 68
    },
    after: {
      waterRequests: 980,
      waterStress: 'Moderate (47.1 index)',
      infrastructureGap: 'Reduced (8.5km remaining gap)',
      soilOrganicCarbon: '0.42% (Improving)',
      cropYieldIndex: 89
    },
    keyOutcomes: [
      '39.5% reduction in recurring farmer water distress complaints within 12 months',
      'Average shallow aquifer recharge rate improved by 1.8 meters across 32 monitoring wells',
      '1,840 hectares transitioned from flood irrigation to solar-powered micro-drip networks',
      'Crop yield index improved from 68 to 89 (+30.8% increase in farmer harvest returns)'
    ]
  },
  {
    id: 'maharashtra_soil',
    title: 'Vidarbha Regenerative Soil Health & Biochar Transition',
    region: 'Maharashtra',
    interventionType: 'Decentralized farm biochar kilns + microbial consortium seed coating incentives',
    timeline: '14 Months Post-Intervention',
    budgetAllocated: '$2.8M (State Soil Mission)',
    before: {
      waterRequests: 980,
      waterStress: 'Moderate',
      infrastructureGap: 'Moderate',
      soilOrganicCarbon: '0.31%',
      cropYieldIndex: 72
    },
    after: {
      waterRequests: 690,
      waterStress: 'Low-Moderate',
      infrastructureGap: 'Low',
      soilOrganicCarbon: '0.54%',
      cropYieldIndex: 94
    },
    keyOutcomes: [
      'Soil-related grievances dropped by 44% in targeted talukas',
      'Average farmer expenditure on synthetic diammonium phosphate (DAP) lowered by 31%',
      'Soil water retention capacity during mid-season 21-day dry spell increased by 28%'
    ]
  }
];

export const TECHNICAL_ARCHITECTURE_STEPS = [
  {
    step: 1,
    title: 'Farmer Voice & Multi-Modal Input',
    tech: 'Speech / Audio / SMS / WhatsApp / IVR',
    description: 'Farmers submit distress reports via simple spoken audio in 12+ native dialects or simple SMS text without needing complex digital literacy.'
  },
  {
    step: 2,
    title: 'Multilingual AI & Speech-to-Text',
    tech: 'Multilingual ASR + NLP + Domain Taxonomy',
    description: 'Simultaneous acoustic noise filtering, phonetic transcription, and semantic translation across BRICS & Indic languages into structured JSON.'
  },
  {
    step: 3,
    title: 'Agricultural Data Fusion Layer',
    tech: 'Geospatial GIS + Remote Sensing + Soil API',
    description: 'Farmer reports are cross-correlated with satellite soil moisture (SMAP/Sentinel-2), meteorological rainfall deficits, and aquifer telemetry.'
  },
  {
    step: 4,
    title: 'Hotspot Detection & Geo-Clustering',
    tech: 'DBSCAN + Spatial Anomaly Aggregation',
    description: 'Identifies statistically anomalous spatial clusters of unmet agricultural needs to separate localized noise from systemic district failures.'
  },
  {
    step: 5,
    title: 'AI-Assisted Policy & Regenerative Insights',
    tech: 'Explainable LLM Intelligence + Rules Engine',
    description: 'Generates evidence-backed policy briefs outlining specific regenerative agriculture interventions (e.g. check-dams, agroforestry, bio-inputs).'
  },
  {
    step: 6,
    title: 'Government Dashboard & Decision Support',
    tech: 'Role-Based Executive Review Console',
    description: 'Public officials inspect real-time regional evidence, approve capital outlays, and dispatch ground verification teams with full audit trails.'
  },
  {
    step: 7,
    title: 'Impact Tracking & Loop Closure',
    tech: 'Post-Intervention Feedback Telemetry',
    description: 'Continuous monitoring of grievance reduction, satellite vegetation greening (NDVI), and farmer yield recovery to ensure accountable public ROI.'
  }
];
