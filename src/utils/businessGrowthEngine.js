import { calculateBusinessScore } from "./calculateBusinessScore";

export function businessGrowthEngine(formData) {

  const score = calculateBusinessScore(formData);

  const opportunities = [];
  const strengths = [];
  const recommendations = [];
  const recommendedServices = [];
  const growthBlueprint = [];

  //======================================================
  // REVENUE ANALYSIS
  //======================================================

  if (score.revenue < 60) {

    opportunities.push("Revenue Growth");

    recommendations.push(
      "Revenue growth can often be improved without increasing advertising by strengthening lead conversion, customer follow-up, and customer lifetime value."
    );

    recommendedServices.push("Business Growth Strategy™");
   growthBlueprint.push({

  priority: 1,

  pillar: "Revenue Growth™",

  diagnosis: "Opportunity",

  impact: "High",

  finding:
    "Your assessment indicates opportunities to strengthen lead conversion, customer follow-up, retention, and sales effectiveness.",

  solution: "Business Growth Strategy™",

  businessImpact:
    "Improve lead conversion, strengthen customer retention, and create a more consistent process for generating revenue."

});

} else {

  strengths.push("Revenue Growth");

}

  //======================================================
  // CUSTOMER EXPERIENCE
  //======================================================

  if (score.customer < 60) {

    opportunities.push("Customer Experience");

    recommendations.push(
      "Businesses that respond faster and communicate consistently typically convert more leads, generate more referrals, and improve customer satisfaction."
    );

    recommendedServices.push("Smart Website™");
    growthBlueprint.push({

  priority: 4,

  pillar: "Customer Experience",

  diagnosis: "Opportunity",

  impact: "High",

  finding:
    "Customer communication and follow-up present opportunities to improve lead conversion and client satisfaction.",

  solution: "Smart Website™",

  businessImpact:
    "Generate more leads, improve customer engagement, and increase referral opportunities."

});

  } else {

    strengths.push("Customer Experience");

  }

  //======================================================
  // OPERATIONS
  //======================================================

  if (score.operations < 60) {

    opportunities.push("Business Operations");

    recommendations.push(
      "Streamlining scheduling, workflow, reporting, and automation can improve efficiency while reducing administrative workload."
    );

    recommendedServices.push("Business Automation™");
    growthBlueprint.push({

  priority: 5,

  pillar: "Business Operations",

  diagnosis: "Opportunity",

  impact: "Medium",

  finding:
    "Workflow, scheduling, and automation appear to be limiting operational efficiency.",

  solution: "Business Automation™",

  businessImpact:
    "Improve productivity, reduce administrative work, and create more consistent business processes."

});

  } else {

    strengths.push("Business Operations");

  }

  //======================================================
  // WORKFORCE STRATEGY
  //======================================================

  if (score.employees < 60) {

    opportunities.push("Workforce Growth & Employee Benefits");

    recommendations.push(
      "Your assessment indicates opportunities to strengthen your workforce strategy. Businesses that provide meaningful employee benefits often improve recruiting, increase employee retention, and create a stronger competitive advantage."
    );

    recommendations.push(
      "Affordable healthcare access can become one of your strongest recruiting and retention tools."
    );

    recommendedServices.push("KonnectMD Business Healthcare™");
    growthBlueprint.push({

  priority: 2,

  pillar: "Workforce Growth™",

  diagnosis: "Opportunity",

  impact: "High",

  finding:
    "Your assessment indicates opportunities to improve recruiting and employee retention through stronger employee benefits.",

  solution: "KonnectMD Business Healthcare™",

  businessImpact:
    "Improve recruiting, reduce turnover, increase employee loyalty, and strengthen your competitive advantage."

});

    recommendedServices.push("Employee Growth Solutions™");

  } else {

    strengths.push("Strong Workforce Strategy");

  }
    //======================================================
  // TECHNOLOGY & AI
  //======================================================

  if (score.technology < 60) {

    opportunities.push("Technology & AI");

    recommendations.push(
      "Your assessment suggests your business may benefit from modern technology that improves customer communication, reduces missed opportunities, and increases operational efficiency."
    );

    recommendations.push(
      "AI and automation can reduce repetitive administrative work while helping your team respond faster and improve the customer experience."
    );

    recommendedServices.push("AI Big 3™");
    growthBlueprint.push({

  priority: 3,

  pillar: "Technology & AI",

  diagnosis: "Opportunity",

  impact: "Medium",

  finding:
    "Manual processes and limited automation may be slowing business growth and customer responsiveness.",

  solution: "AI Big 3™",

  businessImpact:
    "Reduce repetitive work, improve customer response time, and increase operational efficiency."

});

  } else {

    strengths.push("Technology Leadership");

  }

  //======================================================
  // GROWTH POTENTIAL
  //======================================================

  let growthPotential = "Excellent";

  if (score.overall < 40) {

    growthPotential = "Critical";

  } else if (score.overall < 60) {

    growthPotential = "High";

  } else if (score.overall < 80) {

    growthPotential = "Strong";

  }

  //======================================================
  // PRIORITY LEVEL
  //======================================================

  let priorityLevel = "Low";

  if (score.overall < 40) {

    priorityLevel = "Immediate";

  } else if (score.overall < 60) {

    priorityLevel = "High";

  } else if (score.overall < 80) {

    priorityLevel = "Moderate";

  }

  //======================================================
// GROWTH OPPORTUNITY
//======================================================

let estimatedRevenueOpportunity = "Optimization Opportunity";

if (score.overall < 40) {

  estimatedRevenueOpportunity = "Significant Growth Opportunity";

} else if (score.overall < 60) {

  estimatedRevenueOpportunity = "High Growth Opportunity";

} else if (score.overall < 80) {

  estimatedRevenueOpportunity = "Strong Growth Opportunity";

}

  //======================================================
// PERSONALIZED EXECUTIVE SUMMARY
//======================================================

const scoreAreas = [
  {
    name: "Revenue Growth",
    score: score.revenue,
  },
  {
    name: "Customer Experience",
    score: score.customer,
  },
  {
    name: "Business Operations",
    score: score.operations,
  },
  {
    name: "Employee Growth",
    score: score.employees,
  },
  {
    name: "Technology & AI",
    score: score.technology,
  },
];

const rankedAreas = [...scoreAreas].sort(
  (a, b) => a.score - b.score
);

const primaryOpportunity = rankedAreas[0]?.name;
const secondaryOpportunity = rankedAreas[1]?.name;

const strongestArea =
  [...scoreAreas].sort((a, b) => b.score - a.score)[0]?.name;

let executiveSummary = "";

if (score.overall < 40) {

  executiveSummary =
    `Your Business Growth IQ™ Assessment identifies significant opportunities for improvement, with ${primaryOpportunity} and ${secondaryOpportunity} representing the highest-priority areas. Strengthening these areas could improve business performance, efficiency, and long-term growth. Your strongest area is currently ${strongestArea}, providing a foundation to build upon.`;

} else if (score.overall < 60) {

  executiveSummary =
    `Your business demonstrates meaningful growth potential. The assessment identifies ${primaryOpportunity} and ${secondaryOpportunity} as the areas offering the greatest opportunity for improvement. Your strongest performance is currently in ${strongestArea}. Focusing on the highest-priority opportunities can help strengthen overall business performance and create a more scalable growth foundation.`;

} else if (score.overall < 80) {

  executiveSummary =
    `Your business demonstrates a solid growth foundation with several areas performing well. The greatest opportunities identified are in ${primaryOpportunity} and ${secondaryOpportunity}, while ${strongestArea} currently represents your strongest area of performance. Strategic improvements in the priority areas can help strengthen efficiency, customer value, and future growth capacity.`;

} else {

  executiveSummary =
    `Your assessment indicates a strong overall business foundation. ${strongestArea} is currently your strongest area of performance, while ${primaryOpportunity} and ${secondaryOpportunity} represent the best opportunities for continued optimization. At this stage, the focus should be on refinement, scalability, and protecting the systems already contributing to strong performance.`;

}
  //======================================================
// DYNAMIC BLUEPRINT PRIORITY
//======================================================

const pillarScores = {
  "Revenue Growth™": score.revenue,
  "Revenue Growth": score.revenue,

  "Customer Experience": score.customer,

  "Business Operations": score.operations,

  "Workforce Growth™": score.employees,

  "Technology & AI": score.technology,
};

growthBlueprint.sort((a, b) => {

  const scoreA = pillarScores[a.pillar] ?? 100;
  const scoreB = pillarScores[b.pillar] ?? 100;

  return scoreA - scoreB;

});

growthBlueprint.forEach((item, index) => {
  item.priority = index + 1;
});


  //======================================================
  // REMOVE DUPLICATES
  //======================================================

  const uniqueServices = [...new Set(recommendedServices)];
  const uniqueRecommendations = [...new Set(recommendations)];

  //======================================================
  // RETURN ANALYSIS
  //======================================================

  return {

    overallScore: score.overall,
    
    growthBlueprint,

    growthPotential,

    revenue: score.revenue,

    customer: score.customer,

    operations: score.operations,

    employees: score.employees,

    technology: score.technology,

    strengths,

    opportunities,

    recommendations: uniqueRecommendations,

    executiveSummary,

    estimatedRevenueOpportunity,

    recommendedServices: uniqueServices,

    priorityLevel,

  };

}