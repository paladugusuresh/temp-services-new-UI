// content/regional-insights.ts
// In-depth regional insights that add unique value to state pages

export type RegionalInsight = {
  stateSlug: string;
  economicFactors: string[];
  climateConcerns: string[];
  regulatoryNotes: string[];
  marketTrends: string[];
  bestTimeToHire: { service: string; timing: string; reason: string }[];
  localConsiderations: string[];
  commonIssues: string[];
};

export const REGIONAL_INSIGHTS: RegionalInsight[] = [
  {
    stateSlug: "ca",
    economicFactors: [
      "California's cost of living is 50% higher than the national average, directly impacting labor costs",
      "Tech industry wages in the Bay Area and Southern California drive up contractor rates",
      "Strict contractor licensing requirements ensure quality but add to overhead costs",
      "High workers' compensation insurance rates in California add 15-20% to labor costs"
    ],
    climateConcerns: [
      "Year-round HVAC usage: AC in summer, heating in mountain areas during winter",
      "Wildfire risk necessitates brush clearing and fire-resistant landscaping",
      "Drought conditions require water-efficient landscaping and irrigation",
      "Coastal salt air accelerates corrosion on exterior elements"
    ],
    regulatoryNotes: [
      "Title 24 energy standards require enhanced insulation and HVAC efficiency",
      "CSLB licensing required for contractors doing work over $500",
      "Solar installation requirements for new home construction since 2020",
      "Water efficiency regulations impact landscaping and irrigation choices"
    ],
    marketTrends: [
      "High demand for solar installation and EV charger work",
      "Drought-tolerant landscaping increasingly popular",
      "Smart home integration services growing rapidly",
      "ADU (Accessory Dwelling Unit) construction driving construction demand"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Late winter (February-March)", reason: "Before the summer rush; better pricing and availability" },
      { service: "Landscaping", timing: "Fall (October-November)", reason: "Planting season before winter rains; contractors less busy" },
      { service: "Roofing", timing: "Late spring", reason: "Dry weather and before extreme summer heat" },
      { service: "Painting", timing: "Spring or fall", reason: "Moderate temperatures ideal for paint curing" }
    ],
    localConsiderations: [
      "Traffic and parking can add significant time to contractor appointments in urban areas",
      "Many older homes have knob-and-tube wiring requiring specialized electricians",
      "Hillside properties may require additional engineering for structural work",
      "Earthquake retrofitting is common and recommended for older homes"
    ],
    commonIssues: [
      "Foundation issues due to expansive clay soils",
      "HVAC systems overworked in extreme heat spells",
      "Water heater efficiency concerns due to hard water in many areas",
      "Termite and pest issues year-round due to mild climate"
    ]
  },
  {
    stateSlug: "tx",
    economicFactors: [
      "No state income tax creates a favorable business environment with competitive pricing",
      "Rapid population growth increasing demand for all home services",
      "Lower cost of living than coastal states keeps labor rates moderate",
      "Large geographic distances can result in significant travel fees in rural areas"
    ],
    climateConcerns: [
      "Extreme summer heat (100°F+) makes HVAC essential and heavily used",
      "Severe thunderstorms and hail cause frequent roofing and siding claims",
      "Flash flooding in many areas requires proper drainage and grading",
      "Humidity in coastal areas promotes mold growth and pest activity"
    ],
    regulatoryNotes: [
      "HVAC contractors must be licensed; other trades vary by city",
      "Many cities require permits for HVAC replacement and roofing",
      "Texas has its own electrical code that differs from the national standard",
      "Water well regulations apply in rural areas"
    ],
    marketTrends: [
      "New construction boom driving contractor demand",
      "Storm damage restoration is a major industry sector",
      "Solar adoption increasing despite energy company pushback",
      "Pool construction and maintenance thriving due to climate"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring (March-April)", reason: "Before the brutal summer; systems can be tuned up" },
      { service: "Roofing", timing: "Fall or early spring", reason: "Avoid extreme summer heat; best working conditions" },
      { service: "Landscaping", timing: "Fall (September-October)", reason: "Cooler temps; plants establish before winter" },
      { service: "Exterior Painting", timing: "Spring or fall", reason: "Summer heat causes paint to dry too fast" }
    ],
    localConsiderations: [
      "Foundation movement due to expansive clay soils is common—affects many homes",
      "Whole-house generators popular due to grid instability",
      "Many neighborhoods have HOAs with strict exterior modification rules",
      "Pool services are year-round in southern Texas"
    ],
    commonIssues: [
      "AC failures during summer heat waves (emergency rates apply)",
      "Foundation cracks and settling due to soil conditions",
      "Hail damage to roofs and siding after spring storms",
      "Fire ant infestations requiring regular pest control"
    ]
  },
  {
    stateSlug: "fl",
    economicFactors: [
      "Tourism economy creates seasonal workforce fluctuations",
      "High insurance costs add to contractor overhead",
      "No state income tax but high property insurance rates",
      "Retiree population creates steady demand for home services"
    ],
    climateConcerns: [
      "Hurricane season (June-November) drives roofing and emergency services",
      "Year-round humidity promotes mold, mildew, and pest issues",
      "Salt air on the coast accelerates exterior deterioration",
      "Intense sun and UV damage paint, roofing, and landscaping"
    ],
    regulatoryNotes: [
      "Very strict building codes, especially post-Hurricane Andrew",
      "Roofing and HVAC contractors must be state-licensed",
      "Impact-resistant windows often required in coastal counties",
      "Pool barrier and safety regulations are strictly enforced"
    ],
    marketTrends: [
      "Impact windows and doors are a major upgrade category",
      "Hurricane-resistant roofing materials in high demand",
      "Whole-house generators increasingly popular",
      "Water damage restoration is a significant industry"
    ],
    bestTimeToHire: [
      { service: "Roofing", timing: "Winter (December-February)", reason: "Dry season; contractors available before storm season" },
      { service: "HVAC", timing: "Late fall or early spring", reason: "Off-peak for AC; good for maintenance" },
      { service: "Landscaping", timing: "Early spring", reason: "Before summer rains and heat; good planting conditions" },
      { service: "Exterior Painting", timing: "Winter", reason: "Lower humidity; better paint adhesion" }
    ],
    localConsiderations: [
      "Hurricane preparation services are essential—have a contractor relationship before storm season",
      "Screen enclosures (lanais) are common and require specialized repair",
      "Pool maintenance is year-round and essential",
      "Pest control is especially important due to climate"
    ],
    commonIssues: [
      "Mold growth in humid conditions, especially after storms",
      "AC systems run nearly year-round; maintenance is critical",
      "Roof aging accelerated by UV exposure and salt air",
      "Wood rot and termite damage from humidity"
    ]
  },
  {
    stateSlug: "ny",
    economicFactors: [
      "Significant cost difference between NYC/Long Island and Upstate regions",
      "Union labor prevalent in NYC adds to costs but ensures training standards",
      "High licensing and insurance requirements increase contractor overhead",
      "Limited parking and access in cities adds to service call complexity"
    ],
    climateConcerns: [
      "Cold winters require robust heating systems and winterization",
      "Snow and ice create ongoing winter maintenance needs",
      "Hot, humid summers strain AC systems",
      "Freeze-thaw cycles cause foundation and concrete damage"
    ],
    regulatoryNotes: [
      "NYC has its own building department and electrical code",
      "Most trades require city or state licensing",
      "Landmark and historic district rules restrict exterior work",
      "Co-op and condo boards may require approval for renovations"
    ],
    marketTrends: [
      "Brownstone renovation and restoration is a specialty market",
      "Energy efficiency upgrades incentivized by state programs",
      "Smart home technology increasingly integrated in renovations",
      "Heat pump adoption growing due to electrification initiatives"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or early fall", reason: "Between heating and cooling seasons" },
      { service: "Roofing", timing: "Late summer to early fall", reason: "Before winter weather sets in" },
      { service: "Exterior Painting", timing: "Late spring to early fall", reason: "Temperature requirements for exterior paint" },
      { service: "Landscaping", timing: "Spring (April-May)", reason: "After frost; planting season" }
    ],
    localConsiderations: [
      "In NYC, elevator reservations and building super approval often needed for deliveries",
      "Street parking permits may be required for contractor vehicles",
      "Many older buildings have specific electrical and plumbing challenges",
      "Asbestos and lead paint common in pre-war buildings"
    ],
    commonIssues: [
      "Heating system failures during cold snaps (emergency rates)",
      "Ice dams on roofs causing interior water damage",
      "Old radiator and boiler systems requiring specialized service",
      "Plumbing issues in aging infrastructure"
    ]
  },
  {
    stateSlug: "wa",
    economicFactors: [
      "Tech industry wages in Seattle area drive up all labor costs",
      "Strong economy keeps contractor demand and rates high",
      "High minimum wage impacts service industry pricing",
      "Eastern Washington is significantly more affordable than Puget Sound"
    ],
    climateConcerns: [
      "Heavy rainfall and moisture management are critical concerns",
      "Moss and algae growth on roofs and decks common",
      "Mild but damp winters require attention to heating and ventilation",
      "Fire risk in eastern Washington during dry summers"
    ],
    regulatoryNotes: [
      "General contractor licensing required at state level",
      "Strict environmental regulations on construction and disposal",
      "Energy code requirements among strictest in the nation",
      "Seismic building requirements due to earthquake risk"
    ],
    marketTrends: [
      "Rain management and gutter systems in high demand",
      "Energy-efficient heating systems popular due to green mindset",
      "Deck and outdoor living construction thriving despite weather",
      "Electric vehicle charging installation growing rapidly"
    ],
    bestTimeToHire: [
      { service: "Roofing", timing: "Late summer (August-September)", reason: "Driest months; best working conditions" },
      { service: "Exterior Painting", timing: "July-September", reason: "Dry weather needed for paint application" },
      { service: "Landscaping", timing: "Spring or early fall", reason: "Moderate temps; good planting conditions" },
      { service: "Gutter Cleaning", timing: "Late fall", reason: "After most leaves have fallen; before winter rains" }
    ],
    localConsiderations: [
      "Moss and mildew treatment is an ongoing maintenance need",
      "Many homes have older heating systems (oil, propane) that need conversion",
      "Crawl space moisture management is essential",
      "Urban traffic can significantly impact contractor arrival windows"
    ],
    commonIssues: [
      "Roof moss and algae requiring regular treatment",
      "Moisture in crawl spaces and basements",
      "Gutter systems overwhelmed by heavy rains",
      "Heating systems working overtime in damp cold"
    ]
  },
  {
    stateSlug: "co",
    economicFactors: [
      "Front Range growth driving high demand and contractor backlogs",
      "Mountain communities face extreme premium pricing due to access challenges",
      "Lower labor costs than coastal states but rising with population growth",
      "Construction boom straining contractor availability"
    ],
    climateConcerns: [
      "Large daily temperature swings stress building materials",
      "Heavy snow loads in mountains require robust roofing and structural design",
      "Intense UV at altitude accelerates exterior deterioration",
      "Dry climate reduces some moisture issues but increases fire risk"
    ],
    regulatoryNotes: [
      "Licensing requirements vary significantly by municipality",
      "Many mountain communities have strict design guidelines",
      "Fire mitigation requirements in wildland-urban interface areas",
      "Energy code requirements apply to new construction and major renovations"
    ],
    marketTrends: [
      "High-efficiency heating systems popular due to cold winters",
      "Fire-resistant landscaping increasingly required",
      "Solar installation booming due to sunny climate",
      "Outdoor living spaces popular despite altitude weather"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Between peak heating and cooling seasons" },
      { service: "Roofing", timing: "Late spring to early fall", reason: "After snow melt; before winter weather" },
      { service: "Landscaping", timing: "Late spring", reason: "After last frost; summer establishment before fall" },
      { service: "Exterior Painting", timing: "Summer", reason: "Dry weather and moderate temperatures" }
    ],
    localConsiderations: [
      "Altitude affects HVAC efficiency and combustion appliance tuning",
      "Mountain properties may have limited contractor access",
      "Fire mitigation and defensible space are ongoing requirements",
      "Snow removal contracts should be secured before winter"
    ],
    commonIssues: [
      "Ice dam formation on roofs",
      "HVAC systems stressed by temperature extremes",
      "Foundation shifting due to expansive soils",
      "UV damage to roofing and exterior finishes"
    ]
  },
  {
    stateSlug: "az",
    economicFactors: [
      "Lower cost of living than California keeps service rates competitive",
      "Rapid population growth creating contractor demand and backlogs",
      "Snowbird seasonal residents create peak/off-peak pricing patterns",
      "Labor availability can be challenging during peak construction seasons"
    ],
    climateConcerns: [
      "Extreme summer heat (115°F+) makes AC essential for survival",
      "Monsoon season brings flash flooding and storm damage",
      "Low humidity preserves some materials but stresses others",
      "Dust storms can damage HVAC systems and exterior surfaces"
    ],
    regulatoryNotes: [
      "ROC (Registrar of Contractors) licensing required for most work",
      "Pool safety regulations strictly enforced",
      "Many HOAs have significant control over exterior modifications",
      "Water conservation requirements impact landscaping choices"
    ],
    marketTrends: [
      "HVAC and refrigeration services are always in high demand",
      "Pool services are a major industry sector",
      "Desert landscaping (xeriscaping) increasingly mandated",
      "Solar installation very popular due to abundant sunshine"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Late winter to early spring", reason: "Before extreme summer heat; best availability" },
      { service: "Roofing", timing: "Fall to early spring", reason: "Avoid summer heat that's dangerous for workers" },
      { service: "Landscaping", timing: "Fall (October-November)", reason: "Cooler temps; planting before mild winter" },
      { service: "Exterior Painting", timing: "Winter or early spring", reason: "Summer heat causes paint failure" }
    ],
    localConsiderations: [
      "AC systems run 6+ months per year; maintenance is critical",
      "Pool ownership is common; ongoing service is essential",
      "Desert landscaping requires less water but still needs maintenance",
      "Termite and scorpion issues require regular pest control"
    ],
    commonIssues: [
      "AC failures during summer (life-threatening emergency)",
      "Roof damage from monsoon storms",
      "Pool equipment stressed by summer heat",
      "Dust accumulation in HVAC systems"
    ]
  },
  {
    stateSlug: "ga",
    economicFactors: [
      "Atlanta metro drives higher pricing than rural areas",
      "Rapid growth in suburbs creating contractor demand",
      "Lower cost of living than many states keeps rates moderate",
      "Good availability of contractors in metro areas"
    ],
    climateConcerns: [
      "Hot, humid summers require robust HVAC systems",
      "Severe thunderstorms and occasional tornadoes cause damage",
      "Humidity promotes mold, mildew, and pest activity",
      "Mild winters still require heating capacity"
    ],
    regulatoryNotes: [
      "State licensing required for most contractor categories",
      "Local building codes vary by municipality",
      "HOAs common in suburban developments with strict rules",
      "Septic system regulations in areas without municipal sewer"
    ],
    marketTrends: [
      "HVAC efficiency upgrades popular due to high summer bills",
      "Screen porches and outdoor living spaces in demand",
      "Termite and pest control is an essential ongoing service",
      "New construction and renovation market very active"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Between heating and cooling seasons" },
      { service: "Roofing", timing: "Spring or fall", reason: "Moderate temperatures; dry weather" },
      { service: "Landscaping", timing: "Early spring or fall", reason: "Avoid summer heat; good planting conditions" },
      { service: "Exterior Painting", timing: "Spring or fall", reason: "Lower humidity; moderate temps" }
    ],
    localConsiderations: [
      "Atlanta traffic significantly impacts contractor scheduling",
      "Many homes on septic systems require periodic service",
      "Red clay soil causes drainage and foundation challenges",
      "Pest control is year-round due to climate"
    ],
    commonIssues: [
      "AC failures during summer heat waves",
      "Moisture and mold in crawl spaces",
      "Termite damage (Georgia is high-risk zone)",
      "Storm damage to roofs and siding"
    ]
  },
  {
    stateSlug: "ma",
    economicFactors: [
      "Among highest labor costs in the nation, especially Greater Boston",
      "Limited contractor availability; book well in advance",
      "High insurance and licensing requirements add to overhead",
      "Union labor common in commercial and some residential work"
    ],
    climateConcerns: [
      "Cold winters with significant snow and ice",
      "Nor'easters can cause major storm damage",
      "Hot, humid summers stress cooling systems",
      "Coastal areas face salt air and flooding concerns"
    ],
    regulatoryNotes: [
      "Strict licensing requirements for most trades",
      "Historic district rules in many communities restrict exterior changes",
      "Title 5 regulations govern septic systems",
      "Energy code requirements increasingly stringent"
    ],
    marketTrends: [
      "Historic home renovation is a specialty market",
      "Energy efficiency upgrades incentivized by Mass Save program",
      "Heat pump adoption growing due to electrification push",
      "Smart home technology integration increasing"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Between heating and cooling peaks" },
      { service: "Roofing", timing: "Late summer to early fall", reason: "Before winter weather arrives" },
      { service: "Exterior Painting", timing: "Late spring to early fall", reason: "Temperature constraints limit painting season" },
      { service: "Landscaping", timing: "Spring (May-June)", reason: "After frost; summer establishment" }
    ],
    localConsiderations: [
      "Historic homes often have unique requirements and specialized contractors",
      "Snow removal contracts should be secured by October",
      "Many homes have oil heat requiring regular delivery and maintenance",
      "Lead paint and asbestos common in older homes"
    ],
    commonIssues: [
      "Ice dams on roofs causing water damage",
      "Heating system failures during cold snaps",
      "Foundation and basement water issues",
      "Historic window and door restoration needs"
    ]
  },
  {
    stateSlug: "oh",
    economicFactors: [
      "Lower cost of living translates to more affordable service rates",
      "Stable economy with consistent contractor availability",
      "Industrial heritage means good availability of skilled trades",
      "Urban/rural pricing differences are moderate"
    ],
    climateConcerns: [
      "Cold winters require reliable heating systems",
      "Lake effect snow in northern regions",
      "Hot, humid summers stress cooling systems",
      "Freeze-thaw cycles cause foundation and concrete damage"
    ],
    regulatoryNotes: [
      "Licensing requirements vary significantly by city",
      "Some cities (Cleveland, Columbus) have specific requirements",
      "State electrical licensing required",
      "Building codes vary by municipality"
    ],
    marketTrends: [
      "Energy efficiency upgrades popular due to extreme seasons",
      "Basement waterproofing is a significant market",
      "Older home renovation and updates common",
      "HVAC system upgrades to improve efficiency"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Between heating and cooling seasons" },
      { service: "Roofing", timing: "Late spring to early fall", reason: "Best weather conditions" },
      { service: "Landscaping", timing: "Spring (April-May)", reason: "After frost; establishment before summer" },
      { service: "Exterior Painting", timing: "Late spring to early fall", reason: "Temperature and humidity constraints" }
    ],
    localConsiderations: [
      "Many older homes with outdated electrical and plumbing",
      "Basement moisture issues common in many areas",
      "Furnace maintenance critical before winter",
      "Snow removal needs vary significantly by region"
    ],
    commonIssues: [
      "Furnace failures during cold weather",
      "Basement water intrusion",
      "Roof damage from ice and storms",
      "Foundation settling in older homes"
    ]
  },
  {
    stateSlug: "mi",
    economicFactors: [
      "Moderate labor costs compared to coastal states",
      "Automotive industry decline shifted workers to construction trades",
      "Detroit area differs from suburban and rural pricing",
      "Seasonal work patterns affect contractor availability"
    ],
    climateConcerns: [
      "Harsh winters with significant snow accumulation",
      "Lake effect snow in western and northern regions",
      "Hot, humid summers on the eastern side",
      "Wide temperature swings stress building materials"
    ],
    regulatoryNotes: [
      "Residential builders require state licensing",
      "Electrical and mechanical work requires licensing",
      "Building codes follow state standards with local amendments",
      "Septic regulations in areas without municipal sewer"
    ],
    marketTrends: [
      "Energy efficiency upgrades for high heating costs",
      "Basement waterproofing and drainage systems",
      "Lake house maintenance and winterization",
      "Snow removal services in high demand"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Off-peak for better availability and pricing" },
      { service: "Roofing", timing: "Summer", reason: "Best weather; before snow season" },
      { service: "Landscaping", timing: "Late spring", reason: "After ground thaws; summer establishment" },
      { service: "Exterior Painting", timing: "Summer", reason: "Short window of ideal weather" }
    ],
    localConsiderations: [
      "Snow removal contracts essential in most of the state",
      "Lake properties have additional maintenance considerations",
      "Many older homes in industrial cities need updates",
      "Winterization is critical for vacation properties"
    ],
    commonIssues: [
      "Furnace failures during winter",
      "Ice dams and roof damage",
      "Basement moisture and flooding",
      "Driveway and concrete damage from salt and freeze-thaw"
    ]
  },
  {
    stateSlug: "nc",
    economicFactors: [
      "Research Triangle growth driving higher costs in Raleigh-Durham area",
      "Charlotte metro also seeing price increases",
      "Rural areas remain more affordable",
      "Growing population increasing contractor demand"
    ],
    climateConcerns: [
      "Hot, humid summers require robust AC systems",
      "Hurricane risk in coastal areas",
      "Mountain areas see significant snow",
      "Varied climate from coast to mountains"
    ],
    regulatoryNotes: [
      "General contractor licensing at state level",
      "Licensing requirements for most trades",
      "Coastal building codes stricter due to hurricane risk",
      "Septic regulations in many suburban and rural areas"
    ],
    marketTrends: [
      "New construction market very active",
      "Hurricane preparation services in coastal regions",
      "Energy efficiency upgrades popular",
      "Outdoor living spaces in demand"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Moderate demand and weather" },
      { service: "Roofing", timing: "Spring or fall", reason: "Moderate temperatures; dry conditions" },
      { service: "Landscaping", timing: "Spring or fall", reason: "Avoid summer heat; good planting conditions" },
      { service: "Exterior Painting", timing: "Spring or fall", reason: "Lower humidity than summer" }
    ],
    localConsiderations: [
      "Coastal properties have different needs than inland",
      "Mountain properties face different climate challenges",
      "Red clay soil affects foundations and drainage",
      "HOAs common in many suburban developments"
    ],
    commonIssues: [
      "AC failures during summer",
      "Humidity-related mold and mildew",
      "Foundation settling in clay soils",
      "Storm and wind damage"
    ]
  },
  {
    stateSlug: "pa",
    economicFactors: [
      "Philadelphia and Pittsburgh metro areas higher than rural regions",
      "Older housing stock creates demand for renovation specialists",
      "Moderate labor costs overall",
      "Good availability of skilled trades"
    ],
    climateConcerns: [
      "Cold winters with snow require reliable heating",
      "Hot, humid summers in eastern regions",
      "Freeze-thaw cycles damage foundations and driveways",
      "Heavy rains can cause basement flooding"
    ],
    regulatoryNotes: [
      "Home improvement contractors must register with state",
      "Philadelphia and Pittsburgh have additional requirements",
      "Electrical and plumbing require licensing",
      "Older homes may require lead and asbestos considerations"
    ],
    marketTrends: [
      "Historic home renovation is a significant market",
      "Energy efficiency upgrades for older homes",
      "Basement waterproofing services in demand",
      "Heating system upgrades from oil to gas or electric"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Between heating and cooling peaks" },
      { service: "Roofing", timing: "Late spring to early fall", reason: "Best weather conditions" },
      { service: "Landscaping", timing: "Spring (April-May)", reason: "After frost; summer establishment" },
      { service: "Exterior Painting", timing: "Late spring to early fall", reason: "Temperature constraints" }
    ],
    localConsiderations: [
      "Many homes still have oil heat requiring conversion considerations",
      "Historic districts have restrictions on exterior changes",
      "Basement moisture issues common due to age and climate",
      "Older electrical systems often need updating"
    ],
    commonIssues: [
      "Heating system failures in winter",
      "Basement water intrusion",
      "Foundation issues from freeze-thaw",
      "Aging infrastructure in older homes"
    ]
  },
  {
    stateSlug: "il",
    economicFactors: [
      "Chicago metro significantly higher than rest of state",
      "Union labor common in Chicago area",
      "Downstate areas much more affordable",
      "High property taxes add to overall homeownership costs"
    ],
    climateConcerns: [
      "Harsh winters with significant cold and snow",
      "Hot, humid summers strain AC systems",
      "Lake effect weather near Chicago",
      "Severe thunderstorms and occasional tornadoes"
    ],
    regulatoryNotes: [
      "Chicago has extensive licensing and permit requirements",
      "State requires licensing for some trades",
      "Downstate regulations less stringent",
      "Energy code requirements apply statewide"
    ],
    marketTrends: [
      "Energy efficiency upgrades popular due to extreme seasons",
      "Basement waterproofing is a major market",
      "HVAC system upgrades for efficiency",
      "Historic home renovation in urban areas"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Between heating and cooling extremes" },
      { service: "Roofing", timing: "Late spring to early fall", reason: "Weather window between extremes" },
      { service: "Landscaping", timing: "Late spring", reason: "After last frost; short growing season" },
      { service: "Exterior Painting", timing: "Summer", reason: "Limited window of ideal conditions" }
    ],
    localConsiderations: [
      "Chicago parking and access challenges add to costs",
      "Older buildings in Chicago have specific code requirements",
      "Snow removal essential throughout the state",
      "Basement sump pumps and waterproofing common needs"
    ],
    commonIssues: [
      "Furnace failures during polar vortex events",
      "Basement flooding from rain and snowmelt",
      "Ice dam damage to roofs",
      "Foundation damage from soil movement"
    ]
  },
  {
    stateSlug: "va",
    economicFactors: [
      "Northern Virginia (NoVA) is essentially DC metro pricing",
      "Hampton Roads moderate compared to NoVA",
      "Rural Virginia much more affordable",
      "Strong economy keeps contractor demand steady"
    ],
    climateConcerns: [
      "Hot, humid summers in most of the state",
      "Cold winters in mountain regions",
      "Hurricane risk in coastal areas",
      "Varying climate from coast to mountains"
    ],
    regulatoryNotes: [
      "State contractor licensing required",
      "Fairfax County and other NoVA jurisdictions have additional requirements",
      "Coastal building codes in Tidewater region",
      "Historic district regulations in many areas"
    ],
    marketTrends: [
      "High demand in growing NoVA suburbs",
      "Historic renovation in older cities",
      "Energy efficiency upgrades incentivized",
      "Military base proximity affects markets in some areas"
    ],
    bestTimeToHire: [
      { service: "HVAC", timing: "Spring or fall", reason: "Moderate demand periods" },
      { service: "Roofing", timing: "Spring or fall", reason: "Best weather conditions" },
      { service: "Landscaping", timing: "Spring or fall", reason: "Avoid summer heat" },
      { service: "Exterior Painting", timing: "Spring or fall", reason: "Lower humidity; moderate temps" }
    ],
    localConsiderations: [
      "NoVA traffic significantly impacts contractor scheduling",
      "Historic areas have strict renovation guidelines",
      "Septic systems common in suburban and rural areas",
      "HOAs prevalent in many developments"
    ],
    commonIssues: [
      "AC failures during humid summers",
      "Humidity-related mold in basements and crawl spaces",
      "Foundation settling in clay soils",
      "Storm and hurricane damage in coastal areas"
    ]
  }
];

// Get insights by state slug
export function getInsightsForState(stateSlug: string): RegionalInsight | undefined {
  return REGIONAL_INSIGHTS.find(r => r.stateSlug === stateSlug);
}
