// content/services.ts
export type Service = {
  key: string;
  name: string;
  unit: string;
  slugCost: string;
  intro: string;
  drivers: string[];
  included: string[];
  notIncluded: string[];
  tips: string[];
};

export const SERVICES: Service[] = [
  {
    key: "appliance-repair",
    name: "Appliance Repair",
    unit: "repair",
    slugCost: "appliance-repair-cost",
    intro: "Appliance repair costs can vary significantly depending on the type of appliance, the severity of the issue, and the brand. Modern appliances with complex electronics often require specialized diagnostics and parts, which can increase the overall price. Whether it's a refrigerator not cooling or a washing machine that won't spin, professional repair services typically charge a diagnostic fee which may be waived if you proceed with the repair.",
    drivers: [
      "Type and brand of appliance (luxury brands cost more)",
      "Cost and availability of replacement parts",
      "Complexity of the electronic control boards",
      "Accessibility of the appliance (built-in vs. freestanding)",
      "Emergency or after-hours service fees",
      "Technician travel time and minimum labor charges"
    ],
    included: [
      "Initial diagnostic and troubleshooting",
      "Labor for the repair work",
      "Standard replacement parts (if quoted)",
      "Testing the appliance after repair"
    ],
    notIncluded: [
      "Major component replacement (compressors, motors) unless specified",
      "Cleaning or maintenance services",
      "Disposal of the old appliance",
      "Electrical or plumbing modifications needed for the repair"
    ],
    tips: [
      "Check your warranty first; many appliances have 1-5 year coverage.",
      "Clean the coils on your refrigerator annually to prevent overheating.",
      "If the repair cost is more than 50% of a new unit, consider replacing it.",
      "Ask if the diagnostic fee is waived if you hire them for the repair."
    ]
  },
  {
    key: "carpentry",
    name: "Carpentry",
    unit: "hour",
    slugCost: "carpentry-cost",
    intro: "Carpentry projects range from simple repairs like fixing a loose step to complex custom work like building built-in bookshelves or installing crown molding. Costs are heavily influenced by the skill level required, the type of wood or materials chosen, and the intricacy of the design. Finish carpentry generally commands a higher rate than rough carpentry due to the precision required for visible surfaces.",
    drivers: [
      "Complexity of the design and cuts required",
      "Type of wood (softwood vs. hardwood vs. exotic)",
      "Site preparation and demolition work",
      "Custom staining, painting, or finishing",
      "Hardware costs (hinges, handles, slides)",
      "Accessibility of the work area"
    ],
    included: [
      "Labor for measuring, cutting, and installation",
      "Basic fasteners (nails, screws, glue)",
      "Setup and cleanup of the workspace",
      "Standard tools and equipment usage"
    ],
    notIncluded: [
      "Cost of lumber and primary materials",
      "Painting or staining (often a separate trade)",
      "Major structural engineering or permits",
      "Debris removal and disposal fees"
    ],
    tips: [
      "Have a clear sketch or photo of what you want before getting quotes.",
      "Ask about the type of wood being used; cheaper isn't always better for longevity.",
      "Ensure the carpenter is insured, especially for structural work.",
      "Save money by painting or staining the finished work yourself."
    ]
  },
  {
    key: "carpet-cleaning",
    name: "Carpet Cleaning",
    unit: "room",
    slugCost: "carpet-cleaning-cost",
    intro: "Professional carpet cleaning revitalizes your home by removing deep-seated dirt, allergens, and stubborn stains that vacuuming can't reach. Pricing is typically based on the number of rooms or total square footage, with additional charges for stairs, hallways, or special treatments. Methods vary from hot water extraction (steam cleaning) to low-moisture encapsulation, each with different drying times and effectiveness.",
    drivers: [
      "Total square footage or number of rooms",
      "Type of cleaning method (steam vs. dry chemical)",
      "Presence of tough stains (pet urine, wine, ink)",
      "Moving heavy furniture",
      "Stairs and difficult-to-access areas",
      "Application of stain protectors (e.g., Scotchgard)"
    ],
    included: [
      "Pre-treatment of high-traffic areas",
      "Standard cleaning of open floor space",
      "Basic spot removal",
      "Grooming the carpet fibers"
    ],
    notIncluded: [
      "Moving large or heavy furniture (beds, dressers)",
      "Specialized pet odor removal treatments",
      "Repair of carpet damage (burns, tears)",
      "Upholstery or rug cleaning"
    ],
    tips: [
      "Vacuum thoroughly before the cleaners arrive to get the best results.",
      "Ask about 'dry time'—steam cleaning can take 6-12 hours to dry.",
      "Move small items and breakables out of the rooms beforehand.",
      "Check for package deals if you need upholstery cleaned too."
    ]
  },
  {
    key: "dumpster-rental",
    name: "Dumpster Rental",
    unit: "week",
    slugCost: "dumpster-rental-cost",
    intro: "Renting a dumpster is essential for large home cleanouts, renovation projects, or landscaping overhauls. The cost is primarily determined by the size of the container (measured in cubic yards), the weight of the debris, and the rental duration. Local regulations may also require permits if the dumpster is placed on a public street, adding to the overall expense.",
    drivers: [
      "Dumpster size (10, 20, 30, or 40 cubic yards)",
      "Weight of the debris (tonnage limits)",
      "Rental duration (daily vs. weekly rates)",
      "Type of debris (construction vs. household vs. heavy fill)",
      "Distance from the rental yard to your location",
      "Municipal permit fees for street placement"
    ],
    included: [
      "Delivery and pickup of the dumpster",
      "A specific weight allowance (e.g., 2 tons)",
      "Standard rental period (usually 7-10 days)",
      "Disposal fees up to the weight limit"
    ],
    notIncluded: [
      "Overage fees for exceeding weight limits",
      "Daily rental extension fees",
      "Prohibited items (tires, batteries, hazardous waste)",
      "Street permits (responsibility of the homeowner)"
    ],
    tips: [
      "Order a size larger than you think you need; overage fees are pricey.",
      "Place plywood under the dumpster wheels to protect your driveway.",
      "Don't fill above the 'fill line' or they may refuse pickup.",
      "Ask about prohibited items to avoid fines (e.g., tires, paint)."
    ]
  },
  {
    key: "electrician",
    name: "Electrician",
    unit: "hour",
    slugCost: "electrician-cost",
    intro: "Hiring a licensed electrician ensures the safety and code compliance of your home's electrical system. Rates are influenced by the electrician's experience level (apprentice vs. master), the complexity of the wiring, and the urgency of the job. Most electricians charge a minimum service call fee to cover travel and the first hour of work, regardless of how small the repair might be.",
    drivers: [
      "Service call or trip charge minimums",
      "Complexity of the wiring or troubleshooting",
      "Need for permits and inspections",
      "Emergency or weekend service rates",
      "Accessibility of wiring (attic, crawlspace, behind walls)",
      "Age and condition of the existing electrical panel"
    ],
    included: [
      "Labor for troubleshooting and installation",
      "Basic electrical supplies (wire nuts, tape)",
      "Testing of circuits for safety",
      "Cleanup of wire strippings and debris"
    ],
    notIncluded: [
      "Cost of fixtures (lights, fans, outlets)",
      "Major materials (conduit, heavy gauge wire)",
      "Drywall repair and painting after access cuts",
      "Permit fees charged by the local municipality"
    ],
    tips: [
      "Bundle multiple small jobs together to save on the service call fee.",
      "Buy your own fixtures (fans, lights) to avoid markup, but check specs first.",
      "Never DIY electrical work unless you are 100% sure; it's a fire hazard.",
      "Ask for a 'Master Electrician' for complex panel work."
    ]
  },
  {
    key: "garage-door-repair",
    name: "Garage Door Repair",
    unit: "repair",
    slugCost: "garage-door-repair-cost",
    intro: "A malfunctioning garage door can be a major inconvenience and a safety hazard. Repair costs depend heavily on the specific component that failed, such as broken springs, snapped cables, or a faulty opener motor. Torsion spring replacement is one of the most common repairs and requires specialized tools and knowledge due to the high tension involved.",
    drivers: [
      "Type of repair (springs, cables, rollers, opener)",
      "Single vs. double door configuration",
      "Quality of replacement parts (standard vs. high-cycle)",
      "Emergency or after-hours service needs",
      "Door material and weight (insulated steel vs. wood)",
      "Opener brand and horsepower requirements"
    ],
    included: [
      "Diagnostic inspection of the door system",
      "Labor for the specific repair",
      "Lubrication and adjustment of moving parts",
      "Safety sensor alignment check"
    ],
    notIncluded: [
      "Replacement of the entire door panels",
      "New garage door opener unit (unless specified)",
      "Remote controls or keypads (often extra)",
      "Structural framing repairs"
    ],
    tips: [
      "Replace both springs at the same time, even if only one breaks.",
      "Lubricate rollers and hinges annually with silicone spray (not WD-40).",
      "Check the safety sensors alignment if the door won't close.",
      "Don't try to repair high-tension springs yourself; it's dangerous."
    ]
  },
  {
    key: "gutter-cleaning",
    name: "Gutter Cleaning",
    unit: "linear_ft",
    slugCost: "gutter-cleaning-cost",
    intro: "Regular gutter cleaning is crucial for preventing water damage to your home's foundation and roof. Pricing is typically calculated based on the total linear footage of the gutters and the number of stories in your home. Factors like steep roof pitches, difficult landscaping access, or the presence of gutter guards can increase the time and risk involved, leading to higher costs.",
    drivers: [
      "Total linear footage of gutters",
      "Number of stories (1-story vs. 2-story vs. 3-story)",
      "Roof pitch and walkability",
      "Amount and type of debris (wet leaves, pine needles)",
      "Presence of gutter guards or screens",
      "Accessibility around the home's perimeter"
    ],
    included: [
      "Removal of debris from gutters",
      "Clearing of downspouts to ensure flow",
      "Bagging and disposal of debris",
      "Basic inspection of gutter condition"
    ],
    notIncluded: [
      "Repair of loose or damaged gutters",
      "Installation of new gutter guards",
      "Underground drain cleaning",
      "Washing the exterior of the gutters (whitening)"
    ],
    tips: [
      "Clean gutters at least twice a year: late spring and late fall.",
      "Install gutter guards if you have many pine trees nearby.",
      "Check downspouts during a rainstorm to ensure water flows away from the house.",
      "Ask the cleaner to inspect for loose brackets while they are up there."
    ]
  },
  {
    key: "handyman",
    name: "Handyman",
    unit: "hour",
    slugCost: "handyman-cost",
    intro: "A handyman is a versatile professional capable of handling a wide range of small to medium-sized home repairs and improvements. Pricing is often hourly, but some charge by the job for standard tasks. The cost varies based on the handyman's skill level, the tools required, and whether the job involves specialized knowledge like minor plumbing or electrical work.",
    drivers: [
      "Scope and variety of tasks",
      "Skill level required (general vs. specialized)",
      "Minimum service charge (e.g., 2-hour minimum)",
      "Travel distance to the job site",
      "Need for specialized tools or ladders",
      "Sourcing and purchasing materials"
    ],
    included: [
      "Labor for general repairs and installation",
      "Basic tools and consumables (screws, nails)",
      "Cleanup of the immediate work area",
      "Advice on maintenance or future repairs"
    ],
    notIncluded: [
      "Cost of materials and supplies",
      "Licensed trade work (major electrical/plumbing)",
      "Permit fees for regulated work",
      "Large-scale debris removal"
    ],
    tips: [
      "Make a 'Honey-Do' list and hire for a half or full day to save money.",
      "Send photos of the tasks beforehand so they bring the right tools.",
      "Buy the materials yourself if you know exactly what is needed.",
      "Clarify if they charge a flat rate or hourly before they start."
    ]
  },
  {
    key: "house-cleaning",
    name: "House Cleaning",
    unit: "hour",
    slugCost: "house-cleaning-cost",
    intro: "House cleaning services offer everything from routine maintenance to deep cleaning and move-out services. Costs are determined by the size of your home, the number of bedrooms and bathrooms, and the level of cleaning required. Recurring services (weekly or bi-weekly) often come with a discounted rate compared to one-time deep cleans.",
    drivers: [
      "Square footage and number of rooms",
      "Type of clean (standard, deep, move-in/move-out)",
      "Frequency of service (weekly, bi-weekly, monthly)",
      "Presence of pets (hair and dander)",
      "Condition of the home (clutter, buildup)",
      "Special requests (oven, fridge, windows)"
    ],
    included: [
      "Dusting, vacuuming, and mopping floors",
      "Cleaning bathrooms (toilets, showers, sinks)",
      "Kitchen surface cleaning",
      "Emptying trash bins"
    ],
    notIncluded: [
      "Washing dishes or laundry (unless requested)",
      "Deep carpet cleaning or shampooing",
      "Exterior window cleaning",
      "Organization or decluttering services"
    ],
    tips: [
      "Declutter surfaces before the cleaners arrive so they can focus on cleaning.",
      "Ask for a checklist of what is included in a 'standard' vs. 'deep' clean.",
      "Lock away valuables and secure pets to avoid accidents.",
      "Consider bi-weekly service for the best balance of cost and cleanliness."
    ]
  },
  {
    key: "hvac",
    name: "HVAC",
    unit: "hour",
    slugCost: "hvac-cost",
    intro: "Your HVAC system is the heart of your home's comfort, and repairs can range from simple capacitor replacements to major compressor failures. Costs are driven by the type of system (furnace, heat pump, boiler), the age of the unit, and the complexity of the diagnosis. Regular maintenance can prevent costly breakdowns, but emergency repairs during peak seasons often carry a premium.",
    drivers: [
      "Type of system (central air, heat pump, ductless mini-split)",
      "Age and condition of the unit",
      "Cost of refrigerant (if a leak is detected)",
      "Emergency or after-hours service calls",
      "Accessibility of the indoor/outdoor units",
      "Warranty status of the equipment"
    ],
    included: [
      "Diagnostic troubleshooting of the system",
      "Labor for repairs and part replacement",
      "Testing system performance (airflow, temperature split)",
      "Basic cleaning of the immediate work area"
    ],
    notIncluded: [
      "Major equipment replacement (new furnace/AC unit)",
      "Ductwork cleaning or modification",
      "Thermostat upgrades (unless specified)",
      "Structural modifications for new equipment"
    ],
    tips: [
      "Change your air filters every 1-3 months to reduce strain on the system.",
      "Schedule maintenance in spring and fall to avoid peak-season wait times.",
      "Check if your utility company offers rebates for high-efficiency upgrades.",
      "Clear debris and bushes from around your outdoor condenser unit."
    ]
  },
  {
    key: "junk-removal",
    name: "Junk Removal",
    unit: "job",
    slugCost: "junk-removal-cost",
    intro: "Junk removal services provide a convenient way to declutter your home without the hassle of renting a dumpster or hauling items yourself. Pricing is typically based on the volume of space your items take up in the truck, with surcharges for heavy materials like concrete or difficult-to-handle items like pianos. Most services aim to recycle or donate items whenever possible.",
    drivers: [
      "Volume of junk (fraction of a truckload)",
      "Weight of heavy materials (dirt, concrete, shingles)",
      "Accessibility (stairs, long carry distance)",
      "Disposal fees for specific items (mattresses, tires)",
      "Hazardous material handling (if accepted)",
      "Labor required for disassembly"
    ],
    included: [
      "Labor to lift and load items from anywhere on the property",
      "Transport to disposal or recycling facilities",
      "Sorting for donation or recycling",
      "Sweeping up the area after removal"
    ],
    notIncluded: [
      "Removal of hazardous waste (paint, chemicals, asbestos)",
      "Demolition work (unless specified)",
      "Packing or boxing of loose items",
      "Cleaning services beyond basic sweeping"
    ],
    tips: [
      "Consolidate items into one pile to potentially lower the labor cost.",
      "Donate usable items yourself to save space in the truck.",
      "Ask if they offer 'curbside pickup' discounts.",
      "Be upfront about heavy items like pianos or hot tubs to get an accurate quote."
    ]
  },
  {
    key: "landscaping",
    name: "Landscaping",
    unit: "hour",
    slugCost: "landscaping-cost",
    intro: "Professional landscaping can transform your outdoor space, increasing curb appeal and property value. Costs vary widely depending on whether you need simple maintenance like mulching and trimming or a complete redesign with new plantings and hardscaping. The price is influenced by the size of the area, the maturity of the plants chosen, and the labor intensity of the design.",
    drivers: [
      "Size of the project area",
      "Cost of plants, trees, and sod",
      "Hardscaping materials (pavers, stone, gravel)",
      "Site preparation and grading requirements",
      "Installation of irrigation or lighting systems",
      "Design and consultation fees"
    ],
    included: [
      "Labor for planting and installation",
      "Soil preparation and amendments",
      "Mulch or ground cover application",
      "Initial watering and care instructions"
    ],
    notIncluded: [
      "Ongoing maintenance (mowing, weeding)",
      "Major excavation or retaining wall engineering",
      "Permit fees for large projects",
      "Utility line marking and relocation"
    ],
    tips: [
      "Use native plants to reduce water and maintenance costs.",
      "Plan your project in phases if you have a limited budget.",
      "Ask for a sketch or 3D design to visualize the result before digging.",
      "Check if your HOA requires approval for landscaping changes."
    ]
  },
  {
    key: "lawn-mowing",
    name: "Lawn Mowing",
    unit: "visit",
    slugCost: "lawn-mowing-cost",
    intro: "Regular lawn mowing is essential for a healthy, manicured yard. Service prices are generally flat rates based on the size of the lawn and the frequency of visits (weekly vs. bi-weekly). Factors like steep hills, many obstacles (trees, flower beds), or overgrown grass that requires double-cutting can increase the price per visit.",
    drivers: [
      "Total lawn square footage",
      "Frequency of service (weekly is usually cheaper per visit)",
      "Terrain difficulty (slopes, uneven ground)",
      "Number of obstacles to trim around",
      "Overgrown grass requiring extra time",
      "Haul-away of clippings vs. mulching"
    ],
    included: [
      "Mowing of all accessible turf areas",
      "String trimming (weed whacking) along edges and obstacles",
      "Blowing clippings off driveways and walkways",
      "Mulching of clippings (standard)"
    ],
    notIncluded: [
      "Fertilization or weed control treatments",
      "Aeration or dethatching",
      "Shrub or hedge trimming",
      "Bagging and removal of clippings (often extra)"
    ],
    tips: [
      "Stick to a weekly schedule in spring/summer for the healthiest grass.",
      "Ask them to change mowing patterns to prevent ruts.",
      "Keep pets and toys off the lawn on service days.",
      "Mulching clippings returns nutrients to the soil and is often free."
    ]
  },
  {
    key: "leaf-removal",
    name: "Leaf Removal",
    unit: "job",
    slugCost: "leaf-removal-cost",
    intro: "Seasonal leaf removal keeps your yard looking tidy and prevents damage to your grass from suffocating layers of wet leaves. Costs are driven by the volume of leaves, the size of the property, and the method of disposal. Vacuum trucks are efficient for curbside pickup, while full-service raking and bagging is more labor-intensive.",
    drivers: [
      "Volume and wetness of leaves",
      "Size of the property and tree coverage",
      "Method of removal (blowing into woods vs. vacuuming vs. bagging)",
      "Accessibility of the yard",
      "Timing (peak season demand)",
      "Disposal fees"
    ],
    included: [
      "Blowing or raking leaves from lawn and beds",
      "Collection and consolidation of debris",
      "Curbside placement or haul-away (depending on service)",
      "Final blow-off of hard surfaces"
    ],
    notIncluded: [
      "Gutter cleaning (often a separate service)",
      "Branch and limb removal",
      "Mowing or other lawn care",
      "City disposal bag costs (if applicable)"
    ],
    tips: [
      "Schedule service before the first snow to avoid matted, wet leaves.",
      "Ask if they offer a discount for blowing leaves into a wooded area.",
      "Wait until most leaves have fallen to avoid paying for multiple visits.",
      "Check if your city offers free leaf vacuuming services."
    ]
  },
  {
    key: "moving-help",
    name: "Moving Help",
    unit: "hour",
    slugCost: "moving-help-cost",
    intro: "Hiring professional movers can significantly reduce the stress and physical strain of relocating. Costs are typically hourly for local moves, based on the number of movers and trucks required. For long-distance moves, pricing is often based on weight and distance. Additional factors like stairs, elevators, and long walking distances to the truck can add to the final bill.",
    drivers: [
      "Number of movers and trucks required",
      "Total hours of labor (for local moves)",
      "Distance between locations",
      "Access difficulty (stairs, elevators, long carry)",
      "Packing services and materials",
      "Handling of specialty items (pianos, safes, artwork)"
    ],
    included: [
      "Labor for loading and unloading",
      "Use of moving blankets and dollies",
      "Disassembly and reassembly of standard furniture",
      "Transportation of goods (if truck is included)"
    ],
    notIncluded: [
      "Packing boxes and tape (unless purchased)",
      "Insurance for full replacement value (valuation coverage)",
      "Tolls and parking permits",
      "Gratuity for the moving crew"
    ],
    tips: [
      "Move on a weekday or mid-month to get lower rates.",
      "Disassemble beds and tables yourself to save billable hours.",
      "Label boxes clearly by room to speed up unloading.",
      "Keep valuables and important documents with you, not in the truck."
    ]
  },
  {
    key: "painting",
    name: "Painting",
    unit: "hour",
    slugCost: "painting-cost",
    intro: "Professional painting refreshes your home's appearance and protects surfaces from wear. Interior painting costs depend on the floor area of the walls, ceiling height, and the amount of prep work needed (patching holes, sanding). Exterior painting is more complex, involving power washing, scraping, and weather-resistant coatings.",
    drivers: [
      "Total wall and ceiling square footage",
      "Condition of walls (holes, cracks, texture)",
      "Ceiling height (requires scaffolding or tall ladders)",
      "Number of colors and accent walls",
      "Type of paint and number of coats",
      "Trim, door, and window frame painting"
    ],
    included: [
      "Labor for surface preparation and painting",
      "Masking and covering of furniture/floors",
      "Minor drywall patching and sanding",
      "Cleanup of paint supplies and debris"
    ],
    notIncluded: [
      "Cost of premium paint (unless included in quote)",
      "Major drywall repair or replacement",
      "Removal of lead-based paint (requires certification)",
      "Moving heavy furniture"
    ],
    tips: [
      "Test paint colors on the wall and view them in different lighting.",
      "Move furniture to the center of the room to save the painter's time.",
      "Ask for 'low-VOC' paints if you are sensitive to fumes.",
      "Verify if the quote includes the cost of the paint itself."
    ]
  },
  {
    key: "pest-control",
    name: "Pest Control",
    unit: "visit",
    slugCost: "pest-control-cost",
    intro: "Pest control services protect your home from unwanted invaders like ants, roaches, rodents, and termites. Costs vary based on the type of pest, the severity of the infestation, and the treatment method used. One-time treatments are available, but quarterly or annual maintenance plans often provide the best value and long-term protection.",
    drivers: [
      "Type of pest (termites and bed bugs are more expensive)",
      "Size of the home and property",
      "Severity of the infestation",
      "Treatment method (chemical, baiting, heat, exclusion)",
      "Frequency of service (one-time vs. quarterly)",
      "Warranty or guarantee length"
    ],
    included: [
      "Inspection of the property for pest activity",
      "Application of treatments to target areas",
      "Placement of traps or bait stations",
      "Recommendations for preventing future infestations"
    ],
    notIncluded: [
      "Structural repairs caused by pest damage",
      "Cleaning of pest waste (unless specified)",
      "Sealing of entry points (exclusion work often extra)",
      "Treatment of unattached structures (sheds, barns)"
    ],
    tips: [
      "Seal cracks and entry points to prevent pests from returning.",
      "Keep food in airtight containers and clean up crumbs immediately.",
      "Ask about pet-safe and eco-friendly treatment options.",
      "Read the warranty carefully—does it cover re-treatment if pests return?"
    ]
  },
  {
    key: "pet-sitting",
    name: "Pet Sitting",
    unit: "day",
    slugCost: "pet-sitting-cost",
    intro: "Pet sitting provides personalized care for your animals in the comfort of their own home. Rates are typically per visit or per night for overnight stays. The cost depends on the number and type of pets, the duration of the visits, and any special medical or dietary needs your pets may have.",
    drivers: [
      "Number and type of pets",
      "Duration of visits (30 min vs. 60 min vs. overnight)",
      "Frequency of visits per day",
      "Special needs (medication administration, puppy care)",
      "Holiday or weekend surcharges",
      "Travel distance for the sitter"
    ],
    included: [
      "Feeding and refreshing water",
      "Dog walking or playtime",
      "Litter box cleaning or waste pickup",
      "Basic home tasks (bringing in mail, watering plants)"
    ],
    notIncluded: [
      "Grooming or bathing services",
      "Training sessions",
      "Veterinary transport (unless arranged)",
      "Supply costs (food, litter)"
    ],
    tips: [
      "Meet the sitter beforehand to ensure they bond with your pet.",
      "Leave detailed instructions for feeding, meds, and emergency contacts.",
      "Book early for holidays as sitters fill up fast.",
      "Ask for daily photo updates for peace of mind."
    ]
  },
  {
    key: "plumbing",
    name: "Plumbing",
    unit: "hour",
    slugCost: "plumbing-cost",
    intro: "Plumbing issues can range from a dripping faucet to a burst pipe, and professional help is often required to prevent water damage. Plumbers typically charge an hourly rate or a flat fee for common jobs. Emergency services outside of regular business hours usually incur a significant premium.",
    drivers: [
      "Complexity of the diagnosis and repair",
      "Accessibility of the pipes (under slab, in walls)",
      "Emergency or after-hours service rates",
      "Cost of fixtures and replacement parts",
      "Need for specialized equipment (camera inspection, jetting)",
      "Permit fees for major work"
    ],
    included: [
      "Labor for diagnosis and repair",
      "Standard plumbing supplies (solder, glue, seals)",
      "Testing of the repair for leaks",
      "Cleanup of the immediate work area"
    ],
    notIncluded: [
      "Cost of new fixtures (toilets, faucets, water heaters)",
      "Drywall or tile repair after access cuts",
      "Water damage restoration services",
      "Septic tank pumping"
    ],
    tips: [
      "Know where your main water shut-off valve is located.",
      "Don't use chemical drain cleaners; they can damage pipes.",
      "Group non-urgent repairs together to save on trip charges.",
      "Ask for a breakdown of parts vs. labor in the quote."
    ]
  },
  {
    key: "pressure-washing",
    name: "Pressure Washing",
    unit: "sq_ft",
    slugCost: "pressure-washing-cost",
    intro: "Pressure washing restores the look of your home's exterior, driveway, and decks by removing grime, mold, and mildew. Pricing is usually based on the square footage of the area to be cleaned. Delicate surfaces like siding or wood decks may require 'soft washing' techniques, which use specialized solutions and lower pressure.",
    drivers: [
      "Total square footage of the area",
      "Type of surface (concrete, vinyl, wood, brick)",
      "Severity of stains (oil, rust, heavy algae)",
      "Accessibility (multi-story homes require ladders/lifts)",
      "Water source availability",
      "Need for specialized cleaning solutions"
    ],
    included: [
      "Application of cleaning agents",
      "Pressure washing or soft washing of surfaces",
      "Rinsing of surrounding plants (protection)",
      "Basic spot treatment"
    ],
    notIncluded: [
      "Sealing or staining of decks/concrete after washing",
      "Repair of damaged siding or mortar",
      "Window cleaning (unless specified)",
      "Gutter cleaning (often a separate add-on)"
    ],
    tips: [
      "Ensure windows and doors are tightly closed before they start.",
      "Ask for 'soft wash' for vinyl siding to prevent damage.",
      "Move outdoor furniture and pots away from the work area.",
      "Check if they use eco-friendly detergents if you have a garden."
    ]
  },
  {
    key: "roofing",
    name: "Roofing",
    unit: "sq_ft",
    slugCost: "roofing-cost",
    intro: "Roofing is a major home investment, whether it's a minor repair or a full replacement. Costs are calculated by the 'square' (100 sq ft area) and depend heavily on the material chosen (asphalt, metal, tile). Steep roof pitches and complex rooflines with many valleys and dormers increase labor costs and safety requirements.",
    drivers: [
      "Roof size (measured in squares)",
      "Material type (asphalt shingles vs. metal vs. slate)",
      "Roof pitch and complexity (steepness)",
      "Number of layers to remove (tear-off)",
      "Accessibility for waste disposal",
      "Ventilation and flashing upgrades"
    ],
    included: [
      "Labor for tear-off and installation",
      "Roofing materials (shingles, underlayment, flashing)",
      "Disposal of old roofing debris",
      "Site cleanup and magnetic nail sweep"
    ],
    notIncluded: [
      "Structural repairs to rafters or decking (if rot is found)",
      "Gutter replacement (unless included)",
      "Skylight replacement (unless included)",
      "Permit fees (usually billed to homeowner)"
    ],
    tips: [
      "Get at least 3 quotes and compare the warranty details.",
      "Ask about 'ice and water shield' for extra leak protection.",
      "Ensure the contractor cleans up nails with a magnet daily.",
      "Check if your home insurance covers storm damage repairs."
    ]
  },
  {
    key: "snow-removal",
    name: "Snow Removal",
    unit: "visit",
    slugCost: "snow-removal-cost",
    intro: "Professional snow removal ensures your driveway and walkways are safe and accessible during winter. Contracts can be per-visit, per-season, or per-inch of snow. Pricing increases with the size of the area to be cleared and the depth of the snowfall. Salting or de-icing is often an additional service.",
    drivers: [
      "Size of driveway and walkways",
      "Amount of snowfall (depth tiers)",
      "Type of contract (seasonal vs. per-push)",
      "Timing requirements (early morning service)",
      "Salting or sanding application",
      "Obstacles and terrain difficulty"
    ],
    included: [
      "Plowing of the driveway",
      "Shoveling of walkways and steps",
      "Piling snow in designated areas",
      "Return visits for heavy storms (contract dependent)"
    ],
    notIncluded: [
      "Roof raking or ice dam removal",
      "Hauling snow off-site",
      "Chipping of thick ice buildup",
      "Repair of lawn damage from plows"
    ],
    tips: [
      "Mark the edges of your driveway with stakes before the snow falls.",
      "Sign a contract early in the season to guarantee service.",
      "Clarify the 'trigger depth' (e.g., 2 inches) for service to start.",
      "Move cars into the garage to allow for full clearing."
    ]
  },
  {
    key: "yard-cleanup",
    name: "Yard Cleanup",
    unit: "job",
    slugCost: "yard-cleanup-cost",
    intro: "A seasonal yard cleanup prepares your landscape for the coming season, whether it's spring preparation or fall winterization. Costs are based on the amount of labor required and the volume of debris to be hauled away. Services often include pruning, weeding, raking, and general tidying of flower beds.",
    drivers: [
      "Size and condition of the yard",
      "Volume of debris to be removed",
      "Overgrown vegetation requiring heavy pruning",
      "Weeding and bed definition needs",
      "Haul-away and disposal fees",
      "Mulch installation (if requested)"
    ],
    included: [
      "Raking and collecting debris",
      "Pruning of shrubs and perennials",
      "Weeding of flower beds",
      "Blowing off hardscapes"
    ],
    notIncluded: [
      "Tree removal or heavy limb work",
      "Gutter cleaning",
      "New planting or landscaping design",
      "Mulch materials (often billed separately)"
    ],
    tips: [
      "Define the scope clearly: 'just leaves' vs. 'weeding and pruning'.",
      "Ask if they can mulch the beds immediately after cleaning.",
      "Check if they recycle the organic waste.",
      "Do a walkthrough after the job to ensure nothing was missed."
    ]
  },
];
