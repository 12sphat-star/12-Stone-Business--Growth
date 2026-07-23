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

  pillar: "Revenue Growth",

  finding:
    "Revenue growth appears to be limited by opportunities in lead conversion, customer follow-up, or sales effectiveness.",

  impact: "High",

  solution: "Business Growth Strategy™",

  expectedOutcome:
    "Increase revenue by improving lead conversion, customer retention, and overall sales performance."

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
  // ESTIMATED REVENUE OPPORTUNITY
  //======================================================

  let estimatedRevenueOpportunity = "$25,000 - $75,000";

  if (score.overall < 40) {

    estimatedRevenueOpportunity = "$150,000 - $300,000";

  } else if (score.overall < 60) {

    estimatedRevenueOpportunity = "$75,000 - $150,000";

  } else if (score.overall < 80) {

    estimatedRevenueOpportunity = "$35,000 - $100,000";

  }

  //======================================================
  // EXECUTIVE SUMMARY
  //======================================================

  let executiveSummary =
    "Your business demonstrates a solid foundation with opportunities to improve efficiency, customer experience, and long-term growth.";

  if (score.overall < 40) {

    executiveSummary =
      "Your assessment indicates several high-impact opportunities that could significantly improve profitability, operations, customer experience, and long-term business growth.";

  } else if (score.overall < 60) {

    executiveSummary =
      "Your business has solid growth potential. Focusing on the identified opportunity areas could improve efficiency, customer satisfaction, employee retention, and revenue.";

  }

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