// content/service-insights.ts
// Hand-written, unique editorial content for each service.
// This is NOT generated from templates - each entry has original analysis
// specific to that service category.

export type ServiceInsight = {
  /** Why this service specifically costs what it does — not generic advice */
  pricingDeepDive: string;
  /** Common mistakes people make when hiring for THIS service */
  commonMistakes: string[];
  /** When to DIY vs. hire — specific to this service */
  diyVsHire: {
    canDiy: string[];
    mustHire: string[];
    verdict: string;
  };
  /** Industry-specific terminology buyers should know */
  glossary: { term: string; definition: string }[];
  /** Real-world cost scenarios that illustrate price variation */
  scenarios: { title: string; description: string; priceContext: string }[];
};

const insights: Record<string, ServiceInsight> = {

  "appliance-repair": {
    pricingDeepDive: "Appliance repair pricing is unusual because the diagnostic fee structure creates a two-tier cost. Most technicians charge $75–$150 just to diagnose the problem, and this fee is sometimes (but not always) credited toward the repair. The real cost driver is parts: a control board for a Samsung refrigerator can cost $300+ for the part alone, while a generic belt for a dryer might be $15. Brand matters enormously — luxury brands like Sub-Zero, Viking, and Miele require factory-certified technicians who charge premium rates and use parts that cost 3-5x more than commodity brands.",
    commonMistakes: [
      "Not checking the warranty first — many appliances have 5-10 year compressor or motor warranties that people don't know about",
      "Paying for a repair that costs more than 50% of the appliance's replacement value",
      "Hiring a general handyman for appliances with sealed refrigerant systems (requires EPA certification)",
      "Ignoring recall notices — many repairs are actually covered by manufacturer recalls",
      "Not asking whether the diagnostic fee is waived if you proceed with the repair"
    ],
    diyVsHire: {
      canDiy: [
        "Replacing a refrigerator water filter",
        "Cleaning dryer lint traps and exhaust ducts",
        "Replacing a dishwasher door gasket",
        "Unclogging a garbage disposal with an Allen wrench reset",
        "Leveling a vibrating washing machine"
      ],
      mustHire: [
        "Anything involving refrigerant (legally requires EPA certification)",
        "Gas appliance repairs (carbon monoxide risk)",
        "Control board replacements (complex wiring and calibration)",
        "Sealed system repairs on refrigerators",
        "Microwave magnetron or capacitor work (lethal voltage even unplugged)"
      ],
      verdict: "Most mechanical fixes (belts, switches, gaskets) are beginner-friendly with YouTube guidance. Anything involving gas, refrigerant, or high-voltage capacitors should always go to a certified professional — the safety risk isn't worth the savings."
    },
    glossary: [
      { term: "Diagnostic Fee", definition: "A flat charge for the technician to identify the problem. Some companies waive this if you hire them for the repair." },
      { term: "OEM Parts", definition: "Original Equipment Manufacturer parts made by the appliance brand. More expensive but guaranteed to fit. Aftermarket alternatives may void warranties." },
      { term: "Sealed System", definition: "The compressor, condenser, and evaporator in refrigerators and freezers. Repairs require special equipment and EPA-certified technicians." },
      { term: "Flat-Rate Pricing", definition: "A fixed price for a specific repair regardless of time spent. Common at franchise repair companies. Can be cheaper or more expensive than time-and-materials." }
    ],
    scenarios: [
      { title: "Simple Fix", description: "Dryer won't start — turns out the door switch is faulty. Part costs $12, repair takes 20 minutes.", priceContext: "Total: $100-$180 (mostly labor/diagnostic fee)" },
      { title: "Mid-Range Repair", description: "Refrigerator not cooling — fan motor replacement needed. Requires partial disassembly.", priceContext: "Total: $250-$450 depending on brand and motor type" },
      { title: "Major Repair", description: "Samsung refrigerator ice maker and control board both failing. Factory-certified tech needed.", priceContext: "Total: $500-$900 — often approaching replacement cost for a mid-range fridge" }
    ]
  },

  "carpentry": {
    pricingDeepDive: "Carpentry costs split into two distinct markets: rough carpentry (framing, structural work) at $30-$60/hour and finish carpentry (trim, cabinetry, built-ins) at $50-$100+/hour. The skill gap is enormous. A framing carpenter works fast with dimensional lumber, while a finish carpenter spends hours achieving invisible joints on hardwood. Material choice dramatically affects price — a simple pine bookshelf might cost $300 in materials, while the same design in white oak could be $1,200+. Custom work always costs significantly more than semi-custom or prefabricated alternatives because it requires on-site measuring, templating, and fitting that can't be mass-produced.",
    commonMistakes: [
      "Not distinguishing between a general carpenter and a finish carpenter — they're different specialties",
      "Assuming wood costs are included in labor quotes (they're usually separate)",
      "Requesting exotic hardwoods without understanding the 3-5x price premium over domestic species",
      "Not factoring in wood finishing costs (staining, sealing, painting) which is often a separate trade",
      "Choosing the cheapest wood for outdoor projects — pressure-treated pine rots faster than cedar or composite"
    ],
    diyVsHire: {
      canDiy: [
        "Installing basic shelving with brackets",
        "Replacing interior trim and baseboards",
        "Building a simple garden raised bed",
        "Hanging a pre-hung interior door",
        "Basic deck board replacement (non-structural)"
      ],
      mustHire: [
        "Load-bearing wall modifications (requires structural engineering)",
        "Custom staircase construction (complex geometry and code requirements)",
        "Built-in cabinetry and entertainment centers",
        "Structural beam and post work",
        "Exterior work requiring waterproofing integration"
      ],
      verdict: "Simple cuts and assemblies are very DIY-friendly with basic tools. But anything structural, custom-fitted, or requiring precise joints is where professional skill pays for itself — a visible gap between boards or an unlevel shelf is hard to undo."
    },
    glossary: [
      { term: "Board Foot", definition: "A volume measurement for lumber: 1 inch thick × 12 inches wide × 12 inches long. Hardwoods are sold by the board foot, not linear foot." },
      { term: "Finish Carpentry", definition: "Detailed woodwork visible in the finished space — crown molding, built-ins, custom cabinets. Requires precision and aesthetics." },
      { term: "Rough Carpentry", definition: "Structural framing, subflooring, and sheathing that gets covered by finish materials. Speed and structural integrity matter more than appearance." },
      { term: "Scribe", definition: "Cutting material to fit an irregular surface (like a wall that isn't perfectly straight). This is a time-intensive skill." }
    ],
    scenarios: [
      { title: "Simple Project", description: "Replace 60 linear feet of baseboards in three rooms. Pine material, paint-grade.", priceContext: "Total: $400-$800 (materials $80-$150, rest is labor)" },
      { title: "Mid-Range Project", description: "Build a 12-foot long built-in bookshelf with adjustable shelves. Birch plywood.", priceContext: "Total: $2,000-$4,000 depending on design complexity and finishing" },
      { title: "Premium Project", description: "Custom white oak staircase railing with newel posts and balusters. Requires templating, shop work, and site fitting.", priceContext: "Total: $5,000-$12,000+ — this is highly skilled artisan work" }
    ]
  },

  "carpet-cleaning": {
    pricingDeepDive: "Carpet cleaning has a split market that confuses consumers. Large franchise operations often advertise '$29 per room' deals but make their profit on upsells: pre-treatment ($30-$50 per room), deodorizing ($20-$40), stain guard ($30-$50), and heavy furniture moving ($15-$30 per piece). Independent operators typically charge $40-$75 per room all-in but don't have the marketing overhead. The cleaning method also matters: hot water extraction (steam cleaning) costs more but cleans deeper, while low-moisture encapsulation is cheaper and dries in 1-2 hours but doesn't remove deep soil as effectively.",
    commonMistakes: [
      "Falling for '$29/room' deals without reading the fine print about minimum charges and required add-ons",
      "Not vacuuming thoroughly before the cleaners arrive — they charge the same but results are worse",
      "Walking on freshly cleaned carpet before it dries, which pushes dirt from shoe soles into the damp fibers",
      "Waiting until carpet looks dirty to clean — by that time, dirt has been grinding down the fibers for months",
      "Using rental carpet cleaners with too much detergent, leaving residue that attracts more dirt"
    ],
    diyVsHire: {
      canDiy: [
        "Regular vacuuming (2x/week for high traffic areas)",
        "Spot cleaning fresh stains with appropriate solutions",
        "Light refresh with a rented carpet cleaner for lightly soiled areas",
        "Deodorizing with baking soda before vacuuming"
      ],
      mustHire: [
        "Deep pet urine contamination that has soaked into the pad",
        "Post-renovation cleaning with construction dust embedded in carpet",
        "Cleaning before a home sale (professional results look noticeably better)",
        "Water damage restoration (requires commercial extractors and antimicrobial treatment)"
      ],
      verdict: "Regular maintenance and spot cleaning are easy DIY tasks. But for deep cleaning, professional truck-mounted equipment extracts 10-20x more water and soil than rental machines. Annual professional cleaning extends carpet life by 3-5 years."
    },
    glossary: [
      { term: "Hot Water Extraction", definition: "Often called 'steam cleaning' — sprays heated water and cleaning solution under pressure, then vacuums it back. Most thorough method, 6-12 hour dry time." },
      { term: "Encapsulation", definition: "A low-moisture method using polymer detergents that crystallize around dirt particles, which are then vacuumed away. Dries in 1-2 hours." },
      { term: "CRI Seal of Approval", definition: "The Carpet and Rug Institute's certification that a cleaning product or method won't damage carpet. Look for this when choosing a cleaner." },
      { term: "Carpet Protector", definition: "A fluorochemical coating (like Scotchgard) that repels spills. Lasts 12-18 months and must be reapplied after each deep cleaning." }
    ],
    scenarios: [
      { title: "Basic Cleaning", description: "Three bedroom home, light foot traffic, no pets. Standard hot water extraction.", priceContext: "Total: $150-$300 for whole home (typically 5-7 areas)" },
      { title: "Pet Household", description: "Dog urine in two rooms requiring enzyme treatment, plus whole-house deodorizing.", priceContext: "Total: $350-$600 with specialty treatments and deodorizers" },
      { title: "Move-Out Clean", description: "Four bedroom rental with heavy staining, furniture marks, and required stain protector reapplication.", priceContext: "Total: $400-$800 depending on severity and landlord requirements" }
    ]
  },

  "dumpster-rental": {
    pricingDeepDive: "Dumpster rental pricing is based on three factors that interact: container size (cubic yards), weight allowance (tons), and rental period (days). The base price includes delivery, pickup, disposal up to a weight limit, and a set rental period (usually 7-10 days). What catches people off guard are the overage charges: $40-$100 per extra ton over the weight limit and $10-$25 per extra day. Location matters because disposal (landfill tipping) fees vary wildly — from $30/ton in parts of the Midwest to $150+/ton in congested coastal areas. The type of debris also matters: clean fill (dirt, concrete) often goes to different facilities than mixed construction waste.",
    commonMistakes: [
      "Renting too small — going up one size costs $50-$100 more, but overage weight fees or needing a second dumpster costs much more",
      "Not knowing local permit requirements — many municipalities require a street permit ($25-$75) if the dumpster can't fit on your driveway",
      "Throwing prohibited items (paint, tires, batteries, refrigerants) which can result in $100+ fines per item",
      "Not protecting your driveway — dumpster feet and wheels can crack concrete and gouge asphalt",
      "Loading heavy debris (concrete, soil) on one side, making the container impossible to pick up safely"
    ],
    diyVsHire: {
      canDiy: [
        "Loading the dumpster yourself during a renovation or cleanout",
        "Hauling small loads to the dump in a pickup truck (if the dump is close and fees are low)",
        "Sorting recyclable materials to reduce dumpster weight"
      ],
      mustHire: [
        "Any cleanout requiring more than a pickup truck load",
        "Construction debris from renovation projects",
        "Estate cleanouts with mixed heavy and bulky items",
        "Roofing tear-offs (shingles are extremely heavy — a typical roof fills a 20-yard container)"
      ],
      verdict: "If you have a pickup truck and the project generates less than a truckload of debris, self-hauling to the dump might be cheaper. For anything larger, a dumpster rental is almost always more cost-effective and saves multiple trips."
    },
    glossary: [
      { term: "Cubic Yard", definition: "A 3×3×3 foot volume measurement. A 20-yard dumpster holds about 10 pickup truck loads." },
      { term: "Tipping Fee", definition: "The per-ton fee charged by the landfill or transfer station. This is the largest component of the rental company's cost and varies greatly by region." },
      { term: "Weight Allowance", definition: "The amount of debris weight included in the base price (usually 2-4 tons). Exceeding this incurs per-ton overage fees." },
      { term: "Clean Fill", definition: "Dirt, rock, concrete, and brick with no contamination. Often has separate (sometimes cheaper) disposal options." }
    ],
    scenarios: [
      { title: "Garage Cleanout", description: "Decades of accumulated items from a two-car garage. Mostly household items and old furniture.", priceContext: "10-yard dumpster: $250-$450, usually stays under the weight limit" },
      { title: "Kitchen Renovation", description: "Demo of old cabinets, countertops, flooring, and drywall. Mixed construction debris.", priceContext: "20-yard dumpster: $350-$600, may need 14-day rental for longer projects" },
      { title: "Roofing Tear-Off", description: "Full shingle removal from a 2,000 sq ft roof. Asphalt shingles are extremely heavy.", priceContext: "20-yard dumpster: $400-$700 — weight overage fees are very common with roofing" }
    ]
  },

  "electrician": {
    pricingDeepDive: "Electrical work pricing splits into service calls (diagnosing and fixing problems) and project work (new installations, upgrades). Service calls typically start with a trip charge ($75-$150) plus hourly labor ($80-$150/hour). Project work is usually bid as flat-rate. The biggest cost variable is your home's existing wiring: modern Romex wiring in accessible walls is easy to work with, while knob-and-tube or aluminum wiring in finished walls requires significantly more labor. Panel upgrades — one of the most common residential electrical projects — range from $1,500-$4,000 because they involve utility coordination, permits, and meticulous wiring organization.",
    commonMistakes: [
      "Hiring an unlicensed electrician — faulty wiring causes 50,000+ house fires annually in the US",
      "Not pulling permits for significant work — your insurance company can deny fire claims on unpermitted electrical work",
      "Adding circuits to a panel that's already at capacity, causing the panel to trip frequently",
      "Not considering future needs — running wire in open walls is cheap; opening finished walls later is expensive",
      "Confusing GFCI (outlets near water) requirements with AFCI (arc-fault, bedrooms) requirements — codes vary by location"
    ],
    diyVsHire: {
      canDiy: [
        "Replacing a light switch or outlet cover plate",
        "Swapping a light fixture (same wiring, same location)",
        "Resetting a tripped circuit breaker",
        "Installing a smart thermostat (low voltage, very safe)",
        "Replacing a plug on a lamp cord"
      ],
      mustHire: [
        "Any new circuit installation",
        "Electrical panel upgrades or replacement",
        "Wiring for 240V appliances (EV chargers, dryers, ranges)",
        "Knob-and-tube rewiring",
        "Outdoor electrical work (wet location requirements)",
        "Anything requiring a permit in your jurisdiction"
      ],
      verdict: "Simple device swaps (same location, same wiring) are safe for most homeowners. But electrical work is the one trade where DIY mistakes can be fatal — not just to you, but to anyone living in the home years later if wiring is done incorrectly. When in doubt, hire a licensed electrician."
    },
    glossary: [
      { term: "GFCI", definition: "Ground Fault Circuit Interrupter — required near water (kitchens, bathrooms, outdoors). Shuts off power in milliseconds if it detects current flowing through an unintended path." },
      { term: "AFCI", definition: "Arc-Fault Circuit Interrupter — detects dangerous electrical arcs that could start fires. Required in bedrooms and living areas by current NEC codes." },
      { term: "Panel Upgrade", definition: "Replacing or upgrading the main breaker panel. Often needed when adding high-draw circuits (EV charger, hot tub) or upgrading from 100-amp to 200-amp service." },
      { term: "NEC", definition: "National Electrical Code — the standard for safe electrical installations. Updated every 3 years. Local jurisdictions may adopt older versions with amendments." }
    ],
    scenarios: [
      { title: "Outlet Addition", description: "Add one grounded outlet in a finished room. Requires fishing wire through the wall from the basement.", priceContext: "Total: $200-$500 depending on wall accessibility" },
      { title: "Panel Upgrade", description: "Upgrade from 100-amp to 200-amp service to accommodate an EV charger and modern load. Includes utility coordination.", priceContext: "Total: $1,800-$4,000 including permit, new panel, and utility disconnect" },
      { title: "Whole-House Rewire", description: "Replace all knob-and-tube wiring in a 1920s bungalow. Requires opening walls and ceilings.", priceContext: "Total: $8,000-$20,000+ — this is a major project often combined with a renovation" }
    ]
  },

  "garage-door-repair": {
    pricingDeepDive: "Garage door repair pricing is dominated by one component: the springs. Torsion springs (the coiled bars above the door) cost $150-$350 per spring installed, and they should always be replaced in pairs even if only one has broken. Extension springs (mounted alongside the tracks) are cheaper at $100-$200 per pair. The second major cost category is the opener — replacing a chain-drive opener with a belt-drive unit runs $250-$500 installed. What many homeowners don't realize is that a 'broken' door often has a $20 problem: a misaligned sensor, a stripped gear, or a disconnected cable. Good companies diagnose before upselling; shady ones push complete replacements.",
    commonMistakes: [
      "Attempting to repair or adjust torsion springs yourself — they're under extreme tension and can cause serious injury or death",
      "Replacing only one spring when they come in pairs — the old spring will fail shortly after, requiring another service call",
      "Ignoring grinding or squeaking noises — these are early warnings of bearing failure or misalignment",
      "Buying the cheapest spring option — cycle-rated springs (25,000+ cycles) last 2-3x longer than standard (10,000 cycles)",
      "Not lubricating the door system annually — a $5 can of silicone spray prevents hundreds in repairs"
    ],
    diyVsHire: {
      canDiy: [
        "Lubricating hinges, rollers, and tracks with silicone spray",
        "Realigning safety sensors (those lights at the bottom of the tracks)",
        "Replacing weather stripping along the bottom and sides",
        "Tightening loose bolts on brackets and hinges",
        "Reprogramming the opener remote or keypad"
      ],
      mustHire: [
        "Torsion spring replacement (can be lethal if mishandled)",
        "Cable replacement (also under spring tension)",
        "Track realignment (door can fall if done incorrectly)",
        "Opener replacement (involves electrical and mechanical setup)",
        "Panel replacement on sectional doors"
      ],
      verdict: "Maintenance tasks (lubricating, sensor alignment, weather stripping) are safe and easy. But anything involving the spring system is genuinely dangerous — torsion springs store enough energy to cause fatal injuries. This is one service where the cost of professional repair is absolutely justified by the safety risk."
    },
    glossary: [
      { term: "Torsion Spring", definition: "The tightly wound spring mounted on a shaft above the door. Counterbalances the door's weight. These store enormous energy and must only be serviced by professionals." },
      { term: "Extension Spring", definition: "Springs mounted alongside the horizontal tracks. Stretch and contract to lift the door. Less common in modern installations." },
      { term: "Cycle Rating", definition: "How many open/close cycles a spring is rated for. Standard springs: 10,000 cycles (~7 years at 4 cycles/day). High-cycle springs: 25,000-50,000+ cycles." },
      { term: "Safety Cables", definition: "Steel cables that run through extension springs to contain them if they break. Required by code and should never be removed." }
    ],
    scenarios: [
      { title: "Sensor Fix", description: "Door won't close — turns out the safety sensor at the bottom of the track is misaligned. Takes 10 minutes.", priceContext: "Total: $75-$150 (service call charge). Some companies do this free with a spring check." },
      { title: "Spring Replacement", description: "One torsion spring snapped (loud bang, door won't lift). Both springs replaced as a pair.", priceContext: "Total: $250-$500 for a pair of standard torsion springs including labor" },
      { title: "Complete Opener Swap", description: "Old chain-drive opener is unreliable. Upgrade to a belt-drive with WiFi connectivity and battery backup.", priceContext: "Total: $350-$700 installed, depending on opener brand and features" }
    ]
  },

  "gutter-cleaning": {
    pricingDeepDive: "Gutter cleaning pricing is almost entirely driven by roof height and linear footage. A single-story ranch with 150 feet of gutters is a straightforward job at $100-$200. The same footage on a two-story colonial costs $200-$350 because of ladder height and safety considerations. Three-story homes or steep roofs requiring harnesses can run $350-$600+. Downspout unclogging adds $50-$100 if they need to be disassembled. The secret that gutter cleaning companies won't tell you: most clogging happens in just a few spots — where roof valleys converge and near trees. Addressing these problem areas can reduce cleaning frequency.",
    commonMistakes: [
      "Cleaning gutters only once a year — homes near deciduous trees need spring AND fall cleaning at minimum",
      "Using a pressure washer to clean gutters — this can damage seams, blast water behind fascia boards, and loosen gutter brackets",
      "Ignoring downspout clogs — water overflowing at the corners means the downspouts are likely blocked",
      "Installing gutter guards and assuming they never need maintenance — all guard types still need periodic cleaning",
      "Not checking gutter slope — gutters should slope toward downspouts at 1/4 inch per 10 feet"
    ],
    diyVsHire: {
      canDiy: [
        "Single-story gutters with stable, level ground for a ladder",
        "Flushing downspouts with a garden hose",
        "Installing basic gutter screens or mesh guards"
      ],
      mustHire: [
        "Two-story or higher gutters (ladder falls are the #1 cause of DIY home injury deaths)",
        "Gutters over decks, slopes, or uneven ground",
        "Homes surrounded by tall trees requiring roof debris removal",
        "Gutter repair, re-sloping, or resealing leaking seams"
      ],
      verdict: "If you have a single-story home with stable ground, gutter cleaning is a reasonable DIY task with a sturdy ladder and someone spotting you. For two-story homes or higher, hire a professional — the savings don't justify the fall risk."
    },
    glossary: [
      { term: "K-Style Gutter", definition: "The most common residential gutter shape, resembling the letter K in profile. Available in 5-inch and 6-inch widths." },
      { term: "Seamless Gutters", definition: "Custom-formed on-site to eliminate joints (except corners). More expensive upfront but less prone to leaking." },
      { term: "Fascia Board", definition: "The board behind the gutter where it mounts. Water damage here from overflowing gutters can be expensive to repair." },
      { term: "Gutter Guard", definition: "A cover or screen that prevents debris from entering the gutter. No guard type eliminates maintenance entirely, but they reduce cleaning frequency." }
    ],
    scenarios: [
      { title: "Simple Ranch", description: "Single-story ranch, 150 feet of gutters, no major tree coverage. Straightforward ladder access.", priceContext: "Total: $100-$175, typically takes 30-60 minutes" },
      { title: "Two-Story Colonial", description: "200 feet of gutters at 20+ feet, surrounded by mature oaks. Two downspouts are clogged.", priceContext: "Total: $225-$400 including downspout clearing" },
      { title: "Premium Service", description: "Full clean plus minor repairs (re-sealing 3 leaking joints) and installation of mesh guards on problem sections.", priceContext: "Total: $400-$800 depending on guard type and repair extent" }
    ]
  },

  "handyman": {
    pricingDeepDive: "Handyman pricing is uniquely variable because it covers such a wide scope — from hanging a picture to building a pergola. Most handymen charge $50-$100/hour with a minimum charge of 1-2 hours (so even a 15-minute fix costs $100-$200). The real value proposition is bundling: a handyman who comes for one job will often do 3-5 small tasks at the same hourly rate, which is far cheaper than calling separate specialists. Where pricing gets tricky is the gray area between handyman work and licensed trades — a handyman can install a new faucet, but in most states, they can't run new plumbing lines. Understanding this boundary prevents both overpaying and code violations.",
    commonMistakes: [
      "Calling a specialist (plumber, electrician) for something a handyman can handle at half the cost",
      "Hiring a handyman for work that legally requires a licensed tradesperson (most states have a dollar threshold, e.g., $500)",
      "Not preparing a list of tasks — handymen charge minimums, so batching 5 small jobs into one visit maximizes value",
      "Expecting handyman-quality finish work to match a specialist's — a handyman tiles adequately; a tile setter tiles beautifully",
      "Not defining 'done' before work starts — ambiguous scope leads to disagreements about pricing"
    ],
    diyVsHire: {
      canDiy: [
        "Hanging pictures, shelves, and curtain rods",
        "Painting a single room",
        "Assembling flat-pack furniture",
        "Caulking around tubs and windows",
        "Replacing cabinet hardware"
      ],
      mustHire: [
        "Anything above a single-story ladder height",
        "Tile work that needs to be waterproof (shower surrounds)",
        "Anything involving gas lines, permits, or structural elements",
        "Large drywall repairs (small holes are fine for DIY)",
        "Door frame adjustments that affect security or weatherproofing"
      ],
      verdict: "A handyman fills the gap between what you can do yourself and what requires a specialist. The ideal use case is a list of 4-6 small tasks that would each take you a weekend but a handyman finishes in a half day."
    },
    glossary: [
      { term: "Minimum Charge", definition: "The least amount a handyman will charge for a visit, typically 1-2 hours regardless of how quickly they finish. This covers travel time and overhead." },
      { term: "T&M", definition: "Time and Materials — billing based on actual hours worked plus materials cost. Common for handymen because job scope is hard to estimate in advance." },
      { term: "Punch List", definition: "A list of small tasks to be completed. Derived from construction, where a 'punch list' is the final set of items before a project is considered complete." },
      { term: "Licensed Trade", definition: "Work that requires a specific trade license (plumbing, electrical, HVAC). Most states prohibit handymen from performing this work above a certain dollar value." }
    ],
    scenarios: [
      { title: "Quick Fix Visit", description: "Fix a running toilet, tighten a wobbly railing, and recaulk a bathtub. Three tasks in one visit.", priceContext: "Total: $150-$300 (1.5-3 hours at handyman rates)" },
      { title: "Half-Day Project", description: "Install a ceiling fan, mount a TV with in-wall cable management, and assemble a large bookshelf.", priceContext: "Total: $250-$500 (3-5 hours, plus any materials you provide)" },
      { title: "Full-Day Project", description: "Replace a section of fence, repair drywall in three rooms, install new door hardware throughout the house.", priceContext: "Total: $400-$800 for a full 6-8 hour day" }
    ]
  },

  "house-cleaning": {
    pricingDeepDive: "House cleaning pricing splits into recurring service (weekly, biweekly, monthly) and one-time deep cleans. Recurring service is priced per visit and runs 30-50% less per visit than one-time cleaning because subsequent cleans are faster. The biggest pricing variable is square footage, followed by the number of bathrooms (bathrooms take disproportionately long). A deep clean of a 2,000 sq ft home might take 4-6 hours, while a recurring biweekly visit takes 2-3 hours. What most people don't realize is that franchise cleaning companies (Molly Maid, Merry Maids) charge $50-$100 more per visit than independent cleaners — you're paying for insurance, bonding, and consistency, which has real value.",
    commonMistakes: [
      "Comparing prices without confirming what's included — some 'cleaning' services don't include bathrooms, kitchens, or floors in the base price",
      "Hiring the cheapest cleaner without checking if they carry liability insurance and workers' comp",
      "Not doing an initial deep clean before starting recurring service — the first visit should be a deep clean to establish a baseline",
      "Expecting cleaning to include organizing, laundry, or dishes unless specifically agreed upon",
      "Not providing cleaning supplies and expecting the cleaner to bring professional-grade products at no extra charge"
    ],
    diyVsHire: {
      canDiy: [
        "Daily pickup and surface wiping",
        "Weekly vacuuming and mopping",
        "Bathroom maintenance cleaning",
        "Kitchen countertop and stovetop cleaning"
      ],
      mustHire: [
        "Move-out deep cleans (landlords and buyers have high standards)",
        "Post-construction or post-renovation cleaning (fine dust gets everywhere)",
        "Seasonal deep cleans (spring cleaning, holiday prep)",
        "Homes with severe allergies where HEPA-filtered professional equipment makes a real difference"
      ],
      verdict: "Regular maintenance cleaning is something most people can do. But recurring professional cleaning (biweekly or monthly) is one of the best quality-of-life investments for busy households — the economics make more sense when you value your free time."
    },
    glossary: [
      { term: "Deep Clean", definition: "A thorough one-time cleaning including baseboards, inside cabinets, behind appliances, and detailed bathroom scrubbing. Takes 2-3x longer than a standard cleaning." },
      { term: "Standard Clean", definition: "Regular maintenance cleaning: vacuuming, mopping, bathroom and kitchen surfaces, dusting visible surfaces. What most recurring services provide." },
      { term: "Bonded and Insured", definition: "A cleaning service that carries a surety bond (protects against theft) and liability insurance (covers accidental damage). Essential for regular in-home service." },
      { term: "Flat Rate vs. Hourly", definition: "Flat rate means a fixed price for the job. Hourly means you pay for actual time spent. Flat rate is more predictable; hourly can be cheaper for quick cleans." }
    ],
    scenarios: [
      { title: "Recurring Biweekly", description: "Standard clean of a 1,500 sq ft apartment, 2 bed/1 bath. Ongoing biweekly service.", priceContext: "Per visit: $100-$175 biweekly ($200-$350/month)" },
      { title: "One-Time Deep Clean", description: "3-bedroom house, 2,000 sq ft, hasn't been professionally cleaned in over a year.", priceContext: "Total: $300-$550 for initial deep clean (4-6 hours, 1-2 cleaners)" },
      { title: "Move-Out Clean", description: "Empty 2-bedroom apartment, need to pass landlord inspection. Includes oven, fridge interior, window tracks.", priceContext: "Total: $250-$450 — some companies offer a re-clean guarantee if the landlord isn't satisfied" }
    ]
  },

  "hvac": {
    pricingDeepDive: "HVAC pricing is dominated by equipment costs, which represent 50-70% of most projects. A basic 2.5-ton central AC unit costs $1,500-$3,000 for the equipment alone, while a high-efficiency heat pump runs $3,000-$7,000. Labor for installation is relatively standardized at $1,500-$3,000 for a straightforward swap. What drives costs up dramatically is ductwork modification, refrigerant line sets, electrical upgrades, and code-required changes. The SEER2 rating (efficiency) affects both equipment cost and long-term energy savings — going from SEER2 14 to SEER2 18 adds $2,000-$4,000 to the equipment cost but can save $300-$500/year in energy bills.",
    commonMistakes: [
      "Buying the cheapest system without considering efficiency — a $2,000 savings upfront can cost $5,000+ more in energy over the unit's lifetime",
      "Not getting a Manual J load calculation — sizing HVAC by square footage alone leads to oversized or undersized systems that waste energy and fail early",
      "Ignoring ductwork — leaky ducts waste 20-30% of conditioned air, making even a new high-efficiency unit perform poorly",
      "Skipping annual maintenance — dirty filters and coils reduce efficiency by 5-15% and shorten equipment life by years",
      "Replacing only the outdoor unit without matching it to a new indoor coil — mismatched systems lose efficiency and may void the warranty"
    ],
    diyVsHire: {
      canDiy: [
        "Replacing air filters monthly during peak season",
        "Cleaning debris from around the outdoor condenser unit",
        "Programming or replacing a thermostat (low voltage, safe)",
        "Cleaning visible return air vents and registers",
        "Checking that condensate drain lines are clear"
      ],
      mustHire: [
        "Any refrigerant work (EPA certification required by law)",
        "Equipment installation or replacement",
        "Ductwork design, installation, or major repair",
        "Electrical connections for new equipment",
        "Gas furnace repair (carbon monoxide risk)"
      ],
      verdict: "Filter changes and basic cleaning are easy DIY maintenance that meaningfully extends equipment life. But HVAC installation, repair, and refrigerant handling are licensed trades for good reason — improper installation is both dangerous and costly."
    },
    glossary: [
      { term: "SEER2", definition: "Seasonal Energy Efficiency Ratio 2 — measures cooling efficiency over a season. Higher numbers mean lower energy costs. Minimum standard is now SEER2 14-15 depending on region." },
      { term: "Manual J", definition: "The engineering calculation to determine the correct HVAC system size for a specific home. Accounts for insulation, windows, orientation, and climate." },
      { term: "Heat Pump", definition: "A system that both heats and cools by moving heat rather than generating it. More efficient than gas furnaces in moderate climates. Modern cold-climate models work down to -15°F." },
      { term: "Tonnage", definition: "HVAC cooling capacity. One ton = 12,000 BTU/hour. A 2,000 sq ft home typically needs 3-4 tons, but this varies with insulation, climate, and home design." }
    ],
    scenarios: [
      { title: "Repair Visit", description: "AC not cooling — capacitor failure. Common part, straightforward replacement.", priceContext: "Total: $150-$400 (part is $10-$50, rest is labor and service call)" },
      { title: "System Replacement", description: "Replace 15-year-old 13 SEER AC and gas furnace with a 16 SEER2 system. Existing ductwork in good condition.", priceContext: "Total: $6,000-$12,000 depending on equipment tier and any code upgrades needed" },
      { title: "Heat Pump Conversion", description: "Convert from gas furnace + AC to a dual-fuel heat pump system. Requires new line set and electrical work.", priceContext: "Total: $10,000-$18,000 — but may qualify for $2,000-$8,000 in federal/state rebates" }
    ]
  },

  "junk-removal": {
    pricingDeepDive: "Junk removal pricing is based on volume — how much of the truck your items fill. Most companies charge by the 1/4, 1/2, 3/4, or full truck load rather than by weight. A full truck (about 15 cubic yards) runs $400-$800 in most markets. The pricing is straightforward until you hit special items: mattresses ($30-$50 surcharge due to disposal regulations), electronics ($20-$40 per item for proper recycling), and refrigerants ($50-$100 per appliance with Freon). What many people don't realize is that junk removal companies sort items for donation, recycling, and landfill — if you have many donatable items, you might reduce costs by separating them yourself.",
    commonMistakes: [
      "Not getting an on-site estimate — photos rarely capture true volume, leading to surprise charges on job day",
      "Mixing hazardous items (paint, chemicals, batteries) with regular junk — most companies won't take them and some will charge penalty fees",
      "Booking a junk removal company when a dumpster rental would be cheaper for a large cleanout you can load yourself",
      "Not removing items from upstairs or basements yourself — labor for carrying heavy items down stairs adds significantly to cost",
      "Throwing away items that have resale or donation value — garage sale or donate first, then call junk removal for the rest"
    ],
    diyVsHire: {
      canDiy: [
        "Donating usable items to Salvation Army, Goodwill, or Habitat ReStore (many offer free pickup)",
        "Selling valuable items on Facebook Marketplace or Craigslist before the cleanout",
        "Hauling small loads to the dump yourself if you have a truck",
        "Scheduling municipal bulk pickup days (free in many areas)"
      ],
      mustHire: [
        "Estate cleanouts with multiple rooms of accumulated belongings",
        "Hoarding situations requiring sensitivity and efficiency",
        "Construction debris mixed with household items",
        "Items too heavy to safely move yourself (pianos, safes, hot tubs)"
      ],
      verdict: "For a few items, DIY or municipal pickup is the way to go. For larger cleanouts, professional junk removal saves enormous amounts of time and physical labor. The convenience premium is worth it for most people clearing an estate, garage, or basement."
    },
    glossary: [
      { term: "Truck Load", definition: "The primary billing unit. A standard junk removal truck holds about 15 cubic yards, equivalent to roughly 8-10 pickup truck loads." },
      { term: "E-Waste", definition: "Electronic waste (TVs, computers, monitors) that requires special recycling. Most jurisdictions prohibit e-waste in regular landfills." },
      { term: "Donation Diversion", definition: "Items the junk removal company separates for donation rather than landfill. Some companies report a 60-70% diversion rate." },
      { term: "Hazardous Waste", definition: "Paint, chemicals, oil, batteries, and fluorescent bulbs that require special disposal. Most junk removal companies can't take these — check local HHW collection events." }
    ],
    scenarios: [
      { title: "Small Pickup", description: "A few pieces of old furniture and boxes of household clutter. About 1/4 truck.", priceContext: "Total: $100-$250 for a quarter truckload" },
      { title: "Garage Cleanout", description: "Full two-car garage of accumulated junk, old tools, broken furniture. About 1/2 to 3/4 truck.", priceContext: "Total: $250-$500, takes 1-2 hours for the crew" },
      { title: "Full Estate Cleanout", description: "Three-bedroom house with basement and attic. Multiple truck loads over 1-2 days.", priceContext: "Total: $1,500-$4,000+ depending on volume and special items" }
    ]
  },

  "landscaping": {
    pricingDeepDive: "Landscaping is one of the most variable home services because it encompasses everything from planting a few bushes ($200) to a complete yard redesign ($15,000+). Design fees alone can run $500-$2,500 for a professional landscape architect. The key cost driver is hardscape vs. softscape: installing a paver patio ($15-$30/sq ft) costs dramatically more than planting a flower bed ($5-$15/sq ft) because of the materials, base preparation, and skilled labor involved. Many homeowners are shocked by the cost of soil amendment, grading, and drainage work — the invisible preparation that determines whether plants survive long-term.",
    commonMistakes: [
      "Planting without considering mature size — a cute 3-foot shrub that grows to 15 feet will cause problems in 5 years",
      "Ignoring drainage and grading — water pooling near the foundation leads to basement leaks and structural damage",
      "Over-planting for instant impact — plants need room to grow; dense planting leads to overcrowding and disease",
      "Not choosing plants suited to your USDA hardiness zone and sun exposure — wrong plant, wrong place is the #1 cause of landscape failure",
      "Skipping irrigation planning — hand-watering works for a few plants but is unsustainable for full landscape projects"
    ],
    diyVsHire: {
      canDiy: [
        "Planting flowers, ground covers, and small shrubs",
        "Mulching garden beds (save $2-4/sq ft in labor)",
        "Edging along walks and driveways",
        "Installing simple drip irrigation with a kit",
        "Seasonal cleanup and pruning of small plants"
      ],
      mustHire: [
        "Grading and drainage work (affects your home's foundation)",
        "Retaining walls over 2 feet tall (engineering and code requirements)",
        "Paver patio and walkway installation (base preparation is critical)",
        "Tree planting for specimens over 2-inch caliper",
        "Irrigation system design and installation"
      ],
      verdict: "Planting and mulching are the most rewarding DIY projects — the learning curve is gentle and mistakes are fixable. But hardscaping, grading, and large tree work require professional skills, tools, and often permits."
    },
    glossary: [
      { term: "Hardscape", definition: "Non-living elements: patios, walkways, retaining walls, fire pits. More expensive to install but essentially permanent." },
      { term: "Softscape", definition: "Living elements: plants, trees, shrubs, grass. Ongoing maintenance required but can be changed over time." },
      { term: "Caliper", definition: "How trees are measured for pricing — the trunk diameter at 6 inches above ground. A 3-inch caliper tree is significantly more expensive than a 1.5-inch." },
      { term: "Hardiness Zone", definition: "USDA classification based on average minimum winter temperature. Determines which plants can survive in your area. Critical for perennial selections." }
    ],
    scenarios: [
      { title: "Foundation Planting", description: "Remove overgrown shrubs and replant the front of the house with appropriate-sized plants and fresh mulch.", priceContext: "Total: $1,500-$4,000 for a typical front bed (materials + labor)" },
      { title: "Paver Patio", description: "Install a 300 sq ft paver patio with a proper gravel base, edge restraints, and polymeric sand joints.", priceContext: "Total: $4,500-$9,000 ($15-$30 per sq ft)" },
      { title: "Full Backyard Design", description: "Professional design, grading, patio, planting beds, irrigation, and sod. Complete transformation.", priceContext: "Total: $10,000-$30,000+ — highly variable based on scope and materials" }
    ]
  },

  "lawn-mowing": {
    pricingDeepDive: "Lawn mowing is the most commoditized home service, which makes it both affordable and hard to compare. Pricing is per visit based on lot size: a standard 1/4 acre lot runs $30-$60 per mow. The value differences between providers are subtle but significant: does the price include edging along sidewalks and beds? Trimming around obstacles? Blowing off hard surfaces? The cheapest services often skip these details. Weekly vs. biweekly scheduling also affects the per-visit price — biweekly costs 10-20% more per visit because taller grass takes longer and creates more clippings.",
    commonMistakes: [
      "Choosing the cheapest service without confirming what's included (edging, trimming, and blowing are sometimes extras)",
      "Cutting grass too short — 'scalping' damages the lawn and promotes weed growth. Most grass types need 3-4 inches.",
      "Mowing on a fixed schedule regardless of growth rate — grass grows faster in spring and slows in summer heat",
      "Not comparing weekly vs. biweekly pricing — weekly service keeps the lawn healthier and costs only slightly more per month",
      "Hiring a solo operator with no insurance — if they're injured on your property, you could be liable"
    ],
    diyVsHire: {
      canDiy: [
        "Mowing your own lawn (if you have the time, equipment, and physical ability)",
        "Spot-treating weeds with targeted herbicide",
        "Overseeding thin areas in fall"
      ],
      mustHire: [
        "Large properties (1/2 acre+) where time and equipment costs make DIY impractical",
        "Lawns requiring commercial-grade mowing equipment for quality results",
        "Properties with steep slopes or challenging terrain"
      ],
      verdict: "Lawn mowing is the classic DIY-or-hire decision. If mowing is exercise you enjoy and you have a good mower, do it yourself. If it's a chore taking your weekend, professional service at $120-$200/month is one of the best convenience buys in home ownership."
    },
    glossary: [
      { term: "Edging", definition: "Creating a clean vertical cut along sidewalks, driveways, and bed borders. The difference between a 'mowed' and 'manicured' lawn." },
      { term: "String Trimming", definition: "Using a trimmer (weed whacker) to cut grass around obstacles the mower can't reach — fences, trees, posts." },
      { term: "Mulching vs. Bagging", definition: "Mulching chops clippings fine and returns them to the lawn (feeds it). Bagging collects clippings (cleaner look, more waste)." },
      { term: "Scalping", definition: "Cutting grass too short, exposing the brown stems and soil. Stresses the lawn, promotes weeds, and looks terrible." }
    ],
    scenarios: [
      { title: "Small Urban Lot", description: "1/8 acre lot, weekly mowing with edging and blowing. No obstacles.", priceContext: "Per visit: $25-$45. Monthly: $100-$180" },
      { title: "Standard Suburban", description: "1/4 acre lot, weekly mowing including edging, trimming around fence and beds, blowing walkways.", priceContext: "Per visit: $35-$60. Monthly: $140-$240" },
      { title: "Large Property", description: "3/4 acre lot with multiple garden beds, a fence line, and several trees. Weekly service.", priceContext: "Per visit: $60-$100. Monthly: $240-$400" }
    ]
  },

  "leaf-removal": {
    pricingDeepDive: "Leaf removal pricing depends on two things: volume and destination. A yard with one or two moderate trees might need $100-$200 for a full cleanup. A property surrounded by mature oaks or maples that drop leaves for 6 weeks can cost $300-$800 for the season. The disposal method significantly affects pricing — if leaves can be mulched in place or blown into a wooded area, costs are lower. If they need to be bagged and hauled to a municipal composting facility, the labor for collection and disposal doubles the price. Some municipalities offer free curbside leaf pickup during fall, which can eliminate disposal costs entirely.",
    commonMistakes: [
      "Waiting until all leaves have fallen — this allows wet, matted leaf layers to smother the grass and promote fungal disease",
      "Raking when blowing is 5-10x faster — unless you're doing it for exercise, a leaf blower is worth renting or buying",
      "Not mulching leaves in place when possible — running a mower over a moderate leaf layer returns nutrients to the soil for free",
      "Scheduling too early in fall — many trees don't finish dropping until December in some climates",
      "Ignoring leaves in gutters — clogged gutters cause far more damage than leaves on the lawn"
    ],
    diyVsHire: {
      canDiy: [
        "Mulch-mowing a moderate leaf layer into the lawn",
        "Raking or blowing a small yard with 1-2 trees",
        "Bagging leaves for curbside municipal pickup"
      ],
      mustHire: [
        "Large properties with heavy tree canopy (would take you an entire weekend)",
        "Leaf removal from roofs and gutters at height",
        "Properties where leaves must be hauled off-site (no municipal pickup)"
      ],
      verdict: "For small yards with moderate leaf fall, mulch-mowing is the smartest approach — free, fast, and good for the lawn. For large properties with heavy canopy, professional crews with commercial blowers and vacuum trucks can do in 2 hours what takes a homeowner all weekend."
    },
    glossary: [
      { term: "Mulch Mowing", definition: "Running a mower over fallen leaves to chop them into small pieces that decompose into the lawn. Best when leaf layer is less than 1 inch thick." },
      { term: "Leaf Vacuum", definition: "A truck-mounted vacuum system that sucks leaves from curbside piles. Common in municipal leaf collection programs." },
      { term: "Tarp and Drag", definition: "Raking or blowing leaves onto a tarp and dragging it to the disposal point. The most common method for residential leaf removal." }
    ],
    scenarios: [
      { title: "Light Cleanup", description: "Small suburban yard with two trees. One fall visit to blow, rake, and bag.", priceContext: "Total: $75-$175 for a single visit" },
      { title: "Multi-Visit Season", description: "Property with 6+ mature trees. Three visits over fall season (early, mid, final cleanup).", priceContext: "Total: $300-$600 for the full season" },
      { title: "Heavy Property", description: "1/2 acre lot surrounded by mature hardwoods. Full cleanup including roof and gutter clearing.", priceContext: "Total: $400-$900 for a comprehensive fall cleanup" }
    ]
  },

  "moving-help": {
    pricingDeepDive: "Moving costs break into two categories: labor-only (you rent the truck, they load it) and full-service (truck + labor). Labor-only runs $80-$150/hour for a 2-person crew. Full-service local moves cost $400-$1,500 based on home size. The hidden costs that catch people off guard: long carries (if the truck can't park close, expect $75-$150 extra), flights of stairs ($50-$75 per flight), bulky item surcharges ($50-$150 per piano, safe, or hot tub), and packing materials ($100-$300 if you don't pack yourself). The day of the week matters significantly — Saturday moves cost 20-30% more than mid-week, and month-end is always pricier than mid-month.",
    commonMistakes: [
      "Not getting a binding estimate — a non-binding estimate is just a guess that can increase dramatically on moving day",
      "Booking last-minute during peak season (May-September, month-end) — prices spike 30-50% and good crews are booked out",
      "Not disassembling furniture beforehand — movers charge by the hour, so paying them to take apart IKEA beds wastes money",
      "Forgetting to empty dresser drawers — full drawers make furniture dangerously heavy and drawers can fall open during transport",
      "Not checking mover reviews on FMCSA (federal database) for interstate moves — many 'companies' are brokers, not actual movers"
    ],
    diyVsHire: {
      canDiy: [
        "Packing everything yourself (saves $200-$500 in packing fees)",
        "Disassembling furniture before the movers arrive",
        "Moving boxes and light items to a staging area near the door",
        "Studio or small apartment moves with a rental truck and willing friends"
      ],
      mustHire: [
        "Moving heavy items up or down stairs (injury risk is extremely high)",
        "Anything involving a piano, safe, or gun safe",
        "Interstate moves (federal regulations apply)",
        "Moving from/to high-rise apartments with elevator scheduling requirements"
      ],
      verdict: "Do your own packing and disassembly to save on labor hours, but hire professional movers for the heavy lifting. The injury risk of moving a sofa down stairs or wrestling a refrigerator through a doorway makes professional help a smart investment."
    },
    glossary: [
      { term: "Binding Estimate", definition: "A guaranteed price that won't change unless you add items or services. Always prefer this over a non-binding estimate." },
      { term: "Long Carry", definition: "Extra charge when movers must carry items more than 75-100 feet between the home and the truck. Common with apartments." },
      { term: "Valuation Coverage", definition: "Not insurance — it's the mover's liability for damage. 'Released value' (free, covers $0.60/lb) vs. 'full value' (costs 1-3% of declared value, covers actual cost)." },
      { term: "Bill of Lading", definition: "The contract between you and the mover. Lists every item, the agreed price, and coverage. Review carefully before signing." }
    ],
    scenarios: [
      { title: "Studio Move", description: "Studio apartment to another in the same city. Light furniture, 30 boxes. 2-person crew.", priceContext: "Total: $300-$600 for 3-4 hours of labor with truck" },
      { title: "3-Bedroom House", description: "Average suburban home, local move within the same metro. 3-person crew.", priceContext: "Total: $800-$1,800 (6-10 hours depending on distance and stair situation)" },
      { title: "Full-Service with Packing", description: "4-bedroom house, movers pack everything, load, transport, and unpack at destination.", priceContext: "Total: $2,500-$5,000+ for a full-service local move" }
    ]
  },

  "painting": {
    pricingDeepDive: "Painting cost is 80-90% labor. A gallon of premium paint ($40-$60) covers 350-400 sq ft, so materials for a room are $80-$120. The labor to prep, prime, and paint that room is $300-$600. This is why painter pricing varies so much — it's mostly about how fast and precise the crew is. The real cost differentiator is prep work: a room with clean, smooth walls takes 30% less time than one with peeling paint, water stains, or textured surfaces that need skimming. Exterior painting costs 2-3x more than interior because of scaffolding, weather constraints, and more extensive prep (scraping, caulking, priming bare wood).",
    commonMistakes: [
      "Skimping on prep to save money — paint over a poor surface fails in 2-3 years instead of lasting 7-10",
      "Buying cheap paint to save $20/gallon — premium paint covers better (fewer coats), lasts longer, and looks better. The labor savings alone offset the paint cost",
      "Not asking how many coats are included — going from white to white is 1-2 coats; going from dark to light is 3+",
      "Choosing colors from tiny paint chips — always buy a sample quart and paint a test patch on the actual wall in different lighting",
      "Ignoring exterior paint maintenance — small touch-ups prevent $5,000+ full repaints by catching peeling early"
    ],
    diyVsHire: {
      canDiy: [
        "Painting a single room (walls only, not trim or ceiling)",
        "Touch-up painting on existing surfaces",
        "Staining a deck or fence (flat surfaces, forgiving finishes)",
        "Painting interior doors (remove, lay flat, use a mini roller)"
      ],
      mustHire: [
        "Exterior painting above the first story (ladder/scaffold safety)",
        "Rooms with high ceilings, complex trim, or multiple colors",
        "Cabinet painting (requires spraying equipment for a factory finish)",
        "Lead paint situations (pre-1978 homes require EPA RRP certification)"
      ],
      verdict: "Painting a room is one of the most popular DIY projects, and results are usually fine for walls. But cutting-in around trim, painting ceilings, and especially exterior work are where professional skill and equipment make a dramatic difference."
    },
    glossary: [
      { term: "Cut-In", definition: "Painting the edges around trim, corners, and ceiling lines with a brush before rolling the walls. This is where painters earn their money — clean lines here define quality." },
      { term: "Primer", definition: "A preparatory coating that ensures paint adhesion and uniform color. Essential over bare surfaces, stains, dark colors, and patched areas." },
      { term: "Sheen", definition: "Paint finish level: flat (hides imperfections), eggshell (slight sheen, wipeable), satin (good for kitchens/baths), semi-gloss (trim and doors), high-gloss (accent and moisture areas)." },
      { term: "Mil Thickness", definition: "The wet film thickness of paint. Professional painters measure this to ensure adequate coverage. One coat of quality paint should be about 4 mils wet." }
    ],
    scenarios: [
      { title: "Single Room", description: "Standard 12×14 bedroom with 8-foot ceilings. Two coats, walls only, light over light.", priceContext: "Total: $300-$600 (DIY materials only: $60-$100)" },
      { title: "Interior Whole House", description: "2,000 sq ft home, all rooms, walls and ceilings. Doors and trim separate.", priceContext: "Total: $3,000-$7,000 depending on prep needs and number of colors" },
      { title: "Exterior Repaint", description: "2,000 sq ft two-story home. Scrape, prime bare spots, and apply two coats.", priceContext: "Total: $4,000-$10,000 depending on condition and siding type" }
    ]
  },

  "pest-control": {
    pricingDeepDive: "Pest control pricing splits into one-time treatments and ongoing service plans. A one-time treatment for a specific problem (ant colony, wasp nest) runs $150-$400. Ongoing quarterly service (the most common plan) costs $100-$200 per visit or $400-$800/year and covers general pest prevention. Where costs spike is for specific infestations: termite treatment runs $500-$2,500 depending on the method (bait stations vs. liquid barrier), bed bugs cost $300-$1,500 per room (heat treatment is more expensive but more effective than chemical), and wildlife removal (raccoons, squirrels in attics) can run $300-$1,000+ because it involves trapping and exclusion work.",
    commonMistakes: [
      "Waiting until you see pests to call — by the time you see them, the infestation is already established",
      "Using over-the-counter sprays that scatter the colony without eliminating it, making professional treatment harder",
      "Hiring based on price alone — cheap pest control often means fewer follow-up visits and weaker products",
      "Not asking about the warranty — good companies offer free re-treatment if pests return within 30-90 days",
      "Ignoring entry points — exterminating pests inside without sealing how they get in is throwing money away"
    ],
    diyVsHire: {
      canDiy: [
        "Sealing exterior cracks and gaps with caulk and steel wool",
        "Setting snap traps for occasional mice",
        "Applying diatomaceous earth along baseboards for crawling insects",
        "Removing standing water to eliminate mosquito breeding",
        "Keeping food sealed and cleaning up crumbs to prevent attraction"
      ],
      mustHire: [
        "Termite treatment (requires specialized equipment and products)",
        "Bed bug treatment (DIY attempts almost always fail and let them spread)",
        "Wildlife removal (raccoons, bats — may require permits and rabies precautions)",
        "Carpenter ant or wood-boring beetle infestations (structural damage risk)",
        "German cockroach infestations (extremely resistant to consumer products)"
      ],
      verdict: "Prevention is absolutely DIY — sealing entry points and eliminating food sources prevents most pest problems. But once you have an established infestation, professional treatment is almost always necessary. Bed bugs and termites, in particular, are nearly impossible to eliminate without professional help."
    },
    glossary: [
      { term: "IPM", definition: "Integrated Pest Management — a approach that minimizes chemical use by combining sanitation, exclusion, monitoring, and targeted treatment." },
      { term: "Exclusion", definition: "Physically sealing entry points (gaps, cracks, holes) to prevent pests from entering. Often more important than chemical treatment." },
      { term: "Bait Station", definition: "A tamper-resistant container with slow-acting poison that pests carry back to the colony. Used for termites, ants, and rodents." },
      { term: "Heat Treatment", definition: "Raising room temperature to 130-140°F to kill bed bugs at all life stages. More expensive than chemicals but effective in one treatment with no residue." }
    ],
    scenarios: [
      { title: "Ant Treatment", description: "Carpenter ants in kitchen — interior treatment plus exterior barrier spray.", priceContext: "Total: $200-$400 for initial treatment, with $75-$150 follow-up if needed" },
      { title: "Quarterly Service", description: "Year-round prevention plan. Quarterly exterior treatment plus interior as needed.", priceContext: "Total: $400-$800/year ($100-$200 per quarterly visit)" },
      { title: "Bed Bug Elimination", description: "Two bedrooms infested. Heat treatment method (whole-room heating to 130°F+).", priceContext: "Total: $600-$3,000 depending on number of rooms and treatment method" }
    ]
  },

  "pet-sitting": {
    pricingDeepDive: "Pet sitting pricing depends on whether it's drop-in visits, daily walks, or overnight stays. Drop-in visits (30 minutes, feed and let out) run $15-$30 per visit. Dog walks cost $15-$30 for a 30-minute walk. Overnight stays in your home are the premium option at $50-$100 per night — you're paying for someone to sleep at your house and provide round-the-clock care. Holidays (Christmas, July 4th, Thanksgiving) universally carry a 50-100% surcharge. The biggest market shift is app-based platforms (Rover, Wag) competing with traditional pet sitting businesses — apps are usually cheaper but with less vetting and consistency.",
    commonMistakes: [
      "Booking a pet sitter without a meet-and-greet first — personality fit between sitter and pet matters enormously",
      "Not leaving detailed written instructions (medications, feeding schedule, vet info, emergency contacts)",
      "Choosing the cheapest option from an app without checking reviews and verified identity",
      "Not asking about their backup plan — what happens if the sitter gets sick during your trip?",
      "Forgetting to test-run an overnight stay before a long trip — some pets react differently to overnight strangers"
    ],
    diyVsHire: {
      canDiy: [
        "Having a trusted friend or family member check on low-maintenance pets (fish, cats that are independent)",
        "Using automatic feeders and water fountains for short trips (1-2 days max for cats)"
      ],
      mustHire: [
        "Dogs that need regular walks and outdoor time",
        "Pets on medication that requires timing and dosage precision",
        "Multiple pets with different care needs",
        "Trips longer than 48 hours (even independent cats need daily checks)",
        "Puppies, senior dogs, or pets with separation anxiety"
      ],
      verdict: "Cats can manage 1-2 nights with an automatic feeder and a litter box, but any longer needs daily visits. Dogs almost always need at least daily visits, and dogs with separation anxiety or medical needs require overnight care."
    },
    glossary: [
      { term: "Drop-In Visit", definition: "A 20-30 minute visit to feed, give water, and provide basic care. Not a walk — the pet stays home." },
      { term: "Overnight Sitting", definition: "The sitter stays at your home, typically arriving in the evening and staying through the morning. Provides the most continuity for pets." },
      { term: "Bonded and Insured", definition: "A surety bond protects against theft; liability insurance covers pet injuries or property damage during care. Apps like Rover provide basic coverage automatically." },
      { term: "House Sitting", definition: "Similar to pet sitting but includes home care tasks — watering plants, getting mail, adjusting thermostats. A dual-purpose service." }
    ],
    scenarios: [
      { title: "Weekend Away", description: "Cat needs two daily drop-in visits (morning and evening) for 3 days.", priceContext: "Total: $90-$180 for 6 visits" },
      { title: "Vacation Dog Care", description: "Dog needs overnight sitting for 7 nights. Includes walks and playtime.", priceContext: "Total: $350-$700 for the week ($50-$100/night)" },
      { title: "Holiday Pet Sitting", description: "Two dogs and a cat over Christmas week (5 nights). Holiday surcharge applies.", priceContext: "Total: $500-$1,000+ with holiday premium and multi-pet surcharge" }
    ]
  },

  "plumbing": {
    pricingDeepDive: "Plumbing is one of the most expensive home service trades because of licensing requirements, liability, and the fact that mistakes can cause catastrophic water damage. Most plumbers charge a service call fee ($75-$150) plus either hourly ($90-$180/hour) or flat-rate pricing for common jobs. Flat-rate pricing is increasingly common and benefits consumers for standard jobs (faucet replacement, drain clearing) but can be expensive for simple fixes. The material cost variable is huge: a basic chrome faucet is $50 while a touchless Moen Motionsense is $400+. For major work, the biggest cost driver is whether pipes are accessible (exposed in basements) or buried in walls, floors, or underground.",
    commonMistakes: [
      "Using chemical drain cleaners — they damage pipes over time and often don't solve the real problem",
      "Ignoring a slowly dripping faucet — a drip at 1 per second wastes 3,000+ gallons per year",
      "Not knowing where your main water shutoff valve is — this turns a minor leak into a major flood",
      "Hiring based on the lowest bid for water heater installation without asking about code compliance (expansion tanks, pans, seismic straps vary by code)",
      "Flushing 'flushable' wipes — they're the #1 cause of sewer line blockages and they are NOT truly flushable"
    ],
    diyVsHire: {
      canDiy: [
        "Replacing a toilet flapper or fill valve ($10 part, 15-minute fix)",
        "Unclogging a slow drain with a plunger or hand snake",
        "Replacing a showerhead",
        "Installing a new kitchen faucet (if connections are accessible)",
        "Insulating exposed pipes in cold areas"
      ],
      mustHire: [
        "Any work requiring a permit (water heater, re-piping, sewer line)",
        "Gas line connections (requires special licensing beyond plumbing)",
        "Sewer line repair or replacement",
        "Anything behind walls or under slabs",
        "Water heater installation (code requirements are extensive)"
      ],
      verdict: "Basic fixture changes (flappers, showerheads, faucets) are beginner-friendly with YouTube guidance. But anything involving supply lines, drains inside walls, or gas connections should go to a licensed plumber — water damage from a failed connection can cost thousands."
    },
    glossary: [
      { term: "Service Call Fee", definition: "A fixed charge for the plumber to show up and diagnose the problem. Sometimes waived if you hire them for the repair. Covers their travel time and overhead." },
      { term: "Snake/Auger", definition: "A coiled cable tool inserted into drains to break through clogs. Hand snakes for sinks ($20-$40 DIY), motorized for main lines (professional equipment)." },
      { term: "PEX", definition: "Cross-linked polyethylene tubing — the modern standard for residential water supply lines. Flexible, freeze-resistant, and faster to install than copper." },
      { term: "Backflow Preventer", definition: "A device that prevents contaminated water from flowing back into the clean water supply. Required by code in many installations." }
    ],
    scenarios: [
      { title: "Drain Clearing", description: "Kitchen sink draining slowly. Plumber uses a motorized auger to clear a grease buildup.", priceContext: "Total: $150-$350 (service call + 30-60 minutes of work)" },
      { title: "Water Heater Replacement", description: "Replace a 50-gallon gas water heater. Includes new unit, proper venting, expansion tank, and code compliance.", priceContext: "Total: $1,200-$2,500 for a standard tank. Tankless: $2,500-$5,000." },
      { title: "Sewer Line Repair", description: "Camera inspection reveals a broken sewer lateral under the front yard. Requires excavation.", priceContext: "Total: $3,000-$10,000+ depending on depth, length, and whether the city owns part of the line" }
    ]
  },

  "pressure-washing": {
    pricingDeepDive: "Pressure washing pricing is based on surface area and surface type. Driveways and concrete ($0.15-$0.40/sq ft) are the bread and butter — a 600 sq ft driveway runs $100-$250. House siding is more expensive per square foot ($0.25-$0.50) because it requires lower pressure settings, different detergents, and more careful technique to avoid damage. Decks are the trickiest ($0.30-$0.60/sq ft) because wood can be damaged by high pressure. The real difference between a $150 driveway wash and a $350 one is often the detergent and post-treatment: proper pressure washing includes a surfactant pre-soak, appropriate pressure for the surface, and sometimes a post-treatment sealant.",
    commonMistakes: [
      "Using too much pressure on wood siding, softwood decks, or painted surfaces — this gouges the material and forces water behind siding",
      "Not testing pressure on an inconspicuous area first — different surfaces require dramatically different PSI settings",
      "Pressure washing a roof with high pressure — this strips granules from shingles. Roofs should be soft-washed (low pressure + chemicals)",
      "Skipping the detergent pre-soak — pressure alone doesn't kill mold, algae, or mildew. They'll grow back in weeks without chemical treatment",
      "Not protecting landscaping — runoff from detergents can kill plants if not rinsed or pre-soaked with water"
    ],
    diyVsHire: {
      canDiy: [
        "Cleaning a flat concrete driveway or patio with a rented or owned pressure washer",
        "Washing patio furniture, garbage cans, or outdoor toys",
        "Cleaning a first-floor vinyl fence"
      ],
      mustHire: [
        "House siding (wrong technique causes water intrusion behind siding)",
        "Wood decks (too much pressure damages the wood grain permanently)",
        "Second-story surfaces (ladders + pressure washer = dangerous)",
        "Roof cleaning (requires soft-wash technique with specific chemicals)"
      ],
      verdict: "Flat concrete surfaces are a great DIY project — rent a pressure washer for $75-$100/day and do the driveway, patio, and sidewalks. But siding, wood surfaces, and anything above ground level is where professional technique prevents expensive damage."
    },
    glossary: [
      { term: "PSI", definition: "Pounds Per Square Inch — measures water pressure. Consumer washers: 1,500-2,500 PSI. Commercial: 3,000-4,000 PSI. Concrete handles 3,000+ PSI; wood needs under 1,500." },
      { term: "Soft Wash", definition: "Low-pressure cleaning (under 1,000 PSI) using chemical solutions to kill organic growth. Required for roofs, painted surfaces, and delicate materials." },
      { term: "GPM", definition: "Gallons Per Minute — measures water flow volume. Higher GPM means faster cleaning. For residential work, 2.5-4 GPM is typical." },
      { term: "Surface Cleaner", definition: "A circular attachment with spinning nozzles that cleans flat surfaces evenly, avoiding the zebra-stripe pattern of a single wand nozzle." }
    ],
    scenarios: [
      { title: "Driveway Only", description: "600 sq ft concrete driveway with algae staining. Detergent pre-soak and rinse.", priceContext: "Total: $100-$250. DIY rental: $75-$100 for the day" },
      { title: "House Wash", description: "2,000 sq ft two-story vinyl-sided home. Soft wash with surfactant, rinse, and window cleaning.", priceContext: "Total: $250-$500 for the whole house" },
      { title: "Full Property", description: "House wash + driveway + back patio + fence + deck prep for staining.", priceContext: "Total: $500-$1,200 for a comprehensive property cleaning" }
    ]
  },

  "roofing": {
    pricingDeepDive: "Roofing is among the most expensive home services because of the scale of materials, specialized labor, and disposal costs. Material alone for a 2,000 sq ft roof runs $2,000-$4,000 for asphalt shingles, $8,000-$15,000 for standing seam metal, and $15,000-$30,000+ for tile or slate. Labor represents 40-60% of the total and varies by roof complexity — a simple gable roof costs far less per square (100 sq ft) than a hip roof with dormers, valleys, and skylights. The 'tear-off' vs. 'overlay' decision is critical: overlaying new shingles over old saves $1,000-$3,000 but hides damage, adds weight, and may void the warranty. Most roofing professionals recommend tear-off.",
    commonMistakes: [
      "Getting only one quote — roofing bids can vary by $5,000-$10,000 for the same job",
      "Choosing based on price alone — the installation quality matters more than the shingle brand for roof longevity",
      "Not asking about ventilation — poor attic ventilation cooks shingles from below, cutting their lifespan by 25-40%",
      "Ignoring the underlayment — the waterproof barrier under shingles (ice & water shield, synthetic felt) is critical but invisible",
      "Not checking if the contractor carries workers' comp — roofing has the highest injury rate in construction. If an uninsured worker falls on your property, you're liable."
    ],
    diyVsHire: {
      canDiy: [
        "Replacing a few missing or damaged shingles (with proper safety equipment)",
        "Applying roof sealant to small flashing leaks",
        "Cleaning moss or debris from the roof surface",
        "Inspecting the attic for leaks from inside"
      ],
      mustHire: [
        "Any roof replacement project",
        "Structural repairs (decking, rafters, trusses)",
        "Flashing replacement around chimneys, skylights, and vents",
        "Any work above a single-story ranch-style roof",
        "Metal, tile, or flat roof installation (specialized skills)"
      ],
      verdict: "Small shingle repairs on low-pitch, single-story roofs are manageable for confident DIYers. But roof replacement is a professional job — the consequences of poor installation (leaks, wind damage, voided insurance) far outweigh any savings."
    },
    glossary: [
      { term: "Square", definition: "A roofing measurement equal to 100 square feet. A typical home is 20-30 squares. Materials and labor are often quoted per square." },
      { term: "Tear-Off", definition: "Removing all existing shingles and underlayment down to the decking before installing new roofing. More expensive but reveals and addresses any hidden damage." },
      { term: "Ice & Water Shield", definition: "A self-adhering waterproof membrane applied to vulnerable areas (eaves, valleys, around penetrations). Required by code in cold climates." },
      { term: "Drip Edge", definition: "Metal flashing along the roof edges that directs water into gutters and away from fascia boards. Required by most building codes." }
    ],
    scenarios: [
      { title: "Repair", description: "Wind blew off a 10×10 section of shingles. Repair patch with matching shingles.", priceContext: "Total: $300-$700 for a localized repair" },
      { title: "Standard Reroof", description: "2,000 sq ft simple gable roof. Tear-off, new synthetic underlayment, 30-year architectural shingles.", priceContext: "Total: $8,000-$15,000 depending on region and complexity" },
      { title: "Premium Reroof", description: "2,500 sq ft complex hip roof with 2 skylights and a chimney. Standing seam metal.", priceContext: "Total: $20,000-$40,000 — premium materials with a 50+ year lifespan" }
    ]
  },

  "snow-removal": {
    pricingDeepDive: "Snow removal pricing uses two models: per-push (per visit) and seasonal contracts. Per-push costs $30-$75 for a standard driveway per snowfall event, with triggers typically at 2-3 inches. Seasonal contracts run $300-$800 for the winter and guarantee service regardless of how much it snows — a gamble for both parties. Commercial plowing (parking lots) is priced per acre or per push. The hidden variable is ice management: salt application costs $50-$150 per visit on top of plowing, and ice-melting chemicals are increasingly expensive. In heavy-snow regions, the cost of snow removal over a winter can be a significant household expense.",
    commonMistakes: [
      "Not having a contract in place before the first snowfall — scrambling to find a plow during a storm means premium prices and unreliable service",
      "Choosing per-push pricing in a heavy-snow year (or seasonal pricing in a light-snow year) — consider your region's average snowfall",
      "Not specifying trigger depth — does the service come at 2 inches or 4 inches? This dramatically affects the number of visits and cost",
      "Ignoring ice management — clearing snow without applying salt or sand leaves dangerous ice behind",
      "Shoveling snow against the garage door — ice buildup at the base prevents the door from sealing and can freeze it shut"
    ],
    diyVsHire: {
      canDiy: [
        "Shoveling a short driveway and walkways for light snowfall (under 6 inches)",
        "Applying ice melt to steps and walkways",
        "Using a consumer snow blower for a moderate driveway"
      ],
      mustHire: [
        "Long driveways (100+ feet) with heavy or wet snow",
        "Snowfall over 8-10 inches (snow blower territory at minimum)",
        "Elderly or physically limited homeowners (shoveling is the leading cause of heart attacks in winter)",
        "Properties with multiple walkways, steps, and areas requiring salt/sand"
      ],
      verdict: "If you're physically fit and have a short driveway, shoveling light snow is good exercise. But for heavy snowfall, long driveways, or anyone with heart conditions, professional service is worth every penny — snow shoveling causes thousands of emergency room visits annually."
    },
    glossary: [
      { term: "Per-Push", definition: "Pricing per snowfall event (one visit per storm). Usually triggers at a specific depth (e.g., 2 inches). Multiple storms = multiple charges." },
      { term: "Seasonal Contract", definition: "A flat rate for the entire winter season, regardless of snowfall amount. Predictable budgeting, but may cost more in light-snow years." },
      { term: "Trigger Depth", definition: "The minimum snowfall accumulation that activates service. Lower triggers (2 inches) mean more visits and higher total cost than higher triggers (4 inches)." },
      { term: "Windrow", definition: "The ridge of snow left by the plow at the end of the driveway. Clearing this is usually included but ask — it's the heaviest part to shovel if not." }
    ],
    scenarios: [
      { title: "Light Season", description: "Per-push service, 10 events over winter, standard driveway. No salting.", priceContext: "Total: $300-$750 for the season" },
      { title: "Average Season", description: "Seasonal contract for a suburban home. Driveway + walkways + salt application.", priceContext: "Total: $400-$800 seasonal contract" },
      { title: "Heavy Season", description: "20+ snow events, long driveway, salt every visit, roof rake service for ice dams.", priceContext: "Total: $800-$2,000+ — per-push would exceed seasonal contract cost" }
    ]
  },

  "yard-cleanup": {
    pricingDeepDive: "Yard cleanup pricing is largely based on time and debris volume. A standard spring cleanup (raking, debris removal, bed edging, pruning) runs $200-$500 for a typical suburban yard. Fall cleanup with heavy leaf removal costs more due to volume — $300-$800 for properties with many trees. What drives costs up is the level of neglect: a maintained yard needing seasonal cleanup is very different from an overgrown property that hasn't been touched in months or years. Overgrown yards may require a brush hog ($200-$500 for machine work) before regular cleanup can even begin. Debris hauling is often a separate charge if the volume exceeds what fits in the crew's truck.",
    commonMistakes: [
      "Letting fall leaves sit through winter — they mat down, kill grass underneath, and create a much more expensive spring cleanup",
      "Cutting back perennials in fall instead of spring — many perennials provide winter habitat for beneficial insects and birds",
      "Pruning spring-flowering shrubs in early spring (before they bloom) — you'll cut off all the flower buds. Prune immediately after flowering.",
      "Not edging garden beds — this is the single biggest visual improvement and prevents grass from creeping into beds",
      "Dumping yard waste in the trash instead of composting or using municipal green waste collection"
    ],
    diyVsHire: {
      canDiy: [
        "Raking and bagging leaves and small debris",
        "Edging garden beds with a half-moon edger",
        "Pruning small shrubs and dead-heading perennials",
        "Applying pre-emergent weed preventer to beds",
        "Spreading mulch (order by the yard; spreading is the easy part)"
      ],
      mustHire: [
        "Overgrown properties with tall weeds, brush, or invasive plants",
        "Large tree pruning or dead tree removal",
        "Stump grinding",
        "Major bed renovation or soil amendment",
        "Properties where debris volume requires a truck or trailer"
      ],
      verdict: "Seasonal yard cleanup is one of the most satisfying DIY projects — it's physical work with immediately visible results. But if the yard has been neglected for months or involves large-scale brush removal, a professional crew with equipment saves enormous time."
    },
    glossary: [
      { term: "Spring Cleanup", definition: "First-of-season service: raking winter debris, edging beds, pruning dead branches, applying pre-emergent, and first mow of the year." },
      { term: "Fall Cleanup", definition: "End-of-season service: heavy leaf removal, cutting back perennials (selectively), final bed cleanup, and preparing the yard for winter." },
      { term: "Brush Hogging", definition: "Using a heavy-duty rotary mower to cut down tall weeds, brush, and overgrowth. Needed for severely neglected properties before regular maintenance begins." },
      { term: "Green Waste", definition: "Organic yard debris (leaves, branches, grass clippings). Many municipalities offer free curbside collection or composting programs." }
    ],
    scenarios: [
      { title: "Spring Tune-Up", description: "Well-maintained 1/4 acre yard. Rake debris, edge beds, prune dead branches, apply pre-emergent.", priceContext: "Total: $200-$400 for a standard spring cleanup" },
      { title: "Neglected Yard", description: "Overgrown property with 6-inch grass, unedged beds, and dead plant material from two seasons.", priceContext: "Total: $400-$900 for the initial restoration, plus regular maintenance going forward" },
      { title: "Full Seasonal Package", description: "Spring cleanup + fall cleanup + 2 additional bed maintenance visits throughout the season.", priceContext: "Total: $600-$1,500 for the full-year package" }
    ]
  }
};

export function getServiceInsight(serviceKey: string): ServiceInsight | null {
  return insights[serviceKey] || null;
}
