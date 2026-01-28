// content/state-service-tips.ts
// State-specific tips for each service - adds unique value to every page combination

export type StateServiceTip = {
  stateSlug: string;
  serviceKey: string;
  localTips: string[];
  seasonalAdvice: string;
  localConsideration: string;
  averageWaitTime: string;
  bestMonthsToHire: string;
};

// Generate dynamic state-service specific content based on state and service characteristics
export function getStateServiceTips(stateSlug: string, serviceKey: string, stateName: string, serviceName: string): StateServiceTip {
  // Define state categories for generating relevant tips
  const coldWinterStates = ['mi', 'oh', 'il', 'ma', 'pa', 'ny', 'co', 'va'];
  const hotSummerStates = ['tx', 'az', 'fl', 'ga', 'nc'];
  const highCostStates = ['ca', 'ny', 'ma', 'wa'];
  const hurricaneStates = ['fl', 'tx', 'nc', 'ga'];
  const droughtStates = ['ca', 'az', 'co', 'tx'];
  
  const isColdWinter = coldWinterStates.includes(stateSlug);
  const isHotSummer = hotSummerStates.includes(stateSlug);
  const isHighCost = highCostStates.includes(stateSlug);
  const isHurricaneRisk = hurricaneStates.includes(stateSlug);
  const isDroughtProne = droughtStates.includes(stateSlug);

  // Service-specific and state-specific tip generation
  const tips: string[] = [];
  let seasonalAdvice = "";
  let localConsideration = "";
  let averageWaitTime = "3-7 days";
  let bestMonthsToHire = "Spring or Fall";

  // HVAC-related tips
  if (serviceKey === 'hvac') {
    if (isHotSummer) {
      tips.push(`In ${stateName}'s hot climate, schedule AC maintenance in early spring before the summer rush when wait times can exceed 2 weeks`);
      tips.push(`Consider a high SEER-rated unit (16+) to handle ${stateName}'s cooling demands efficiently`);
      seasonalAdvice = `Summer is peak HVAC season in ${stateName}. Emergency calls can cost 50-100% more and involve longer waits.`;
      bestMonthsToHire = "February-April or October-November";
      averageWaitTime = "1-2 weeks in summer, 2-3 days off-season";
    }
    if (isColdWinter) {
      tips.push(`Schedule furnace maintenance in early fall before ${stateName}'s winter heating season begins`);
      tips.push(`Consider a high-efficiency furnace (95%+ AFUE) to manage ${stateName}'s cold winters cost-effectively`);
      seasonalAdvice = `Winter is peak heating season. Schedule fall maintenance to avoid emergency calls when temperatures drop.`;
      bestMonthsToHire = "September-October or April-May";
    }
    localConsideration = `${stateName} HVAC contractors must be licensed. Verify credentials through the state licensing board before hiring.`;
  }

  // Plumbing tips
  if (serviceKey === 'plumbing') {
    if (isColdWinter) {
      tips.push(`In ${stateName}, insulate exposed pipes before winter to prevent costly freeze damage`);
      tips.push(`Know where your main water shut-off valve is located—frozen pipe bursts are common in ${stateName} winters`);
      seasonalAdvice = `Winter freeze events cause emergency plumbing calls to spike. Winterize before the first hard freeze.`;
      bestMonthsToHire = "Early fall for preventive work";
    }
    if (isHotSummer) {
      tips.push(`${stateName}'s hot weather increases water heater demand—consider flushing your tank annually`);
    }
    tips.push(`Ask plumbers about ${stateName}'s local code requirements, which may differ from national standards`);
    localConsideration = `${stateName} requires licensed plumbers for most work. Permits are typically needed for water heater replacements and major repairs.`;
    averageWaitTime = "Same day to 3 days for routine work, immediate for emergencies";
  }

  // Electrician tips
  if (serviceKey === 'electrician') {
    if (isHighCost) {
      tips.push(`Electrician rates in ${stateName} are above average—bundle multiple small jobs to maximize the service call fee`);
    }
    tips.push(`${stateName} requires licensed electricians for most electrical work. Always verify the license is current`);
    if (isHotSummer) {
      tips.push(`Consider upgrading to a 200-amp panel if you're adding an EV charger or major AC unit in ${stateName}`);
    }
    localConsideration = `Electrical permits are strictly enforced in ${stateName}. Unpermitted work can create issues when selling your home.`;
    seasonalAdvice = `Holiday season and summer are busiest. Schedule non-urgent work for late winter/early spring.`;
    bestMonthsToHire = "January-March";
  }

  // Roofing tips
  if (serviceKey === 'roofing') {
    if (isHurricaneRisk) {
      tips.push(`In ${stateName}, consider impact-resistant shingles that may qualify for insurance discounts`);
      tips.push(`Schedule roof inspections before hurricane season (June 1) to address issues early`);
      seasonalAdvice = `Get roof work done before hurricane season. After major storms, wait times can extend to months.`;
      averageWaitTime = "1-2 weeks normally, 2-6 weeks after major storms";
    }
    if (isColdWinter) {
      tips.push(`In ${stateName}, ice dams can cause significant damage—ensure proper attic ventilation`);
      seasonalAdvice = `Late spring through early fall offers the best roofing weather in ${stateName}.`;
      bestMonthsToHire = "May-September";
    }
    if (isHotSummer) {
      tips.push(`Light-colored or reflective roofing can reduce cooling costs significantly in ${stateName}'s climate`);
    }
    localConsideration = `${stateName} building codes specify wind resistance and material requirements. Ensure your contractor pulls proper permits.`;
  }

  // Landscaping tips
  if (serviceKey === 'landscaping') {
    if (isDroughtProne) {
      tips.push(`${stateName}'s water restrictions make drought-tolerant landscaping increasingly popular and practical`);
      tips.push(`Consider xeriscaping or native plants that thrive in ${stateName}'s climate with minimal irrigation`);
      seasonalAdvice = `Fall planting allows roots to establish before summer heat. Avoid major work during water restriction periods.`;
    }
    if (isColdWinter) {
      tips.push(`In ${stateName}, fall is ideal for planting trees and shrubs before winter dormancy`);
      seasonalAdvice = `Spring and fall are prime landscaping seasons in ${stateName}. Contractors book up fast.`;
    }
    if (isHotSummer) {
      tips.push(`Morning watering reduces evaporation in ${stateName}'s heat—smart irrigation systems can help`);
    }
    localConsideration = `Check ${stateName}'s regulations on invasive species before planting. Some popular plants are restricted.`;
    bestMonthsToHire = "March-May or September-November";
    averageWaitTime = "1-3 weeks for major projects";
  }

  // Carpet cleaning tips
  if (serviceKey === 'carpet-cleaning') {
    if (isDroughtProne) {
      tips.push(`In ${stateName}, consider low-moisture cleaning methods to conserve water`);
    }
    tips.push(`Schedule carpet cleaning when windows can be opened—${stateName}'s spring and fall weather is ideal`);
    if (isHotSummer) {
      tips.push(`${stateName}'s summer humidity can extend drying times—ask about dehumidifiers or dry cleaning methods`);
    }
    seasonalAdvice = `Spring cleaning season means higher demand. Book 1-2 weeks in advance during peak times.`;
    localConsideration = `Ask about eco-friendly cleaning solutions that are popular in ${stateName}.`;
    bestMonthsToHire = "Early spring or late fall";
    averageWaitTime = "2-5 days";
  }

  // Painting tips
  if (serviceKey === 'painting') {
    if (isColdWinter) {
      tips.push(`Exterior painting in ${stateName} is best done when temperatures are consistently above 50°F`);
      seasonalAdvice = `Interior painting can be done year-round. Exterior work is limited to late spring through early fall.`;
      bestMonthsToHire = "May-September for exterior, anytime for interior";
    }
    if (isHotSummer) {
      tips.push(`Avoid exterior painting during ${stateName}'s hottest days—paint can dry too quickly and not adhere properly`);
      seasonalAdvice = `Early morning starts help avoid midday heat. Spring and fall offer ideal painting weather.`;
    }
    if (isDroughtProne) {
      tips.push(`${stateName}'s dry climate is actually ideal for exterior painting—low humidity means faster, better drying`);
    }
    localConsideration = `${stateName} VOC regulations may affect paint choices. Ask about low-VOC options.`;
    averageWaitTime = "1-2 weeks for scheduling";
  }

  // Window cleaning tips
  if (serviceKey === 'window-cleaning') {
    if (isDroughtProne) {
      tips.push(`Water spot prevention is especially important in ${stateName}'s hard water areas`);
    }
    if (isHotSummer) {
      tips.push(`Schedule window cleaning for early morning in ${stateName} summers to avoid rapid drying streaks`);
    }
    seasonalAdvice = `Spring and fall are peak seasons. Book 1-2 weeks ahead for best scheduling.`;
    localConsideration = `Multi-story homes in ${stateName} may require specialized equipment—ask about safety certifications.`;
    bestMonthsToHire = "Spring or fall for best results";
    averageWaitTime = "3-7 days";
  }

  // Appliance repair tips
  if (serviceKey === 'appliance-repair') {
    if (isHotSummer) {
      tips.push(`Refrigerator and AC issues spike in ${stateName}'s summer—preventive maintenance in spring saves emergency costs`);
      averageWaitTime = "1-3 days normally, longer in summer heat waves";
    }
    tips.push(`Check if your appliance is still under warranty before paying for repairs in ${stateName}`);
    seasonalAdvice = `Summer heat means higher demand for refrigerator and AC repairs. Schedule preventive checks in spring.`;
    localConsideration = `Major ${stateName} retailers often have authorized repair networks—check if your appliance qualifies.`;
  }

  // Pest control tips
  if (serviceKey === 'pest-control') {
    if (isHotSummer) {
      tips.push(`${stateName}'s warm climate means year-round pest activity—quarterly treatments are common`);
      tips.push(`Termite inspections are essential in ${stateName}—consider a termite bond for ongoing protection`);
    }
    if (isColdWinter) {
      tips.push(`Mice and rodents seek shelter in ${stateName} homes during cold months—seal entry points in fall`);
    }
    seasonalAdvice = `Spring and fall are peak pest seasons. Preventive treatment is more effective than reactive calls.`;
    localConsideration = `${stateName} has specific regulations for pesticide application. Ensure your provider is licensed.`;
    bestMonthsToHire = "Early spring for preventive treatment";
    averageWaitTime = "1-5 days";
  }

  // Tree service tips
  if (serviceKey === 'tree-service') {
    if (isHurricaneRisk) {
      tips.push(`In ${stateName}, pre-storm tree trimming can prevent costly damage—schedule before hurricane season`);
      averageWaitTime = "1-2 weeks normally, weeks to months after storms";
    }
    if (isColdWinter) {
      tips.push(`Winter dormancy is the ideal time for major tree pruning in ${stateName}`);
      bestMonthsToHire = "Late fall through early spring";
    }
    tips.push(`Always verify tree services have liability insurance—falling limbs can cause major property damage`);
    seasonalAdvice = `Post-storm demand creates long waits and premium pricing. Proactive maintenance is more cost-effective.`;
    localConsideration = `${stateName} may require permits for removing certain trees, especially in historic districts.`;
  }

  // Garage door tips
  if (serviceKey === 'garage-door-repair') {
    if (isColdWinter) {
      tips.push(`Cold weather in ${stateName} can cause garage door springs to become brittle—lubricate annually`);
      tips.push(`Consider an insulated garage door to reduce heating costs in ${stateName}'s cold winters`);
    }
    seasonalAdvice = `Garage door issues can spike during temperature extremes when components expand and contract.`;
    localConsideration = `${stateName} building codes may require specific wind ratings or safety features for garage doors.`;
    averageWaitTime = "Same day to 3 days";
    bestMonthsToHire = "Anytime—emergency service usually available";
  }

  // Gutter cleaning tips
  if (serviceKey === 'gutter-cleaning') {
    if (isColdWinter) {
      tips.push(`Clean gutters before ${stateName}'s first freeze to prevent ice dams and damage`);
      seasonalAdvice = `Late fall cleaning is essential before winter. Spring cleaning clears winter debris.`;
      bestMonthsToHire = "Late fall (after leaves drop) and early spring";
    }
    if (isHurricaneRisk) {
      tips.push(`Clear gutters before storm season in ${stateName} to ensure proper drainage during heavy rains`);
    }
    tips.push(`Consider gutter guards if ${stateName}'s trees create heavy seasonal debris`);
    localConsideration = `Multi-story ${stateName} homes may require specialized equipment—factor this into quotes.`;
    averageWaitTime = "3-7 days, longer in peak fall season";
  }

  // Dumpster rental tips  
  if (serviceKey === 'dumpster-rental') {
    tips.push(`Check ${stateName} regulations—street placement may require a municipal permit`);
    tips.push(`Weekend delivery can add fees in ${stateName}—schedule for weekday delivery when possible`);
    seasonalAdvice = `Spring cleaning and moving season (May-September) sees higher demand and potentially higher rates.`;
    localConsideration = `${stateName} disposal fees vary by county. Ask about weight limits and overage charges upfront.`;
    bestMonthsToHire = "Weekdays, off-peak seasons for best rates";
    averageWaitTime = "1-3 days for delivery";
  }

  // Handyman tips
  if (serviceKey === 'handyman') {
    if (isHighCost) {
      tips.push(`Handyman rates in ${stateName} are higher than average—prepare a prioritized list to maximize the service call`);
    }
    tips.push(`Create a list of multiple small projects to tackle in one visit—saves money on service fees`);
    seasonalAdvice = `Handymen are busiest in spring and fall. Book 1-2 weeks ahead during peak seasons.`;
    localConsideration = `${stateName} may require licensed contractors for work over certain dollar thresholds. Verify requirements.`;
    averageWaitTime = "3-10 days depending on scope";
    bestMonthsToHire = "Winter months often have better availability";
  }

  // Junk removal tips
  if (serviceKey === 'junk-removal') {
    tips.push(`${stateName} recycling requirements may affect pricing—ask about disposal methods`);
    seasonalAdvice = `Spring cleaning season and end of year are busy times. Book early for best availability.`;
    localConsideration = `${stateName} has specific e-waste and hazardous material disposal requirements. Confirm what can be removed.`;
    averageWaitTime = "Same day to 5 days";
    bestMonthsToHire = "Mid-week for better pricing and availability";
  }

  // Carpentry tips
  if (serviceKey === 'carpentry') {
    if (isHighCost) {
      tips.push(`Custom carpentry rates in ${stateName} reflect the high cost of skilled labor—get detailed quotes`);
    }
    tips.push(`Wood selection matters in ${stateName}'s climate—ask your carpenter about appropriate materials`);
    seasonalAdvice = `Spring and summer are busiest for home improvement. Fall and winter may offer better availability.`;
    localConsideration = `${stateName} building codes apply to structural carpentry. Ensure permits are pulled for major work.`;
    averageWaitTime = "1-3 weeks for scheduling";
    bestMonthsToHire = "Late fall through winter for interior work";
  }

  // House cleaning tips
  if (serviceKey === 'house-cleaning') {
    tips.push(`Ask about ${stateName}-based eco-friendly cleaning products if you have sensitivities`);
    tips.push(`Deep cleaning before holidays is popular in ${stateName}—book 2-3 weeks ahead`);
    if (isHighCost) {
      tips.push(`Cleaning rates in ${stateName} are above average—consider recurring service for discounts`);
    }
    seasonalAdvice = `Spring cleaning season (March-May) and pre-holiday periods are busiest. Book early.`;
    localConsideration = `Verify cleaning services in ${stateName} carry liability insurance to protect your home.`;
    averageWaitTime = "3-7 days for first appointment";
    bestMonthsToHire = "January-February for best availability";
  }

  // Lawn mowing tips
  if (serviceKey === 'lawn-mowing') {
    if (isHotSummer) {
      tips.push(`In ${stateName}'s heat, ask about proper mowing height—taller grass retains moisture better`);
      tips.push(`Weekly service is typically needed April-October in ${stateName}`);
      seasonalAdvice = `Peak season runs April through October. Lock in pricing with a seasonal contract.`;
    }
    if (isColdWinter) {
      tips.push(`${stateName}'s growing season is shorter—seasonal contracts may offer better value`);
      seasonalAdvice = `Mowing season runs roughly May-October. Many services offer seasonal packages.`;
    }
    localConsideration = `Some ${stateName} HOAs have specific lawn maintenance requirements. Check before hiring.`;
    averageWaitTime = "3-7 days for new customers";
    bestMonthsToHire = "Early spring to lock in seasonal rates";
  }

  // Leaf removal tips
  if (serviceKey === 'leaf-removal') {
    if (isColdWinter) {
      tips.push(`Schedule leaf removal before ${stateName}'s first snow to prevent lawn damage`);
      tips.push(`Wet leaves in ${stateName} weigh more—this can affect pricing based on volume`);
    }
    tips.push(`Ask about mulching options—many ${stateName} services can mulch leaves on-site`);
    seasonalAdvice = `October-November is peak season in ${stateName}. Book early as schedules fill fast.`;
    localConsideration = `${stateName} leaf burning regulations vary by county—ask about proper disposal methods.`;
    averageWaitTime = "1-2 weeks during peak fall season";
    bestMonthsToHire = "Schedule in September for October/November service";
  }

  // Moving help tips
  if (serviceKey === 'moving-help') {
    if (isHighCost) {
      tips.push(`Moving labor rates in ${stateName} are higher than average—book weekdays for savings`);
    }
    tips.push(`Summer and month-end are busiest for movers in ${stateName}—mid-month weekdays cost less`);
    tips.push(`Get everything valuable and fragile insured before moving day in ${stateName}`);
    seasonalAdvice = `May-September is peak moving season. Winter moves often cost 10-20% less.`;
    localConsideration = `${stateName} requires moving companies to be licensed for interstate moves. Verify credentials.`;
    averageWaitTime = "1-2 weeks for scheduling, longer in summer";
    bestMonthsToHire = "October-April for better rates and availability";
  }

  // Pet sitting tips
  if (serviceKey === 'pet-sitting') {
    tips.push(`Book ${stateName} pet sitters 2-4 weeks ahead for holiday periods`);
    tips.push(`Ask about their protocol for veterinary emergencies in ${stateName}`);
    if (isHotSummer) {
      tips.push(`Confirm the sitter can handle ${stateName}'s hot weather—ask about AC and outdoor time`);
    }
    if (isColdWinter) {
      tips.push(`During ${stateName} winters, confirm the sitter can safely manage outdoor bathroom breaks`);
    }
    seasonalAdvice = `Holiday periods (Thanksgiving, Christmas, summer) book up fast. Reserve 4+ weeks ahead.`;
    localConsideration = `Some ${stateName} cities require pet sitter business licenses. Ask about credentials.`;
    averageWaitTime = "Varies by season; same week normally, 2-4 weeks for holidays";
    bestMonthsToHire = "Book major holidays 4+ weeks in advance";
  }

  // Pressure washing tips
  if (serviceKey === 'pressure-washing') {
    if (isHotSummer) {
      tips.push(`${stateName}'s humidity promotes mold and mildew—annual pressure washing helps protect surfaces`);
    }
    if (isColdWinter) {
      tips.push(`Schedule pressure washing in spring or fall in ${stateName}—avoid freezing temperatures`);
      seasonalAdvice = `Best done in spring through early fall when temperatures stay above 40°F.`;
      bestMonthsToHire = "April-October";
    } else {
      seasonalAdvice = `Spring is ideal for removing winter grime before summer entertaining.`;
      bestMonthsToHire = "Spring for best results";
    }
    tips.push(`Ask about appropriate pressure levels for different surfaces—too high damages wood and siding`);
    localConsideration = `${stateName} water regulations may affect pressure washing during drought conditions.`;
    averageWaitTime = "3-7 days";
  }

  // Snow removal tips
  if (serviceKey === 'snow-removal') {
    if (isColdWinter) {
      tips.push(`Sign a seasonal contract with a ${stateName} provider before the first snowfall`);
      tips.push(`Ask about response time guarantees during heavy ${stateName} snowstorms`);
      tips.push(`Clarify what triggers service—some contracts specify minimum snow depth`);
      seasonalAdvice = `Lock in seasonal contracts in October/November before the rush. Per-event pricing is typically higher.`;
      averageWaitTime = "Same day to next day after storms";
    } else {
      tips.push(`Snow removal isn't typically needed in ${stateName}'s mild climate`);
      seasonalAdvice = `Rare snow events may require emergency services at premium rates.`;
    }
    localConsideration = `${stateName} municipalities often require snow removal within set timeframes. Know local ordinances.`;
    bestMonthsToHire = "Sign contracts in October-November";
  }

  // Yard cleanup tips
  if (serviceKey === 'yard-cleanup') {
    if (isColdWinter) {
      tips.push(`Spring cleanup in ${stateName} should include winter debris and dead plant material`);
      tips.push(`Fall cleanup prepares your ${stateName} yard for winter dormancy`);
    }
    if (isHotSummer) {
      tips.push(`Storm debris cleanup is common in ${stateName}—keep a landscaper's contact handy`);
    }
    if (isHurricaneRisk) {
      tips.push(`Post-storm cleanup demand in ${stateName} can create long waits—have relationships in place before storm season`);
    }
    tips.push(`Bundling spring and fall cleanups with a ${stateName} landscaper often provides discounts`);
    seasonalAdvice = `Spring and fall are peak cleanup seasons. Schedule 2-3 weeks ahead during peak times.`;
    localConsideration = `${stateName} may have yard waste disposal regulations. Ask about proper debris handling.`;
    averageWaitTime = "1-2 weeks during peak season";
    bestMonthsToHire = "Early spring and late fall";
  }

  // Add generic tips if none specific
  if (tips.length === 0) {
    tips.push(`Get at least 3 quotes from licensed ${serviceName.toLowerCase()} professionals in ${stateName}`);
    tips.push(`Verify insurance and check online reviews before hiring in ${stateName}`);
    tips.push(`Ask about warranties and what's included vs. excluded from the quoted price`);
  }

  // Add universal tips
  tips.push(`Always get quotes in writing with detailed scope of work before any ${serviceName.toLowerCase()} project in ${stateName}`);

  // Set defaults if not already set
  if (!seasonalAdvice) {
    seasonalAdvice = `Demand varies by season in ${stateName}. Off-peak scheduling often means better prices and faster service.`;
  }
  if (!localConsideration) {
    localConsideration = `Check ${stateName}'s licensing requirements and verify any contractor is properly insured.`;
  }

  return {
    stateSlug,
    serviceKey,
    localTips: tips,
    seasonalAdvice,
    localConsideration,
    averageWaitTime,
    bestMonthsToHire
  };
}
