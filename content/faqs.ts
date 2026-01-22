// content/faqs.ts
import type { Service } from "./services";
import type { State } from "./states";

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaq(service: Service, state: State): FaqItem[] {
  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${state.name}?`,
      answer: `${service.name} costs in ${state.name} typically range based on ${service.drivers[0].toLowerCase()} and other factors. Our estimates adjust national baseline pricing using BEA Regional Price Parities and BLS Consumer Price Index data to reflect ${state.name}'s specific cost of living. The actual price you pay will depend on your specific project requirements, the contractor you choose, and current market conditions. We recommend getting at least 3 quotes from local contractors for the most accurate pricing.`,
    },
    {
      question: "Is this a quote or an estimate?",
      answer: "This is an estimate, not a quote. A quote is a specific price from a contractor for your particular job after they've assessed your needs. An estimate is a general range based on typical costs and regional adjustments. Our estimates help you understand what to expect before getting quotes and evaluate whether quotes you receive are reasonable. Actual prices vary by job specifics, access, materials, timing, and contractor. We strongly recommend getting multiple local quotes before making any hiring decisions.",
    },
    {
      question: "How often is pricing updated?",
      answer: "We update our estimates monthly using the latest BLS Consumer Price Index (CPI-U) data and annually when BEA releases new Regional Price Parity data. This ensures our estimates reflect current market conditions and inflation. However, local market conditions can change faster than our updates, especially in rapidly growing areas. Always verify with current quotes from contractors in your area, as local supply and demand dynamics can significantly affect pricing.",
    },
    {
      question: `What's included in ${service.name.toLowerCase()} services?`,
      answer: `Typically included: ${service.included.join(", ")}. Not typically included: ${service.notIncluded.join(", ")}. However, every contractor defines their scope of work differently, so always confirm exactly what's included in any quote you receive. Ask for a detailed written breakdown to avoid surprises. Items listed as 'not included' may be available for an additional charge—ask your contractor about a comprehensive package if needed.`,
    },
    {
      question: `How do I find a reliable ${service.name.toLowerCase()} contractor in ${state.name}?`,
      answer: `Start by getting recommendations from friends, family, or neighbors who've had similar work done recently. Check online reviews on multiple platforms (Google, Yelp, BBB, and specialized platforms) looking for patterns rather than individual reviews. Verify contractors are properly licensed and insured in ${state.name} through the state licensing board. Get at least three written quotes and compare not just price, but scope of work, timeline, communication style, and warranty terms. Ask for references from recent jobs similar to yours and actually call them.`,
    },
    {
      question: "Why do contractor prices vary so much?",
      answer: `Price variations reflect many factors: contractor experience level and reputation, business overhead (insurance, workers' comp, office staff), quality of materials included, warranty offerings, scheduling availability, and current workload. A higher price might reflect comprehensive insurance coverage, more experienced technicians, premium materials, or a contractor with high demand due to excellent work. A very low price might indicate cut corners, lack of proper insurance, inexperience, or a contractor trying to win work during a slow period. Focus on overall value rather than just the lowest number.`,
    },
    {
      question: `What questions should I ask before hiring for ${service.name.toLowerCase()}?`,
      answer: `Essential questions: Are you licensed and insured in ${state.name}? (Ask for proof.) Can you provide 3 references from recent similar jobs? What exactly is included—and excluded—from this quote? How long will the job take? What is your payment schedule? What warranty do you offer on parts and labor? Will you pull necessary permits? Who will actually be doing the work? What happens if the job costs more than quoted? Get all answers in writing before work begins, and be wary of contractors who are vague or unwilling to commit to specifics.`,
    },
    {
      question: "Should I get multiple quotes?",
      answer: "Absolutely yes. We strongly recommend getting at least three quotes for any project over $500. Multiple quotes help you understand the market rate in your area, identify outliers (both suspiciously high and suspiciously low), and compare how different contractors approach your project. More importantly, you'll get a sense of each contractor's professionalism, communication style, and expertise. Don't automatically choose the lowest bid—consider experience, references, communication quality, and your comfort level with the contractor as well.",
    },
    {
      question: `When is the best time to schedule ${service.name.toLowerCase()} in ${state.name}?`,
      answer: `The best time depends on the service type and ${state.name}'s climate. Generally, scheduling during a contractor's off-peak season can result in better availability, faster scheduling, and sometimes 10-20% lower prices. For ${service.name.toLowerCase()}, consider seasonal factors that affect demand in ${state.name}. Avoid scheduling during peak seasons unless it's an emergency, as you may pay premium rates and face longer wait times. For non-urgent work, ask contractors when their slow season is and schedule accordingly.`,
    },
    {
      question: "How can I save money on this service?",
      answer: `Smart ways to save without sacrificing quality: Bundle multiple small jobs into one service call to share trip charges. Schedule during off-peak times when contractors are less busy and more flexible. Do your own prep work (clearing access, moving furniture, removing old fixtures) to reduce billable hours. Get multiple quotes and be willing to negotiate, especially if you can be flexible on timing. Consider whether the job can wait for a contractor's slower season. Ask about senior, military, or first-responder discounts. Pay attention to what's included—a slightly higher quote that includes cleanup may be better value.`,
    },
    {
      question: "What red flags should I watch for when hiring?",
      answer: `Major warning signs include: Contractors who show up uninvited (door-to-door, especially after storms); demands for large upfront payments (more than 30-50% is a red flag); pressure tactics urging immediate decisions; reluctance to provide license or insurance proof; no physical business address; unusually low bids far below competitors; vague or verbal-only contracts; requesting cash-only payment; bad reviews mentioning similar issues across multiple platforms. Trust your instincts—if something feels off, move on to another contractor.`,
    },
    {
      question: "What if something goes wrong after the job is complete?",
      answer: `First, contact the contractor directly with a clear description of the issue. Document problems with photos and written communication (email creates a record). Most reputable contractors will return to address issues covered by their warranty. If the contractor is unresponsive, you have options: file a complaint with your state's contractor licensing board; leave detailed reviews on multiple platforms; dispute the charge if you paid by credit card; or pursue small claims court for significant issues. This is why it's crucial to hire licensed, insured contractors and get warranties in writing before work begins.`,
    },
    {
      question: "Are your estimates accurate for my specific situation?",
      answer: `Our estimates provide a reliable starting range for most typical projects but may not reflect your specific circumstances. Factors that can push prices above our estimates include: unusual access challenges, high-end material selections, rush timing, complex building conditions, or work during peak demand periods. Factors that might reduce costs include: flexible scheduling, contractor promotions, or simpler-than-average job requirements. Use our estimates as a planning baseline, then get actual quotes from local contractors who can assess your specific needs.`,
    },
    {
      question: "How do permits and inspections affect cost?",
      answer: `Many home service projects require permits and inspections, which add both cost and time but provide important protections. Permit costs vary by location and project type—typically $50-$500 for most residential work. Permitted work is inspected to ensure code compliance, which protects your home's safety and resale value. Some contractors include permit costs in their quotes; others charge separately. Always ask about permit requirements and who will handle them. Be extremely cautious of contractors who suggest skipping permits—unpermitted work can create serious problems when selling your home or filing insurance claims.`,
    },
  ];
}
