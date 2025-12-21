// content/states.ts
export type State = {
  code: string;
  name: string;
  slug: string;
  intro: string;
};

export const STATES: State[] = [
  { code: "CA", name: "California", slug: "ca", intro: "Costs in California often run higher than the national average in major metro areas." },
  { code: "TX", name: "Texas", slug: "tx", intro: "Texas pricing varies a lot by metro area, travel distance, and demand seasonality." },
  { code: "FL", name: "Florida", slug: "fl", intro: "Florida costs can shift with seasonal demand and storm-related cleanup." },
  { code: "NY", name: "New York", slug: "ny", intro: "New York pricing can be higher due to labor costs and access constraints in dense areas." },
  { code: "IL", name: "Illinois", slug: "il", intro: "Illinois pricing often tracks metro labor costs and seasonal service demand." },
  { code: "PA", name: "Pennsylvania", slug: "pa", intro: "Pennsylvania costs vary by region, job access, and disposal/permit requirements." },
  { code: "GA", name: "Georgia", slug: "ga", intro: "Georgia pricing varies by metro area and the time sensitivity of the work." },
  { code: "WA", name: "Washington", slug: "wa", intro: "Washington costs tend to be higher in Seattle and surrounding areas due to labor rates and living costs." },
  { code: "MA", name: "Massachusetts", slug: "ma", intro: "Massachusetts pricing reflects higher labor costs, especially in the Boston metro area." },
  { code: "AZ", name: "Arizona", slug: "az", intro: "Arizona pricing varies between urban Phoenix and Tucson areas, with seasonal demand fluctuations." },
  { code: "CO", name: "Colorado", slug: "co", intro: "Colorado costs can be higher in Denver and mountain communities due to access and labor rates." },
  { code: "NC", name: "North Carolina", slug: "nc", intro: "North Carolina pricing is generally moderate but varies by metro growth and job complexity." },
  { code: "OH", name: "Ohio", slug: "oh", intro: "Ohio costs are often near the national average, with variation by city and property access." },
  { code: "MI", name: "Michigan", slug: "mi", intro: "Michigan pricing reflects regional labor costs and seasonal weather-related demand." },
  { code: "VA", name: "Virginia", slug: "va", intro: "Virginia costs vary between northern metro areas and rural regions, with higher rates near DC." },
];
