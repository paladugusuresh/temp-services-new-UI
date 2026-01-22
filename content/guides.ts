// content/guides.ts
// Educational hiring guides and tips for each service - adds substantial unique value

export type HiringGuide = {
  serviceKey: string;
  introduction: string;
  beforeYouHire: string[];
  questionsToAsk: { question: string; whyItMatters: string }[];
  redFlags: string[];
  whenToCallPro: string[];
  diyConsiderations: string;
  seasonalTips: { season: string; tip: string }[];
  safetyConsiderations: string[];
  commonMistakes: string[];
  costSavingStrategies: string[];
};

export const HIRING_GUIDES: HiringGuide[] = [
  {
    serviceKey: "appliance-repair",
    introduction: "When a major appliance fails, you're faced with a decision: repair or replace? Understanding the repair process, typical costs, and what to expect from a technician can help you make an informed choice and avoid overpaying for services.",
    beforeYouHire: [
      "Check your appliance's warranty status - manufacturer warranties typically cover 1-2 years, while extended warranties may cover 3-5 years",
      "Note the brand, model number, and serial number of your appliance before calling",
      "Research the common issues for your specific appliance model online",
      "Determine if the repair cost would exceed 50% of a new appliance's price - if so, replacement may be smarter",
      "Check if you have a home warranty that covers appliance repairs"
    ],
    questionsToAsk: [
      { question: "What is your diagnostic fee, and is it waived if I proceed with the repair?", whyItMatters: "Many companies charge $50-100 for diagnosis that may or may not be applied to the repair" },
      { question: "Are you factory-authorized for my appliance brand?", whyItMatters: "Factory-authorized technicians have access to OEM parts and manufacturer training" },
      { question: "What is your warranty on parts and labor?", whyItMatters: "Reputable companies offer 90-day to 1-year warranties on their work" },
      { question: "Do you carry common parts on your truck?", whyItMatters: "This can mean same-day repair vs. waiting for parts to be ordered" }
    ],
    redFlags: [
      "Technician quotes repair without proper diagnosis",
      "No written estimate before starting work",
      "Pressure to decide immediately",
      "Unwilling to provide license or insurance information",
      "Much higher price than other quotes"
    ],
    whenToCallPro: [
      "Gas appliances showing any malfunction (safety hazard)",
      "Refrigerator not cooling (food safety)",
      "Washer leaking significant water",
      "Oven not heating properly",
      "Dishwasher not draining"
    ],
    diyConsiderations: "Many appliance issues have simple fixes like replacing a door gasket, cleaning a filter, or resetting a breaker. Check your owner's manual and manufacturer's troubleshooting guide before calling. YouTube tutorials can help with basic repairs, but leave gas appliances and electrical work to professionals.",
    seasonalTips: [
      { season: "Spring", tip: "Clean refrigerator coils and check A/C before summer heat arrives" },
      { season: "Fall", tip: "Service your furnace and check that heating elements in ovens work before holiday cooking" },
      { season: "Winter", tip: "Keep your water heater maintained - cold weather puts extra demand on it" }
    ],
    safetyConsiderations: [
      "Always unplug appliances before attempting any DIY fixes",
      "Never attempt to repair gas appliances yourself",
      "If you smell gas, leave immediately and call your gas company",
      "Check for recalled appliances at recalls.gov"
    ],
    commonMistakes: [
      "Not checking the warranty before paying for repairs",
      "Choosing the cheapest repair service without checking reviews",
      "Ignoring small problems that become major failures",
      "Repairing an appliance that's not worth fixing"
    ],
    costSavingStrategies: [
      "Buy your own parts if you can identify the issue",
      "Ask if there's a discount for paying in cash",
      "Schedule during off-peak times (weekdays, mid-month)",
      "Bundle multiple appliance repairs into one service call"
    ]
  },
  {
    serviceKey: "electrician",
    introduction: "Electrical work requires proper training and licensing for safety and code compliance. While the cost of hiring a licensed electrician may seem high, the risks of improper electrical work include fire, shock, and insurance claims being denied. Understanding what to expect helps you budget appropriately and ensures you hire a qualified professional.",
    beforeYouHire: [
      "Identify all the electrical issues you want addressed - bundling jobs saves money",
      "Know your electrical panel's capacity and age",
      "Check if your home has aluminum wiring (pre-1972 homes) which requires special handling",
      "Determine if permits will be needed for your project",
      "Clear access to electrical panels and work areas"
    ],
    questionsToAsk: [
      { question: "Are you a licensed and insured electrician?", whyItMatters: "Unlicensed electrical work can void your insurance and create safety hazards" },
      { question: "Will you pull the necessary permits?", whyItMatters: "Permitted work is inspected for safety and protects you when selling the home" },
      { question: "What is your experience with homes of my age/type?", whyItMatters: "Older homes have different wiring that requires specific expertise" },
      { question: "Do you offer a warranty on your work?", whyItMatters: "Quality electricians stand behind their work with at least a 1-year warranty" }
    ],
    redFlags: [
      "No license or won't provide license number to verify",
      "Offers to work without permits to save money",
      "No written estimate or contract",
      "Asks for full payment upfront",
      "Can't explain the work clearly"
    ],
    whenToCallPro: [
      "Frequently tripping breakers",
      "Outlets or switches that are warm to the touch",
      "Burning smell from outlets or panels",
      "Flickering lights throughout the house",
      "Any work involving the electrical panel",
      "Adding new circuits or outlets",
      "GFCI outlets not working in bathrooms or kitchens"
    ],
    diyConsiderations: "In most jurisdictions, homeowners can legally replace light fixtures, outlets, and switches on existing circuits. However, any new circuits, panel work, or outdoor wiring typically requires permits and should be done by licensed electricians. When in doubt, hire a pro - electrical fires cause billions in damage annually.",
    seasonalTips: [
      { season: "Spring", tip: "Check outdoor outlets and lighting before outdoor entertaining season" },
      { season: "Summer", tip: "Ensure your A/C circuit is properly sized to prevent tripping" },
      { season: "Fall", tip: "Inspect exterior lighting and holiday decoration circuits before the season" },
      { season: "Winter", tip: "Space heaters should be on dedicated circuits - have an electrician assess if needed" }
    ],
    safetyConsiderations: [
      "Never work on electrical systems with the power on",
      "Use a voltage tester before touching any wires",
      "Respect the danger - 120V household current can be lethal",
      "If you see sparks, smell burning, or hear buzzing, call a pro immediately"
    ],
    commonMistakes: [
      "Overloading circuits with power strips",
      "Using extension cords as permanent wiring",
      "DIYing work that requires permits",
      "Ignoring intermittent electrical problems"
    ],
    costSavingStrategies: [
      "Bundle multiple small jobs into one service call",
      "Buy your own fixtures (but confirm compatibility first)",
      "Schedule during the electrician's slower season (typically late winter)",
      "Get multiple quotes for large projects"
    ]
  },
  {
    serviceKey: "plumbing",
    introduction: "Plumbing problems range from minor annoyances to major emergencies that can cause thousands in water damage. Knowing when to call a plumber, what questions to ask, and how to prevent common issues can save you money and protect your home. A qualified plumber brings expertise, proper tools, and the ability to diagnose hidden problems.",
    beforeYouHire: [
      "Know where your main water shut-off valve is located",
      "Have a clear description of the problem: when it started, how often it occurs, what you've already tried",
      "Check if multiple fixtures are affected (indicates a main line issue)",
      "Take photos or videos of the problem if possible",
      "Clear the area around the affected fixtures for easy access"
    ],
    questionsToAsk: [
      { question: "What is your service call fee, and does it apply toward repairs?", whyItMatters: "Service call fees range from $50-150 and policies vary" },
      { question: "Are you licensed and insured?", whyItMatters: "Licensed plumbers have training and insurance protects you from liability" },
      { question: "Do you offer emergency services, and what's the upcharge?", whyItMatters: "After-hours rates can be 1.5x to 2x normal rates" },
      { question: "Will you provide a written estimate before starting?", whyItMatters: "Prevents surprise bills and misunderstandings about scope" }
    ],
    redFlags: [
      "Won't provide a written estimate",
      "Diagnoses major problems without proper inspection",
      "Pressure to make immediate decisions",
      "Only accepts cash",
      "No license or insurance"
    ],
    whenToCallPro: [
      "No water or very low water pressure throughout the house",
      "Sewage smell or backup",
      "Water heater leaking or not heating",
      "Frozen pipes (don't try to thaw yourself)",
      "Water coming up from drains",
      "Major leaks you can't stop"
    ],
    diyConsiderations: "Simple tasks like replacing a faucet aerator, plunging a clogged toilet, or tightening a loose showerhead are safe DIY projects. However, avoid using chemical drain cleaners (they damage pipes), and never DIY work that involves the main water line, gas connections, or sewer line.",
    seasonalTips: [
      { season: "Spring", tip: "Check outdoor faucets for freeze damage and inspect hose bibs" },
      { season: "Summer", tip: "Flush your water heater to remove sediment buildup" },
      { season: "Fall", tip: "Disconnect garden hoses and winterize outdoor faucets before the first freeze" },
      { season: "Winter", tip: "Keep cabinet doors open under sinks on exterior walls during cold snaps" }
    ],
    safetyConsiderations: [
      "Know how to shut off water at both the fixture and main valve",
      "Never use open flame to thaw frozen pipes",
      "If you smell gas near a water heater, leave and call the gas company",
      "Standing water near electrical outlets is extremely dangerous"
    ],
    commonMistakes: [
      "Using chemical drain cleaners regularly",
      "Over-tightening connections (causes cracks)",
      "Ignoring small leaks (they always get worse)",
      "Putting grease down the drain"
    ],
    costSavingStrategies: [
      "Group multiple issues into one service call",
      "Request quotes from multiple plumbers for major work",
      "Buy your own fixtures (confirm with plumber first)",
      "Maintain your plumbing to prevent emergencies"
    ]
  },
  {
    serviceKey: "hvac",
    introduction: "Your HVAC system is responsible for your home's comfort and typically represents 40-60% of your energy bill. Regular maintenance can prevent costly breakdowns and extend equipment life by years. Understanding how HVAC systems work and what maintenance they need helps you communicate effectively with technicians and make informed decisions about repairs and replacements.",
    beforeYouHire: [
      "Note the brand, model, and age of your equipment",
      "Describe symptoms clearly: strange noises, uneven cooling, high bills",
      "Check and change your air filter before calling (often fixes airflow issues)",
      "Clear away debris from outdoor units",
      "Gather any previous service records if available"
    ],
    questionsToAsk: [
      { question: "Are you NATE certified?", whyItMatters: "NATE certification indicates advanced training and competency" },
      { question: "What's included in your diagnostic fee?", whyItMatters: "Some fees cover only diagnosis; others include minor repairs" },
      { question: "Is my system under any manufacturer warranty?", whyItMatters: "Good technicians check warranty status and file claims when applicable" },
      { question: "Do you offer maintenance agreements?", whyItMatters: "Annual maintenance plans often include discounts and priority service" }
    ],
    redFlags: [
      "Recommends replacement without thorough diagnosis",
      "Uses scare tactics about safety or refrigerant",
      "Won't explain the diagnosis in understandable terms",
      "Significantly lower or higher than other quotes",
      "Not licensed for HVAC work in your state"
    ],
    whenToCallPro: [
      "System not cooling or heating at all",
      "Strange noises (grinding, squealing, banging)",
      "Ice forming on the outdoor unit or lines",
      "Thermostat not controlling temperature",
      "Unusual odors when system runs",
      "Energy bills suddenly spike"
    ],
    diyConsiderations: "Homeowners should replace air filters monthly, keep outdoor units clear of debris, and ensure vents aren't blocked. You can also clean the area around indoor units and check thermostat batteries. Leave refrigerant handling, electrical work, and any gas furnace repairs to licensed professionals.",
    seasonalTips: [
      { season: "Spring", tip: "Schedule AC maintenance before summer; clean around outdoor unit" },
      { season: "Summer", tip: "Change filters monthly during heavy use; keep thermostat at 78°F when away" },
      { season: "Fall", tip: "Schedule furnace inspection; check CO detectors" },
      { season: "Winter", tip: "Don't block heating vents with furniture; keep emergency heater service numbers handy" }
    ],
    safetyConsiderations: [
      "Never ignore a carbon monoxide detector alarm",
      "Don't close more than 20% of vents (causes system strain)",
      "Keep flammable materials away from furnaces",
      "If you smell gas, leave immediately and call the gas company"
    ],
    commonMistakes: [
      "Neglecting filter changes (causes most AC failures)",
      "Setting thermostat too low (doesn't cool faster)",
      "Closing vents in unused rooms",
      "Skipping annual maintenance"
    ],
    costSavingStrategies: [
      "Sign up for a maintenance plan (discounts on repairs and parts)",
      "Schedule service in spring or fall (off-season rates)",
      "Consider a smart thermostat for energy savings",
      "Get multiple quotes for major repairs or replacement"
    ]
  },
  {
    serviceKey: "house-cleaning",
    introduction: "Professional house cleaning saves time and delivers a level of cleanliness that's hard to achieve on your own. Whether you need recurring service or a one-time deep clean, understanding what's included, how to prepare, and what to expect helps you get the best value and results from your cleaning service.",
    beforeYouHire: [
      "Decide on the level of cleaning you need: standard maintenance, deep clean, or move-in/move-out",
      "Determine your preferred frequency: weekly, bi-weekly, monthly, or one-time",
      "Make a list of any special requests or areas of concern",
      "Note any areas you want avoided or given special attention",
      "Decide if you'll provide cleaning supplies or they should bring their own"
    ],
    questionsToAsk: [
      { question: "What's included in your standard cleaning vs. deep cleaning?", whyItMatters: "Services vary widely; get a detailed checklist" },
      { question: "Are you insured and bonded?", whyItMatters: "Protects you if something is broken or stolen" },
      { question: "Do you bring your own supplies, and are they eco-friendly?", whyItMatters: "Important if you have allergies or prefer green products" },
      { question: "Is it the same cleaner each visit?", whyItMatters: "Consistent cleaners learn your preferences and do better work" }
    ],
    redFlags: [
      "No insurance or bonding",
      "Significantly cheaper than competitors (may cut corners)",
      "Won't provide references",
      "No clear cancellation policy",
      "Poor communication or missed appointments"
    ],
    whenToCallPro: [
      "Before hosting events or guests",
      "After construction or renovation work",
      "Moving in or out of a home",
      "When you're too busy to maintain cleanliness",
      "For deep cleaning that requires special equipment"
    ],
    diyConsiderations: "Many people combine professional cleaning with their own maintenance. Pros are great for deep cleans and hard-to-reach areas, while you handle daily tidying. This hybrid approach saves money while maintaining a clean home.",
    seasonalTips: [
      { season: "Spring", tip: "Book a deep clean to refresh after winter; include windows and blinds" },
      { season: "Summer", tip: "Focus on high-traffic areas and floors if kids are home more" },
      { season: "Fall", tip: "Pre-holiday deep clean; get guest rooms ready" },
      { season: "Winter", tip: "Focus on entryways and floors to manage salt and snow tracked inside" }
    ],
    safetyConsiderations: [
      "Secure valuables and personal items",
      "Note any surfaces that require special care",
      "Inform cleaners of any alarm codes needed",
      "Keep pets secured or inform cleaners of their presence"
    ],
    commonMistakes: [
      "Not decluttering before the cleaner arrives",
      "Expecting deep clean results at standard clean prices",
      "Not communicating priorities clearly",
      "Hovering while they work (distracting and uncomfortable)"
    ],
    costSavingStrategies: [
      "Choose bi-weekly instead of weekly service",
      "Tidy up before they arrive so they can focus on cleaning",
      "Skip add-ons you can do yourself (like making beds)",
      "Ask about discounts for referrals or prepayment"
    ]
  },
  {
    serviceKey: "roofing",
    introduction: "Your roof is your home's first line of defense against the elements. A quality roof installation or repair protects your investment for 20-50 years depending on materials. Understanding roofing terminology, what to expect from contractors, and how to evaluate quotes helps you make this major investment wisely.",
    beforeYouHire: [
      "Understand your current roof: material type, age, and history of repairs",
      "Know your HOA restrictions on roofing materials or colors",
      "Check your homeowner's insurance for storm damage coverage",
      "Research material options: asphalt, metal, tile, slate",
      "Consider your home's structural capacity for heavier materials"
    ],
    questionsToAsk: [
      { question: "Are you licensed, insured, and bonded?", whyItMatters: "Roofing is dangerous; proper insurance protects you from liability" },
      { question: "Who will be doing the actual work?", whyItMatters: "Some companies subcontract; you want to know who's on your roof" },
      { question: "What's your warranty on workmanship vs. materials?", whyItMatters: "Material warranties come from manufacturers; workmanship is on the contractor" },
      { question: "Will you pull all necessary permits?", whyItMatters: "Unpermitted work can cause problems when selling your home" },
      { question: "How do you handle unexpected issues (rotted decking)?", whyItMatters: "Get pricing upfront for potential discoveries" }
    ],
    redFlags: [
      "Requests large upfront payment",
      "Shows up unsolicited after a storm",
      "No physical business address",
      "Pressures you to sign immediately",
      "Offers to waive your insurance deductible"
    ],
    whenToCallPro: [
      "Missing or damaged shingles visible from ground",
      "Leaks appearing in attic or ceiling",
      "Granules accumulating in gutters",
      "Daylight visible through roof boards in attic",
      "Roof is 20+ years old and showing wear",
      "After a major storm with high winds or hail"
    ],
    diyConsiderations: "Minor repairs like replacing a few shingles can be DIY if you're comfortable on ladders and roofs. However, safety is paramount - falls from roofs are a leading cause of home injury deaths. Full replacements and structural repairs should always be left to licensed professionals.",
    seasonalTips: [
      { season: "Spring", tip: "Inspect for winter damage; schedule repairs before rainy season" },
      { season: "Summer", tip: "Best time for installations; good weather and long days" },
      { season: "Fall", tip: "Final inspection before winter; clean gutters and check flashing" },
      { season: "Winter", tip: "Emergency repairs only; avoid installations if possible" }
    ],
    safetyConsiderations: [
      "Never go on your roof in wet or icy conditions",
      "If you must inspect, use a sturdy ladder properly positioned",
      "Wear shoes with good grip; never soft soles",
      "Have someone know you're up there"
    ],
    commonMistakes: [
      "Choosing the lowest bid without understanding why it's lower",
      "Not checking contractor references and past work",
      "Skipping the permit process",
      "Not addressing ventilation issues during replacement"
    ],
    costSavingStrategies: [
      "Schedule in off-peak times (late fall, early spring)",
      "Get multiple detailed quotes to compare",
      "Consider architectural shingles (not much more than 3-tab, lasts longer)",
      "Ask about manufacturer rebates or closeout colors"
    ]
  },
  {
    serviceKey: "painting",
    introduction: "A fresh coat of paint is one of the most cost-effective ways to transform your home's appearance. Whether you're refreshing interiors or protecting your home's exterior, understanding the painting process, surface preparation importance, and how to evaluate painters helps you get professional results that last.",
    beforeYouHire: [
      "Decide on colors and gather samples or swatches",
      "Note all surfaces to be painted: walls, ceilings, trim, doors",
      "Identify wall damage that needs repair before painting",
      "Determine paint quality level you want (good, better, best)",
      "Clear or note large furniture and items that need protection"
    ],
    questionsToAsk: [
      { question: "Is the cost of paint included in your quote?", whyItMatters: "Some quotes are labor-only; paint can add $500-2000 to projects" },
      { question: "What brands and quality of paint do you use?", whyItMatters: "Premium paints last longer and look better" },
      { question: "How many coats are included?", whyItMatters: "Most jobs need primer plus two coats; one coat often shows through" },
      { question: "What preparation work is included?", whyItMatters: "Proper prep (patching, sanding, priming) is crucial for lasting results" }
    ],
    redFlags: [
      "Quote seems too low (likely skimping on prep or paint quality)",
      "Won't provide references from recent jobs",
      "No written contract with scope of work",
      "Asks for more than 1/3 payment upfront",
      "Can't show proof of insurance"
    ],
    whenToCallPro: [
      "Exterior painting (safety and technique)",
      "High ceilings or stairwells requiring scaffolding",
      "Specialty finishes or techniques",
      "Lead paint removal (requires certification)",
      "Large-scale projects with tight timelines"
    ],
    diyConsiderations: "Painting a single room is manageable for most DIYers with proper preparation and patience. Focus on prep work—patching, sanding, taping—as this determines final quality. Use quality rollers and brushes; they make a noticeable difference in finish.",
    seasonalTips: [
      { season: "Spring", tip: "Ideal for exterior painting as temperatures moderate" },
      { season: "Summer", tip: "Interior painting is great when you can open windows for ventilation" },
      { season: "Fall", tip: "Last chance for exterior work before cold weather" },
      { season: "Winter", tip: "Interior-only; exterior paint won't cure properly in cold" }
    ],
    safetyConsiderations: [
      "Use proper ventilation when painting indoors",
      "Low-VOC or zero-VOC paints reduce fumes",
      "Never scrape or sand pre-1978 paint without testing for lead",
      "Use proper ladder safety for high areas"
    ],
    commonMistakes: [
      "Skimping on surface preparation",
      "Choosing paint color from a small chip (always test)",
      "Applying second coat too soon (follow dry times)",
      "Not protecting floors and furniture adequately"
    ],
    costSavingStrategies: [
      "Do your own prep work (patching, sanding, taping)",
      "Move furniture to center of room yourself",
      "Buy paint yourself during sales",
      "Skip ceiling if it's in good condition"
    ]
  },
  {
    serviceKey: "landscaping",
    introduction: "Professional landscaping enhances curb appeal, increases property value, and creates outdoor living spaces for your family. From simple maintenance to complete redesigns, understanding landscape design principles, plant selection, and hardscape options helps you communicate your vision and evaluate proposals effectively.",
    beforeYouHire: [
      "Define your goals: curb appeal, privacy, entertainment space, low maintenance",
      "Know your budget range (landscape projects can vary from $1,000 to $50,000+)",
      "Gather inspiration photos from magazines or Pinterest",
      "Understand your property: sun exposure, soil type, drainage patterns",
      "Check HOA restrictions on landscaping changes"
    ],
    questionsToAsk: [
      { question: "Do you provide a design or just installation?", whyItMatters: "Design services ensure cohesive results and avoid expensive mistakes" },
      { question: "What is your warranty on plants?", whyItMatters: "Many landscapers offer 1-year warranties on plant material" },
      { question: "Who will be doing the actual installation work?", whyItMatters: "Know if it's in-house crews or subcontractors" },
      { question: "Do you include irrigation in your proposal?", whyItMatters: "New plants often need irrigation systems for establishment" }
    ],
    redFlags: [
      "No design phase—just wants to start digging",
      "Can't explain plant selections and their care needs",
      "No references from completed projects",
      "Significantly underpriced (may use low-quality plants)",
      "No written contract with plant and material specifications"
    ],
    whenToCallPro: [
      "Major grade changes or drainage issues",
      "Retaining wall construction",
      "Irrigation system installation",
      "Tree removal or large tree planting",
      "Patio, walkway, or hardscape installation"
    ],
    diyConsiderations: "Planting flowers, mulching beds, and simple garden maintenance are great DIY projects. Even some hardscaping like simple paths or small patios can be DIY. However, grading, drainage, retaining walls, and irrigation typically require professional expertise.",
    seasonalTips: [
      { season: "Spring", tip: "Best time for planting most trees and shrubs; soil is workable" },
      { season: "Summer", tip: "Focus on maintenance; new plantings struggle in heat" },
      { season: "Fall", tip: "Excellent for tree planting and hardscape projects; soil still warm" },
      { season: "Winter", tip: "Planning season; many landscapers offer off-season discounts for spring work" }
    ],
    safetyConsiderations: [
      "Call 811 before any digging to mark utility lines",
      "Use proper lifting techniques for heavy materials",
      "Wear gloves when handling soil and mulch",
      "Be cautious of poison ivy and other toxic plants"
    ],
    commonMistakes: [
      "Planting without considering mature plant size",
      "Not accounting for sun/shade changes",
      "Ignoring drainage patterns",
      "Choosing plants not suited to your climate zone"
    ],
    costSavingStrategies: [
      "Phase the project over multiple seasons",
      "Choose smaller plants (they catch up to larger ones within 2-3 years)",
      "Use more native plants (less maintenance and watering)",
      "Do your own mulching and maintenance"
    ]
  },
  {
    serviceKey: "carpentry",
    introduction: "Carpentry encompasses everything from simple repairs to intricate custom woodwork. Finding the right carpenter depends on the complexity of your project—general carpenters handle framing and basic repairs, while finish carpenters specialize in detailed trim work, cabinetry, and furniture. Understanding what your project requires helps you find the right craftsman at the right price.",
    beforeYouHire: [
      "Define your project scope clearly with measurements and sketches",
      "Determine if you need rough carpentry (structural) or finish carpentry (cosmetic)",
      "Research the type of wood appropriate for your project and climate",
      "Check if your project requires permits (structural work often does)",
      "Get samples or photos of similar work you admire"
    ],
    questionsToAsk: [
      { question: "What type of carpentry do you specialize in?", whyItMatters: "A finish carpenter for trim work differs greatly from a framing carpenter" },
      { question: "Can you show me examples of similar projects?", whyItMatters: "Portfolio photos demonstrate skill level and style" },
      { question: "Do you supply materials or should I purchase them?", whyItMatters: "Some carpenters get contractor discounts; others prefer clients buy materials" },
      { question: "How do you handle changes or additions to the original scope?", whyItMatters: "Understanding change order policies prevents disputes" }
    ],
    redFlags: [
      "No portfolio or examples of previous work",
      "Unwilling to provide references from recent projects",
      "Significantly lower bid than competitors (may indicate shortcuts)",
      "No written contract or vague scope description",
      "Demands large upfront payment"
    ],
    whenToCallPro: [
      "Structural work involving load-bearing walls",
      "Custom cabinetry or built-ins",
      "Stair construction or repair",
      "Crown molding and detailed trim work",
      "Door and window frame installations"
    ],
    diyConsiderations: "Basic repairs like fixing a squeaky stair or replacing a cabinet door are manageable DIY projects. However, finish work requires precision tools and skills—poor cuts or gaps are very visible. Structural carpentry should always be left to professionals as it affects your home's safety and integrity.",
    seasonalTips: [
      { season: "Winter", tip: "Indoor projects are ideal; wood acclimation is important in heated homes" },
      { season: "Spring", tip: "Good time for deck building before summer entertaining season" },
      { season: "Summer", tip: "Outdoor projects like pergolas and fencing are best in dry weather" },
      { season: "Fall", tip: "Complete exterior work before cold weather; schedule interior projects for winter" }
    ],
    safetyConsiderations: [
      "Ensure the carpenter uses proper fall protection for elevated work",
      "Sawdust and noise require proper ventilation and ear protection",
      "Children and pets should be kept away from work areas",
      "Verify electrical outlets are off when working near wiring"
    ],
    commonMistakes: [
      "Not accounting for wood expansion/contraction with humidity changes",
      "Choosing the cheapest bid without verifying quality",
      "Unclear communication about stain/paint finish expectations",
      "Not getting a detailed written quote with material specifications"
    ],
    costSavingStrategies: [
      "Use paint-grade wood instead of stain-grade for painted projects",
      "Consider MDF or plywood for hidden areas",
      "Do your own painting or staining of finished work",
      "Bundle multiple projects together for volume discount"
    ]
  },
  {
    serviceKey: "carpet-cleaning",
    introduction: "Professional carpet cleaning goes far beyond what home vacuum cleaners can achieve, removing deep-seated dirt, allergens, dust mites, and bacteria that accumulate over time. The right cleaning method depends on your carpet type, stain severity, and drying time requirements. Regular professional cleaning extends carpet life and improves indoor air quality.",
    beforeYouHire: [
      "Know your carpet fiber type (wool, nylon, polyester, olefin) as each requires different care",
      "Identify specific stains and when they occurred—older stains are harder to remove",
      "Move small items and breakables before the technician arrives",
      "Vacuum thoroughly beforehand to remove loose debris",
      "Note any areas with pet odors that need special treatment"
    ],
    questionsToAsk: [
      { question: "What cleaning method do you use and why?", whyItMatters: "Hot water extraction is most thorough; dry cleaning is faster but less deep" },
      { question: "How long until the carpet is fully dry?", whyItMatters: "Walking on damp carpet re-soils it; plan accordingly" },
      { question: "Are your technicians certified by the IICRC?", whyItMatters: "Institute of Inspection Cleaning and Restoration Certification indicates proper training" },
      { question: "What's your guarantee on stain removal?", whyItMatters: "Some stains (like bleach or dye) cannot be removed; know what to expect" }
    ],
    redFlags: [
      "Bait-and-switch pricing ('whole house for $99' then expensive add-ons)",
      "High-pressure upselling during the service",
      "No clear answer about cleaning method",
      "Technician rushes through without proper pre-treatment",
      "No written estimate before starting"
    ],
    whenToCallPro: [
      "Visible traffic patterns and matted areas",
      "After water damage or flooding (immediate action prevents mold)",
      "Pet urine odors that persist after DIY cleaning",
      "Before moving into a new home",
      "At least annually for allergy sufferers"
    ],
    diyConsiderations: "Rental carpet cleaners work for maintenance cleaning but lack the power and heat of professional equipment. For spot cleaning, blot (don't rub) stains immediately. DIY is fine for light maintenance but professional deep cleaning 1-2 times per year significantly extends carpet life.",
    seasonalTips: [
      { season: "Spring", tip: "Deep clean after winter to remove salt, sand, and tracked-in debris" },
      { season: "Summer", tip: "Carpets dry faster with AC or fans; good time for steam cleaning" },
      { season: "Fall", tip: "Clean before holiday guests arrive; prepare for indoor season" },
      { season: "Winter", tip: "Expect longer drying times; use fans and keep heat on" }
    ],
    safetyConsiderations: [
      "Ensure cleaning products are pet and child-safe",
      "Adequate ventilation during and after cleaning",
      "Don't walk on damp carpet in regular shoes",
      "Address any mold concerns before cleaning (cleaning can spread spores)"
    ],
    commonMistakes: [
      "Choosing the cheapest service without understanding what's included",
      "Not disclosing pet stains (technicians need to know for proper treatment)",
      "Walking on carpet before it's completely dry",
      "Expecting miracles—some stains and wear are permanent"
    ],
    costSavingStrategies: [
      "Skip unnecessary add-ons like deodorizers for carpets without odors",
      "Get quotes by square footage rather than room count for open floor plans",
      "Ask about discounts for moving furniture yourself",
      "Schedule during off-peak times (winter or mid-week)"
    ]
  },
  {
    serviceKey: "dumpster-rental",
    introduction: "Dumpster rental simplifies large cleanout projects, renovations, and construction debris removal. Choosing the right size dumpster prevents overage fees while ensuring you have adequate capacity. Understanding weight limits, prohibited items, and rental periods helps you avoid unexpected charges and ensures smooth project completion.",
    beforeYouHire: [
      "Estimate your debris volume—when in doubt, size up (it's cheaper than a second dumpster)",
      "Check local regulations about placing dumpsters on streets or driveways",
      "Verify your HOA doesn't restrict dumpster placement or duration",
      "Know what materials you'll be disposing of (some require special handling)",
      "Measure your driveway to ensure the dumpster fits and delivery truck can access"
    ],
    questionsToAsk: [
      { question: "What's included in the rental price?", whyItMatters: "Some include delivery, pickup, and disposal; others charge separately" },
      { question: "What's the weight limit and overage cost per ton?", whyItMatters: "Heavy materials like concrete can quickly exceed limits" },
      { question: "What items are prohibited?", whyItMatters: "Hazardous materials, tires, mattresses often cost extra or are banned" },
      { question: "Can I extend the rental period if needed?", whyItMatters: "Project delays happen; know the daily extension rate upfront" }
    ],
    redFlags: [
      "Unusually low base price with hidden fees",
      "No clear weight limits or vague overage policies",
      "Poor reviews about pickup timing or customer service",
      "Won't provide written contract with all terms",
      "No information about where debris goes (environmental concern)"
    ],
    whenToCallPro: [
      "Kitchen or bathroom renovations generating construction debris",
      "Estate cleanouts or hoarding situations",
      "Roof replacement (shingles are very heavy)",
      "Major landscaping projects with soil or vegetation removal",
      "Decluttering accumulated items from basement, attic, or garage"
    ],
    diyConsiderations: "For small cleanouts, multiple trips to the dump may be cheaper than a dumpster. Calculate your vehicle's capacity and dump fees vs. rental cost. For anything beyond a pickup truck load or two, a dumpster is usually more cost-effective and certainly more convenient.",
    seasonalTips: [
      { season: "Spring", tip: "Book early—spring cleaning season creates high demand" },
      { season: "Summer", tip: "Construction season means fewer available dumpsters; plan ahead" },
      { season: "Fall", tip: "Good time for yard debris removal before winter" },
      { season: "Winter", tip: "Lower demand often means better availability and potentially lower prices" }
    ],
    safetyConsiderations: [
      "Don't overfill—debris should be below the rim for safe transport",
      "Keep children away from dumpsters (climbing hazard)",
      "Place on stable, flat ground to prevent tipping",
      "Use protective boards under dumpster to prevent driveway damage"
    ],
    commonMistakes: [
      "Underestimating debris volume and needing a second dumpster",
      "Not checking weight limits (concrete and roofing are extremely heavy)",
      "Throwing prohibited items in and getting fined",
      "Leaving dumpster too long and incurring daily fees"
    ],
    costSavingStrategies: [
      "Share a dumpster with neighbors doing similar projects",
      "Separate recyclables which may have lower disposal costs",
      "Avoid mixed loads of heavy materials (concrete) with light debris",
      "Return dumpster early if finished ahead of schedule"
    ]
  },
  {
    serviceKey: "garage-door-repair",
    introduction: "Your garage door is likely the largest moving part of your home and sees daily use. When it malfunctions, it can be an inconvenience, security risk, or safety hazard. While some issues are simple fixes, garage door springs and openers can be dangerous—understanding when to DIY and when to call a professional is essential for safety.",
    beforeYouHire: [
      "Note the brand, model, and approximate age of your door and opener",
      "Observe and describe the specific problem (noise type, where it sticks, etc.)",
      "Check if the opener has power and batteries in remotes are fresh",
      "Verify the photo-eye sensors are clean and aligned",
      "Look for visible damage to tracks, springs, or panels"
    ],
    questionsToAsk: [
      { question: "Do you specialize in residential garage doors?", whyItMatters: "Commercial door companies may not be as familiar with residential systems" },
      { question: "Is the service call fee applied to repairs?", whyItMatters: "Many charge $50-100 for diagnosis; some waive it if you hire them" },
      { question: "What's the warranty on springs?", whyItMatters: "Springs have finite cycles; quality springs with good warranties last longer" },
      { question: "Do you carry common parts on your truck?", whyItMatters: "Same-day repair vs. waiting for parts affects your schedule" }
    ],
    redFlags: [
      "Recommends full door replacement for minor issues",
      "Won't provide detailed estimate before starting",
      "Uses scare tactics about safety",
      "Significantly lower price than competitors (may use inferior parts)",
      "Arrives without company identification"
    ],
    whenToCallPro: [
      "Broken torsion or extension springs (extremely dangerous under tension)",
      "Door off track or cables damaged",
      "Opener motor not responding",
      "Door won't stay closed (security issue)",
      "Damaged panels affecting operation"
    ],
    diyConsiderations: "Safe DIY tasks include lubricating tracks and rollers, tightening hardware, replacing remote batteries, and adjusting opener limits. NEVER attempt to repair or replace springs yourself—they're under extreme tension and can cause serious injury or death. The potential savings aren't worth the risk.",
    seasonalTips: [
      { season: "Winter", tip: "Cold weather affects lubricant; use low-temperature grease on metal parts" },
      { season: "Spring", tip: "Check weatherstripping after winter and replace if cracked" },
      { season: "Summer", tip: "Heat can affect opener sensitivity; adjust if door reverses unexpectedly" },
      { season: "Fall", tip: "Prepare for winter by lubricating and testing safety features" }
    ],
    safetyConsiderations: [
      "Never work on or near springs—they can cause severe injury",
      "Disconnect opener before manual operation",
      "Keep hands and fingers away from hinges and joints",
      "Test auto-reverse feature monthly (door should reverse when hitting an object)"
    ],
    commonMistakes: [
      "Ignoring grinding or scraping noises until failure",
      "Attempting spring repairs without training",
      "Using WD-40 instead of proper garage door lubricant",
      "Not getting multiple quotes for major repairs"
    ],
    costSavingStrategies: [
      "Replace both springs when one breaks (the other is likely close to failure)",
      "Annual maintenance prevents costly emergency repairs",
      "Compare repair cost vs. new door for older damaged units",
      "Ask about aftermarket parts (same quality, lower cost than OEM)"
    ]
  },
  {
    serviceKey: "gutter-cleaning",
    introduction: "Clean gutters are essential for protecting your home's foundation, siding, and landscaping from water damage. Clogged gutters can cause ice dams in winter, basement flooding, and even roof damage. While gutter cleaning seems straightforward, working at height with debris and water requires proper safety equipment and technique.",
    beforeYouHire: [
      "Note the linear feet of gutters and number of downspouts",
      "Identify if there are gutter guards (some require removal and reinstallation)",
      "Check accessibility—steep roofs or landscaping can complicate access",
      "Note if there are any known problem areas that overflow",
      "Determine if downspouts are clogged (water pooling at base)"
    ],
    questionsToAsk: [
      { question: "Do you clean from the roof or use ladders?", whyItMatters: "Method affects safety and thoroughness" },
      { question: "Does your price include downspout flushing?", whyItMatters: "Some only clean gutters, not the downspouts that drain them" },
      { question: "Do you remove the debris or leave it in my yard?", whyItMatters: "Full cleanup should be included but verify" },
      { question: "Will you check for damage or sagging during cleaning?", whyItMatters: "Early detection prevents expensive repairs" }
    ],
    redFlags: [
      "Quote given without seeing the property",
      "No mention of insurance or liability coverage",
      "Price seems too low for your home size",
      "No cleanup of debris included",
      "Works alone on high ladders without safety measures"
    ],
    whenToCallPro: [
      "Two-story or higher homes (ladder safety)",
      "Steep roof pitch making access dangerous",
      "Heavily clogged gutters with compacted debris",
      "Gutter guards that need professional removal",
      "Physical limitations that prevent ladder work"
    ],
    diyConsiderations: "Single-story homes with easy ladder access can be DIY-friendly with proper precautions. Use a sturdy extension ladder, have someone spot you, and wear gloves. For two-story homes or steep roofs, the risk often outweighs the savings. Cleaning twice yearly (spring and fall) is typically sufficient.",
    seasonalTips: [
      { season: "Spring", tip: "Clean after seed pods and blossoms have fallen" },
      { season: "Summer", tip: "Check for nests—birds and pests love clogged gutters" },
      { season: "Fall", tip: "Clean after most leaves have fallen; repeat if needed" },
      { season: "Winter", tip: "Clear ice dams carefully; note problem areas for spring gutter work" }
    ],
    safetyConsiderations: [
      "Ladder placement on stable, level ground is critical",
      "Never overreach—move the ladder frequently",
      "Wear gloves for sharp debris and hidden objects",
      "Be aware of power lines near gutters",
      "Wet leaves and roofing are very slippery"
    ],
    commonMistakes: [
      "Only cleaning gutters once a year in heavily treed areas",
      "Ignoring downspout clogs (causes overflow)",
      "Not checking gutters after major storms",
      "Damaging gutters with improper tools"
    ],
    costSavingStrategies: [
      "Bundle with window cleaning for a package discount",
      "Schedule during off-peak times (not right after leaves fall)",
      "Consider gutter guards to reduce cleaning frequency",
      "Set up annual service agreement for discounted rates"
    ]
  },
  {
    serviceKey: "handyman",
    introduction: "A skilled handyman is invaluable for tackling the accumulated small repairs and projects that don't warrant hiring specialized trades. From fixing leaky faucets to assembling furniture to patching drywall, handymen handle the diverse honey-do list items that homeowners often defer. Finding a reliable handyman you trust can save money over hiring specialists for minor work.",
    beforeYouHire: [
      "Create a comprehensive list of all tasks—handymen often offer better rates for multiple items",
      "Prioritize your list in case time runs short",
      "Gather any materials or parts needed (or ask if they provide them)",
      "Take photos of problem areas to share before the visit",
      "Clear the work areas for efficient access"
    ],
    questionsToAsk: [
      { question: "What tasks are outside your scope?", whyItMatters: "Good handymen know their limits—electrical panels and gas lines usually require licensed trades" },
      { question: "Do you charge by the hour or by the job?", whyItMatters: "Per-job quotes prevent surprises; hourly is common for varied tasks" },
      { question: "Do you provide materials or should I?", whyItMatters: "Handymen may charge markup on materials or prefer you supply them" },
      { question: "What's your minimum charge or trip fee?", whyItMatters: "A 2-hour minimum is common; batch tasks to maximize value" }
    ],
    redFlags: [
      "Claims to do licensed trade work (plumbing, electrical, HVAC) without license",
      "No references or online reviews",
      "No insurance or won't verify coverage",
      "Gives quote without seeing the work",
      "Demands cash only or full payment upfront"
    ],
    whenToCallPro: [
      "Any work involving gas lines",
      "Electrical panel or circuit work",
      "Plumbing beyond fixture replacement",
      "Structural modifications",
      "Roof repairs beyond minor patching"
    ],
    diyConsiderations: "Many handyman tasks are DIY-friendly with basic tools and YouTube tutorials: painting, caulking, replacing hardware, and simple repairs. However, handymen bring efficiency—what takes you a weekend they complete in hours. Consider your time's value and tool investment vs. hiring out.",
    seasonalTips: [
      { season: "Spring", tip: "Address exterior repairs before summer heat; interior painting with good ventilation" },
      { season: "Summer", tip: "Outdoor projects, deck repairs, exterior painting" },
      { season: "Fall", tip: "Winterizing tasks—weatherstripping, caulking, storm door installation" },
      { season: "Winter", tip: "Interior projects—shelving, drywall repair, fixture updates" }
    ],
    safetyConsiderations: [
      "Ensure handyman uses proper safety equipment",
      "Keep children and pets away from work areas",
      "Ventilate when using adhesives or paints",
      "Verify utilities are off before fixture work"
    ],
    commonMistakes: [
      "Hiring based on lowest price alone without checking references",
      "Not getting a written estimate for larger jobs",
      "Waiting until you have too many items (quality may suffer if rushed)",
      "Expecting handyman-level rates for licensed trade work"
    ],
    costSavingStrategies: [
      "Batch multiple small tasks into one visit to maximize the trip fee",
      "Provide your own materials to avoid markup",
      "Be flexible on scheduling for better rates",
      "Build a relationship for priority service and consistent pricing"
    ]
  },
  {
    serviceKey: "junk-removal",
    introduction: "Junk removal services handle the heavy lifting, hauling, and proper disposal of unwanted items, from old furniture and appliances to garage and basement cleanouts. Unlike dumpster rental where you do the loading, junk removal crews do all the work. Understanding pricing models and what can be hauled helps you choose the right service and avoid surprises.",
    beforeYouHire: [
      "Take photos of items for accurate quotes",
      "Separate items you're keeping—crews will clear anything not clearly marked",
      "Identify any hazardous materials (chemicals, paint, batteries) that may not be accepted",
      "Check if any items are donation-worthy and if the company donates usable goods",
      "Ensure a clear path from items to where the truck can park"
    ],
    questionsToAsk: [
      { question: "How do you price jobs—by weight, volume, or item?", whyItMatters: "Pricing models vary; volume (truck percentage) is most common" },
      { question: "Do you donate usable items?", whyItMatters: "Eco-conscious customers prefer companies that divert from landfills" },
      { question: "What items can't you take?", whyItMatters: "Hazardous waste, certain electronics, and tires often require special disposal" },
      { question: "Is the quote final or an estimate?", whyItMatters: "On-site quotes are most accurate; phone estimates may change" }
    ],
    redFlags: [
      "Won't provide any price range before arriving",
      "Significantly raises price after starting",
      "No license for hauling or disposal",
      "Unclear about where materials go (illegal dumping is a serious issue)",
      "Demands cash and won't provide receipt"
    ],
    whenToCallPro: [
      "Large items you can't move yourself (furniture, appliances)",
      "Estate cleanouts after a death or move",
      "Post-renovation debris and construction materials",
      "Hoarding situations requiring sensitive handling",
      "Foreclosure or rental property cleanouts"
    ],
    diyConsiderations: "If you have a truck or trailer, local transfer stations charge by weight—often cheaper for small loads. However, your time, vehicle wear, and dump fees add up. For anything beyond a single truckload, professional junk removal is usually more cost-effective and certainly easier.",
    seasonalTips: [
      { season: "Spring", tip: "Spring cleaning season is busy—book ahead for best availability" },
      { season: "Summer", tip: "Good weather for garage and shed cleanouts" },
      { season: "Fall", tip: "Clear out before holiday company arrives" },
      { season: "Winter", tip: "Slower season may mean better pricing and immediate availability" }
    ],
    safetyConsiderations: [
      "Clear pathways for crew safety",
      "Identify and separate hazardous materials",
      "Secure pets during the removal process",
      "Remove valuables from the area being cleared"
    ],
    commonMistakes: [
      "Underestimating volume and being surprised by cost",
      "Not verifying items are actually junk before disposal",
      "Choosing the lowest bidder without checking legitimacy",
      "Disposing of items that could be sold or donated"
    ],
    costSavingStrategies: [
      "Remove easy-to-carry items yourself, leaving only heavy/bulky pieces",
      "Donate or sell items with value before calling junk removal",
      "Get multiple on-site quotes for accurate comparison",
      "Ask about discounts for minimal loads or off-peak scheduling"
    ]
  },
  {
    serviceKey: "lawn-mowing",
    introduction: "Regular lawn mowing is the foundation of a healthy, attractive lawn. Professional mowing services offer consistency, proper equipment, and expertise in cutting height and patterns that promote grass health. Whether you need weekly maintenance or help with an overgrown yard, understanding service options helps you get the best value.",
    beforeYouHire: [
      "Measure your lawn's square footage for accurate quotes",
      "Note obstacles—trees, gardens, slopes, fencing—that affect mowing time",
      "Decide if you want clippings bagged, mulched, or side-discharged",
      "Consider if you want additional services (edging, trimming, blowing)",
      "Check if your HOA has specific lawn height requirements"
    ],
    questionsToAsk: [
      { question: "What's included in your standard mowing service?", whyItMatters: "Some include edging and trimming; others charge separately" },
      { question: "What is your cutting height and can it be adjusted?", whyItMatters: "Cutting too short stresses grass; 3-4 inches is ideal for most lawns" },
      { question: "How often do you sharpen your mower blades?", whyItMatters: "Dull blades tear grass, causing brown tips and disease susceptibility" },
      { question: "What happens if it rains on my scheduled day?", whyItMatters: "Know the rescheduling policy—mowing wet grass can damage lawns" }
    ],
    redFlags: [
      "No consistent schedule or unreliable arrival",
      "Scalps the lawn or leaves obvious patterns of uncut grass",
      "No liability insurance for potential damage",
      "Refuses to adjust cutting height on request",
      "Leaves debris or clippings on driveways and sidewalks"
    ],
    whenToCallPro: [
      "Lawn too large to mow efficiently yourself",
      "Physical limitations prevent pushing a mower",
      "Desire for consistent, professional appearance",
      "Overgrown lawn that needs restoration",
      "Simply value your weekend time more than the cost"
    ],
    diyConsiderations: "A quality walk-behind mower costs $200-500 and lasts years with maintenance. DIY makes sense for small lawns if you have storage and enjoy the exercise. For large lawns, riding mowers cost $1,500-4,000+. Calculate your time value and equipment costs vs. professional service to decide.",
    seasonalTips: [
      { season: "Spring", tip: "Gradual start with higher cuts as grass emerges from dormancy" },
      { season: "Summer", tip: "Keep grass longer (3.5-4 inches) to shade roots and retain moisture" },
      { season: "Fall", tip: "Continue regular mowing; gradually lower height for final cut" },
      { season: "Winter", tip: "Most lawns don't need mowing; one final cleanup cut in late fall" }
    ],
    safetyConsiderations: [
      "Clear lawn of toys, rocks, and debris before mowing",
      "Keep children and pets inside during mowing",
      "Be aware of underground utilities if mowing near edges",
      "Avoid mowing during extreme heat"
    ],
    commonMistakes: [
      "Cutting grass too short (stresses lawn, invites weeds)",
      "Mowing on a fixed schedule rather than by grass height",
      "Mowing wet grass (causes clumping and disease)",
      "Not varying mowing pattern (causes ruts and grain)"
    ],
    costSavingStrategies: [
      "Get quoted for mowing only and handle edging yourself",
      "Annual contracts often have per-visit discounts",
      "Bi-weekly mowing is cheaper but may not maintain optimal appearance",
      "Bundle with seasonal services (leaf removal, aeration) for package discounts"
    ]
  },
  {
    serviceKey: "leaf-removal",
    introduction: "Fall leaf removal prevents matted layers that smother grass, harbor diseases, and create slippery hazards on walkways. Professional leaf removal services use high-powered equipment to efficiently clear even heavily wooded properties. Understanding the difference between blowing, mulching, and hauling helps you choose the right service level.",
    beforeYouHire: [
      "Estimate leaf coverage—light, moderate, or heavy based on tree density",
      "Decide if you want leaves mulched into the lawn, blown to curb, or hauled away",
      "Note if there are garden beds with leaves that should stay or be removed",
      "Check local regulations about leaf burning, curbside pickup, or bagging requirements",
      "Identify any areas where leaves collect heavily (corners, fences)"
    ],
    questionsToAsk: [
      { question: "Do you haul leaves away or blow them to the curb?", whyItMatters: "Some municipalities collect curbside; others don't—haul-away costs more" },
      { question: "How many visits are included if leaves keep falling?", whyItMatters: "One visit may not be enough during peak leaf drop" },
      { question: "Can you mulch leaves into the lawn?", whyItMatters: "Mulched leaves add nutrients; reduces volume but may not fully disappear" },
      { question: "Do you clear beds and gutters too?", whyItMatters: "Comprehensive service vs. lawn-only affects pricing" }
    ],
    redFlags: [
      "No clear answer about disposal method",
      "Quote seems very low for your property size",
      "No insurance mentioned (blowers can throw debris)",
      "Arrives with inadequate equipment for the job",
      "Won't commit to return visits if leaves continue falling"
    ],
    whenToCallPro: [
      "Large property with many mature trees",
      "Physical limitations prevent raking or using a blower",
      "Need fast cleanup before an event or winter",
      "Leaves are too thick for mulching mower to handle",
      "Want leaves hauled away completely"
    ],
    diyConsiderations: "A good leaf blower ($100-300) makes DIY feasible for moderate yards. Raking is good exercise but time-consuming. Mulching mowers chop leaves into tiny pieces that feed your lawn—great for light to moderate coverage. Heavy leaf loads really do require professional equipment for efficient removal.",
    seasonalTips: [
      { season: "Early Fall", tip: "Start early once leaves begin falling; don't wait for full drop" },
      { season: "Peak Fall", tip: "Schedule weekly visits during heaviest leaf drop weeks" },
      { season: "Late Fall", tip: "Final comprehensive cleanup after last leaves have fallen" },
      { season: "Spring", tip: "Spring cleanup removes any leaves that remained over winter" }
    ],
    safetyConsiderations: [
      "Wet leaves are extremely slippery on walkways",
      "Wear ear protection with loud blowers",
      "Check for hidden objects before blowing or mowing",
      "Don't burn leaves without checking local regulations"
    ],
    commonMistakes: [
      "Waiting too long—matted wet leaves kill grass underneath",
      "Blowing leaves onto neighbors' property",
      "Not removing leaves from gutters during the process",
      "Piling leaves near the house foundation (pest habitat)"
    ],
    costSavingStrategies: [
      "Have leaves blown to curb if municipality offers pickup",
      "Mulch-mow light leaf coverage instead of removal",
      "Bundle with fall lawn services or gutter cleaning",
      "Ask about multi-visit packages for heavy leaf seasons"
    ]
  },
  {
    serviceKey: "moving-help",
    introduction: "Whether you're moving across town or just need help with heavy furniture, professional movers bring the muscle, equipment, and expertise to make relocations safer and more efficient. Understanding the difference between full-service movers and labor-only help, plus knowing how to prepare, can significantly affect your experience and costs.",
    beforeYouHire: [
      "Inventory what you're moving—count boxes and list large items",
      "Measure doorways and hallways for large furniture",
      "Decide if you need full-service (packing, loading, transport) or labor-only",
      "Research if you need insurance beyond the mover's basic coverage",
      "Check if your building requires elevator reservations or certificates of insurance"
    ],
    questionsToAsk: [
      { question: "What's included in your quote—labor only or truck too?", whyItMatters: "Labor-only is cheaper but you provide the vehicle; full-service is turn-key" },
      { question: "How do you charge—by hour, weight, or flat rate?", whyItMatters: "Hourly is standard for local; weight-based for long distance" },
      { question: "What's your liability coverage and do you offer additional insurance?", whyItMatters: "Basic coverage is typically 60 cents per pound—inadequate for valuables" },
      { question: "Do you have minimum charges or cancellation fees?", whyItMatters: "Most require 2-4 hour minimums; weather cancellations may have fees" }
    ],
    redFlags: [
      "Significantly lower estimate than competitors (bait and switch)",
      "Demands large deposit before moving day",
      "No written contract or vague terms",
      "Unmarked vehicles or no company identification",
      "Won't provide proof of licensing and insurance"
    ],
    whenToCallPro: [
      "Heavy furniture you can't safely move yourself",
      "Stairs, tight corners, or long carries",
      "Moving valuable or fragile items",
      "Time-sensitive moves where efficiency matters",
      "Long-distance relocations"
    ],
    diyConsiderations: "Renting a truck and doing it yourself is cheaper in direct costs but harder than you expect. You'll need help, proper equipment (dollies, straps, pads), and risk injury or damage. For a studio apartment moving short distance, DIY is feasible. For a household, professional help usually pays for itself in time, safety, and reduced stress.",
    seasonalTips: [
      { season: "Summer", tip: "Peak moving season—book 4-6 weeks ahead; prices are highest" },
      { season: "Fall", tip: "After Labor Day is less busy; kids in school means fewer family moves" },
      { season: "Winter", tip: "Lowest prices and best availability, but weather can cause delays" },
      { season: "Spring", tip: "Growing activity—book ahead; end of month is always busiest" }
    ],
    safetyConsiderations: [
      "Clear pathways of tripping hazards",
      "Secure loose rugs and runners",
      "Keep children and pets away from moving areas",
      "Point out any fragile items or unusual weight items"
    ],
    commonMistakes: [
      "Underestimating how long the move will take (costs more hourly)",
      "Not packing completely before movers arrive",
      "Forgetting to empty dresser drawers (adds weight and risk)",
      "Not labeling boxes clearly for efficient unloading"
    ],
    costSavingStrategies: [
      "Pack everything yourself before movers arrive",
      "Move mid-week or mid-month for lower rates",
      "Declutter before moving—less stuff means lower cost",
      "Get at least three quotes and compare carefully"
    ]
  },
  {
    serviceKey: "pest-control",
    introduction: "Professional pest control addresses infestations that DIY methods can't resolve and provides preventive treatments to keep pests from returning. From rodents and roaches to termites and bed bugs, different pests require different treatment approaches. Understanding pest control methods helps you choose effective, safe solutions for your home.",
    beforeYouHire: [
      "Identify the pest if possible—photos help technicians prepare",
      "Note where you've seen activity (droppings, damage, live pests)",
      "Consider any household members with allergies or sensitivities",
      "Ask about pets and children safety for proposed treatments",
      "Check if you have a termite bond or existing pest control contract"
    ],
    questionsToAsk: [
      { question: "What treatment methods do you use and are they safe for pets/children?", whyItMatters: "Modern pest control has safe options; you should understand what's being applied" },
      { question: "How many treatments are typically needed?", whyItMatters: "Some pests (bed bugs, termites) require multiple treatments; roaches may need ongoing service" },
      { question: "Do you offer a guarantee?", whyItMatters: "Reputable companies re-treat for free if pests return within a certain period" },
      { question: "What do I need to do to prepare?", whyItMatters: "Proper preparation (cleaning, moving items) makes treatment more effective" }
    ],
    redFlags: [
      "High-pressure sales tactics for expensive packages",
      "Won't identify specific treatment chemicals being used",
      "No guarantee or warranty on their work",
      "Demands full payment before any treatment",
      "Uses fear tactics to upsell unnecessary services"
    ],
    whenToCallPro: [
      "Termites (structural damage risk requires professional treatment)",
      "Bed bugs (extremely difficult to eliminate without professional help)",
      "Recurring infestations that DIY can't resolve",
      "Rodents in walls or attic (proper exclusion needed)",
      "Stinging insect nests in dangerous locations"
    ],
    diyConsiderations: "Store-bought sprays work for occasional bugs but not infestations. Bait stations are more effective than sprays for roaches and ants. For serious issues, DIY often wastes money while the problem worsens. Preventive measures like sealing entry points and reducing food sources are effective DIY pest prevention.",
    seasonalTips: [
      { season: "Spring", tip: "Ants and termites swarm; spring is ideal for preventive treatments" },
      { season: "Summer", tip: "Stinging insects are most active; wasps and yellowjackets nest peak" },
      { season: "Fall", tip: "Rodents seek indoor shelter; seal entry points and set traps" },
      { season: "Winter", tip: "Overwintering pests like stink bugs may emerge on warm days" }
    ],
    safetyConsiderations: [
      "Keep children and pets off treated areas until dry",
      "Ventilate well after indoor treatments",
      "Store or cover food and dishes before treatment",
      "Inform technician of any household member sensitivities"
    ],
    commonMistakes: [
      "Waiting too long to address an infestation",
      "Trying DIY for pests that require professional treatment",
      "Canceling service too soon after initial treatment",
      "Not addressing conditions that attract pests (moisture, food access)"
    ],
    costSavingStrategies: [
      "Preventive quarterly service is cheaper than emergency treatments",
      "Address moisture issues that attract pests to reduce ongoing needs",
      "Bundle services (interior + exterior + perimeter) for discounts",
      "Ask about annual prepayment discounts"
    ]
  },
  {
    serviceKey: "pet-sitting",
    introduction: "Whether you're traveling for business or pleasure, professional pet sitting provides peace of mind that your furry family members are safe, comfortable, and well-cared for. Options range from in-home visits to overnight stays to boarding facilities. Understanding what to look for ensures your pet receives the care they deserve.",
    beforeYouHire: [
      "Assess your pet's needs—medical conditions, anxiety, socialization",
      "Decide between in-home care (less stress for pet) vs. boarding (more supervision)",
      "Prepare written instructions for feeding, medications, and routines",
      "Gather vet contact information and authorization for emergency care",
      "Arrange a meet-and-greet before booking"
    ],
    questionsToAsk: [
      { question: "What is your experience with my type of pet?", whyItMatters: "A dog walker may not know how to handle a reactive dog or elderly cat" },
      { question: "Are you insured and bonded?", whyItMatters: "Protects you if something goes wrong in your home or with your pet" },
      { question: "How will you communicate during my trip?", whyItMatters: "Photo updates and check-ins provide peace of mind" },
      { question: "What's your emergency protocol?", whyItMatters: "Know they have a plan if your pet becomes ill or injured" }
    ],
    redFlags: [
      "No meet-and-greet offered or requested",
      "Refuses to provide references from other pet owners",
      "Not insured or bonded",
      "Vague about their experience or training",
      "Doesn't ask detailed questions about your pet's needs"
    ],
    whenToCallPro: [
      "Traveling and want your pet in their home environment",
      "Pets with medical needs requiring medication or special care",
      "Anxious pets who don't do well at boarding facilities",
      "Multiple pets who need to stay together",
      "Need for daily visits when working long hours"
    ],
    diyConsiderations: "Having a friend or family member pet-sit seems cheaper but consider the reliability and their comfort with your pet's needs. Professional pet sitters are accountable, insured, and experienced. For occasional overnight care, trusted neighbors may work; for extended trips or pets with needs, professionals are worth it.",
    seasonalTips: [
      { season: "Summer", tip: "Peak travel season—book well in advance for holidays and vacations" },
      { season: "Fall", tip: "Thanksgiving and holiday travel fills up fast" },
      { season: "Winter", tip: "Holiday season is busiest; book 4-6 weeks ahead" },
      { season: "Spring", tip: "Spring break travel increases demand" }
    ],
    safetyConsiderations: [
      "Secure toxic items, medications, and small objects before sitter visits",
      "Provide clear instructions on doors/gates that must stay closed",
      "Share information about any fear triggers or behavioral issues",
      "Ensure sitter has contact information for you and your vet"
    ],
    commonMistakes: [
      "Not doing a trial visit before a long trip",
      "Forgetting to leave enough food, medication, and supplies",
      "Not providing clear emergency contact and vet authorization",
      "Choosing based on price alone without checking references"
    ],
    costSavingStrategies: [
      "Book regular standing visits for discount rates",
      "Have sitter care for multiple pets at same visit cost",
      "Mid-week travel is often cheaper than weekends",
      "Ask about package deals for extended trips"
    ]
  },
  {
    serviceKey: "pressure-washing",
    introduction: "Pressure washing dramatically improves your home's curb appeal by removing years of built-up dirt, algae, mildew, and stains from surfaces like driveways, siding, and decks. Professional equipment delivers thousands of PSI that home units can't match. Understanding surface requirements prevents damage and ensures optimal results.",
    beforeYouHire: [
      "Identify all surfaces you want cleaned and their materials",
      "Note any damaged areas, loose paint, or fragile surfaces",
      "Check if HOA has restrictions or requirements about exterior cleaning",
      "Clear items away from areas to be cleaned (furniture, plants, vehicles)",
      "Point out areas with heavy staining that may need special treatment"
    ],
    questionsToAsk: [
      { question: "What PSI will you use on each surface?", whyItMatters: "Too much pressure damages wood and siding; too little doesn't clean effectively" },
      { question: "Do you use soft washing for delicate surfaces?", whyItMatters: "Roofs and some siding need low-pressure chemical treatment, not high-pressure water" },
      { question: "Is cleaning solution included?", whyItMatters: "Detergents and treatments improve results and may cost extra" },
      { question: "How do you protect plants and landscaping?", whyItMatters: "Chemicals and runoff can damage vegetation" }
    ],
    redFlags: [
      "Uses the same high pressure on all surfaces",
      "No discussion of surface types or potential damage",
      "Won't provide references or photos of previous work",
      "Arrives with consumer-grade equipment",
      "No mention of protecting landscaping or property"
    ],
    whenToCallPro: [
      "Two-story homes requiring ladder work or extension equipment",
      "Concrete driveways with oil stains or heavy algae",
      "Wood decks needing careful pressure to avoid damage",
      "Roof cleaning (requires soft washing technique)",
      "Pre-painting preparation of exterior surfaces"
    ],
    diyConsiderations: "Consumer pressure washers ($100-400) work for small jobs like patio furniture and walkways. However, they lack the power for heavy staining and the flow rate for efficiency. More importantly, improper technique damages surfaces. Wood and siding are easily damaged by DIY pressure washing.",
    seasonalTips: [
      { season: "Spring", tip: "Clean after pollen season and winter grime; prepare for outdoor entertaining" },
      { season: "Summer", tip: "Ideal conditions for quick drying; schedule before outdoor events" },
      { season: "Fall", tip: "Clean before wet season when algae grows; remove leaf staining" },
      { season: "Winter", tip: "Not recommended—surfaces need to dry and be above freezing" }
    ],
    safetyConsiderations: [
      "Keep distance from electrical outlets and fixtures",
      "Never pressure wash near open windows",
      "Wear closed-toe shoes when surfaces are being cleaned",
      "Cover plants and protect landscaping from chemicals"
    ],
    commonMistakes: [
      "Using too much pressure on wood or vinyl siding",
      "Pressure washing in a pattern that leaves visible lines",
      "Not treating for mold/mildew (it grows back quickly)",
      "Cleaning painted surfaces that will then need repainting"
    ],
    costSavingStrategies: [
      "Bundle multiple surfaces for a package discount",
      "Schedule with neighbors for group pricing",
      "Regular maintenance cleaning costs less than heavy restoration",
      "Get cleaned before painting for prep credit from painters"
    ]
  },
  {
    serviceKey: "snow-removal",
    introduction: "When winter storms hit, reliable snow removal service keeps your home accessible and safe from slip-and-fall liability. Services range from simple driveway plowing to comprehensive packages including walkways, salting, and ice management. Securing a seasonal contract before winter ensures priority service when you need it most.",
    beforeYouHire: [
      "Measure your driveway and walkway areas for accurate quotes",
      "Note obstacles (curbs, landscaping) that plows need to avoid",
      "Decide on trigger depth—do you want service at 2 inches, 4 inches, etc.?",
      "Consider if you need walkway shoveling and salting in addition to plowing",
      "Identify where you want snow piled to avoid blocking sight lines or damaging landscaping"
    ],
    questionsToAsk: [
      { question: "What is your response time after snowfall?", whyItMatters: "Know if you'll be plowed before work or stuck waiting" },
      { question: "Do you offer per-event or seasonal contracts?", whyItMatters: "Seasonal contracts provide budget certainty; per-event may be cheaper in light winters" },
      { question: "Is salt/ice melt included or extra?", whyItMatters: "Ice treatment is essential for safety and often costs additional" },
      { question: "What equipment do you use?", whyItMatters: "Trucks with plow attachments vs. ATV vs. snow blowers affect quality and damage risk" }
    ],
    redFlags: [
      "No contract or written terms",
      "Unrealistic promises about response time",
      "No insurance (equipment can damage property)",
      "Uses equipment too large for your driveway",
      "Piles snow in problematic locations"
    ],
    whenToCallPro: [
      "Long driveways that take hours to shovel",
      "Physical limitations that prevent shoveling safely",
      "Need for reliable clearing for work commute",
      "Commercial liability concerns for walkways",
      "Ice dam or roof snow removal"
    ],
    diyConsiderations: "Snow blowers ($200-2000) are worthwhile investments for average driveways in snowy climates. However, early morning snow before work and heavy/wet snow test even good equipment. The health risk of snow shoveling (heart attacks peak after storms) makes professional service worth considering for anyone with health concerns.",
    seasonalTips: [
      { season: "Fall", tip: "Sign contracts before first snow; best providers fill up early" },
      { season: "Early Winter", tip: "Confirm service after first storm; note any issues immediately" },
      { season: "Winter", tip: "Communicate if going out of town (still need clearing)" },
      { season: "Late Winter", tip: "Watch for ice dam issues on roof; may need separate service" }
    ],
    safetyConsiderations: [
      "Keep walkways clear to prevent slip and fall liability",
      "Don't block fire hydrants with snow piles",
      "Keep exhaust vents clear of snow buildup",
      "Never run snow blower in enclosed garage (CO risk)"
    ],
    commonMistakes: [
      "Waiting until first storm to find a service (all are booked)",
      "Not specifying where snow should be piled",
      "Choosing based only on price without checking reliability",
      "Not having a backup plan for the inevitable missed service"
    ],
    costSavingStrategies: [
      "Share service with neighbors for route discount",
      "Seasonal contract in light-winter years saves over per-event",
      "Handle walkways yourself and contract only for driveway",
      "Multi-year contracts often have locked-in pricing"
    ]
  },
  {
    serviceKey: "yard-cleanup",
    introduction: "Seasonal yard cleanup restores your outdoor space after winter dormancy or fall leaf drop, addressing accumulated debris, dead vegetation, and overgrown areas. Professional cleanup goes beyond what routine maintenance covers, preparing your yard for the growing season or winter dormancy. Understanding what's included helps you communicate expectations clearly.",
    beforeYouHire: [
      "Walk your property and note all areas needing attention",
      "Identify plants you want protected or removed",
      "Decide if you want debris hauled away or placed curbside",
      "Note any specific problem areas (erosion, drainage, overgrowth)",
      "Consider if this should include bed edging, mulching, or pruning"
    ],
    questionsToAsk: [
      { question: "What does your cleanup service include?", whyItMatters: "Services vary widely—some include pruning; others are debris removal only" },
      { question: "Do you haul debris away or leave it?", whyItMatters: "Haul-away is cleaner but costs more than curbside pile" },
      { question: "Can you handle overgrown beds and shrubs?", whyItMatters: "Some cleanups are lawn-focused; others include bed restoration" },
      { question: "Is mulching or bed edging available?", whyItMatters: "Fresh mulch completes the clean look but is typically extra" }
    ],
    redFlags: [
      "Very low quote without seeing the property",
      "Won't clarify what's included",
      "No insurance for property damage",
      "Brings inadequate crew or equipment for the job",
      "Damages plants through careless work"
    ],
    whenToCallPro: [
      "Large property with significant debris accumulation",
      "Spring cleanup after harsh winter",
      "Fall cleanup with heavy leaf coverage",
      "Restoring a neglected or overgrown yard",
      "Physical limitations that prevent intensive yard work"
    ],
    diyConsiderations: "Yard cleanup is very feasible DIY work with basic tools: rake, pruners, wheelbarrow, and bags. The challenge is time and physical effort—a full cleanup can take a weekend or more. If you enjoy yard work, DIY is satisfying. If it feels like a burden, professional cleanup frees your time for things you actually enjoy.",
    seasonalTips: [
      { season: "Spring", tip: "Clear winter debris, cut back perennials, edge beds, apply pre-emergent" },
      { season: "Summer", tip: "Mid-season cleanup for overgrown areas, deadheading, bed maintenance" },
      { season: "Fall", tip: "Leaf removal, cutting back perennials, winterizing beds" },
      { season: "Winter", tip: "Not much cleanup needed; focus on equipment maintenance" }
    ],
    safetyConsiderations: [
      "Watch for hidden hazards in debris (broken glass, metal, nests)",
      "Use gloves and eye protection for brush clearing",
      "Be aware of poison ivy and other harmful plants",
      "Stay hydrated during intensive outdoor work"
    ],
    commonMistakes: [
      "Cutting back perennials before they're fully dormant (fall)",
      "Removing beneficial debris (some leaves can stay in beds)",
      "Not edging beds before mulching",
      "Piling debris where it can damage lawn"
    ],
    costSavingStrategies: [
      "Bundle cleanup with other seasonal services for package discount",
      "Leave debris curbside if municipality collects (cheaper than haul-away)",
      "Do maintenance cleanup yourself; hire for heavy restoration only",
      "Schedule cleanup with regular lawn service for loyalty pricing"
    ]
  }
];

// Get guide by service key
export function getGuideForService(serviceKey: string): HiringGuide | undefined {
  return HIRING_GUIDES.find(g => g.serviceKey === serviceKey);
}
