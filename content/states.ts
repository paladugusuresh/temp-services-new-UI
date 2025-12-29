// content/states.ts
export type State = {
  code: string;
  name: string;
  slug: string;
  intro: string;
};

export const STATES: State[] = [
  { 
    code: "CA", 
    name: "California", 
    slug: "ca", 
    intro: "Service costs in California are generally higher than the national average, particularly in major metropolitan hubs like San Francisco, Los Angeles, and San Diego. High labor rates, strict environmental regulations, and significant travel times in congested areas all contribute to elevated pricing. However, costs in rural parts of the Central Valley and Northern California may be more aligned with national norms." 
  },
  { 
    code: "TX", 
    name: "Texas", 
    slug: "tx", 
    intro: "Texas offers a wide range of service pricing, heavily influenced by the vast distances between cities and the booming construction market in areas like Austin and Dallas. While labor costs are generally moderate, high demand during peak seasons—especially for HVAC and outdoor services—can drive prices up. In rural West Texas, travel fees often play a larger role in the final estimate." 
  },
  { 
    code: "FL", 
    name: "Florida", 
    slug: "fl", 
    intro: "In Florida, service costs are often dictated by seasonal demand, particularly during the hot summer months and hurricane season. Coastal areas like Miami and Tampa tend to have higher labor rates due to the cost of living and insurance requirements. Conversely, pricing in the Panhandle and inland regions is typically more competitive." 
  },
  { 
    code: "NY", 
    name: "New York", 
    slug: "ny", 
    intro: "New York presents a sharp contrast in pricing between New York City and Upstate regions. In NYC and Long Island, costs are among the highest in the country due to union labor rates, difficult logistics (parking, elevators), and high insurance premiums. Upstate New York generally sees pricing closer to the national average, though winter weather can impact scheduling and emergency rates." 
  },
  { 
    code: "IL", 
    name: "Illinois", 
    slug: "il", 
    intro: "Illinois pricing is largely anchored by the Chicago metro area, where union density and higher living costs push service rates up. In contrast, central and southern Illinois offer much more affordable pricing for home services. Seasonal weather extremes also play a role, with high demand for HVAC and snow removal services driving fluctuations throughout the year." 
  },
  { 
    code: "PA", 
    name: "Pennsylvania", 
    slug: "pa", 
    intro: "Pennsylvania's service costs vary significantly between the urban centers of Philadelphia and Pittsburgh and the rural 'T' region in between. Older housing stock in many cities can lead to more complex and costly repairs for plumbing and electrical work. Additionally, local tax structures and disposal fees can influence the final price of renovation and cleanup projects." 
  },
  { 
    code: "GA", 
    name: "Georgia", 
    slug: "ga", 
    intro: "Georgia's service market is driven by the rapid growth of the Atlanta metro area, where high demand can lead to premium pricing and longer wait times. Outside the perimeter, costs tend to drop significantly. The state's hot, humid climate also creates a year-round demand for pest control and HVAC services, keeping those sectors competitive but busy." 
  },
  { 
    code: "WA", 
    name: "Washington", 
    slug: "wa", 
    intro: "Washington State sees a divide between the booming Puget Sound region and the eastern agricultural areas. In Seattle and Bellevue, high tech-sector wages drive up the cost of living and, consequently, service labor rates. Strict environmental disposal laws also add to the cost of junk removal and construction projects. Eastern Washington generally offers more moderate pricing." 
  },
  { 
    code: "MA", 
    name: "Massachusetts", 
    slug: "ma", 
    intro: "Massachusetts consistently ranks as one of the more expensive states for home services, especially within the Route 128 belt around Boston. High licensing standards, insurance costs, and a shortage of skilled tradespeople contribute to these rates. Historic home preservation in many towns also requires specialized, and often more expensive, craftsmanship." 
  },
  { 
    code: "AZ", 
    name: "Arizona", 
    slug: "az", 
    intro: "Arizona's service pricing is heavily influenced by its extreme climate. HVAC and pool services are in constant high demand, often commanding premium rates during the summer. The Phoenix and Tucson metro areas see competitive pricing due to a large number of providers, while rural and mountain communities may face higher travel charges." 
  },
  { 
    code: "CO", 
    name: "Colorado", 
    slug: "co", 
    intro: "Colorado's booming population along the Front Range has increased demand and prices for home services in Denver, Boulder, and Colorado Springs. In mountain resort communities, costs are significantly higher due to the difficulty of access, harsh weather conditions, and a scarcity of local labor. Seasonal snow removal is also a major expense category here." 
  },
  { 
    code: "NC", 
    name: "North Carolina", 
    slug: "nc", 
    intro: "North Carolina offers a balanced market with moderate service costs, though the Research Triangle (Raleigh-Durham) and Charlotte are seeing price increases due to rapid growth. The state's diverse geography, from the mountains to the coast, means that local environmental factors—like humidity and salt air—can influence maintenance needs and costs." 
  },
  { 
    code: "OH", 
    name: "Ohio", 
    slug: "oh", 
    intro: "Ohio generally offers some of the most affordable home service rates in the country. However, pricing can vary between the major 'C' cities—Columbus, Cleveland, and Cincinnati. The prevalence of older homes in these industrial hubs often means that electrical and plumbing updates are common, potentially adding complexity to standard repair jobs." 
  },
  { 
    code: "MI", 
    name: "Michigan", 
    slug: "mi", 
    intro: "Michigan's service costs are often dictated by the automotive-driven economy and seasonal weather patterns. Detroit and its suburbs see higher rates, while rural areas remain very affordable. The harsh winters create a strong market for heating repairs and snow removal, while the humid summers drive demand for cooling and waterproofing services." 
  },
  { 
    code: "VA", 
    name: "Virginia", 
    slug: "va", 
    intro: "Virginia is a state of contrasts, with Northern Virginia (NoVA) functioning as a high-cost extension of the DC metro area, while the southern and western parts of the state remain much more affordable. In NoVA, traffic congestion and high living costs drive up service call fees and hourly labor rates significantly compared to the rest of the state." 
  },
];
