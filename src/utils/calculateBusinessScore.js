export function calculateBusinessScore(formData) {

 const score = (value) => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : 0;
};

  //======================================================
  // REVENUE & GROWTH
  //======================================================

  const revenue =
    (
      score(formData.revenueGrowth) +
      score(formData.newCustomers) +
      score(formData.followUp) +
      score(formData.retention) +
      score(formData.referrals) +
      score(formData.salesProcess)
    ) / 6;


  //======================================================
  // CUSTOMER EXPERIENCE
  //======================================================

  const customer =
    (
      score(formData.leadResponse) +
      score(formData.onlineReviews) +
      score(formData.customerCommunication) +
      score(formData.customerFollowUp) +
      score(formData.repeatBusiness) +
      score(formData.customerSatisfaction)
    ) / 6;


  //======================================================
  // BUSINESS OPERATIONS
  //======================================================

  const operations =
    (
      score(formData.scheduling) +
      score(formData.dispatching) +
      score(formData.workflow) +
      score(formData.communication) +
      score(formData.documentation) +
      score(formData.operations)
    ) / 6;


  //======================================================
  // EMPLOYEE GROWTH
  //======================================================

  const employees =
    (
      score(formData.recruiting) +
      score(formData.retentionEmployees) +
      score(formData.training) +
      score(formData.benefits) +
      score(formData.performance) +
      score(formData.culture)
    ) / 6;


  //======================================================
  // TECHNOLOGY & AI
  //======================================================

  const technology =
    (
      score(formData.website) +
      score(formData.crm) +
      score(formData.marketingAutomation) +
      score(formData.ai) +
      score(formData.reporting) +
      score(formData.technologyIntegration)
    ) / 6;


  //======================================================
  // OVERALL BUSINESS GROWTH IQ
  //======================================================

  const overall =
    (
      revenue +
      customer +
      operations +
      employees +
      technology
    ) / 5;


  //======================================================
  // RETURN SCORES
  //======================================================

  return {

    overall: Math.round(overall * 20),

    revenue: Math.round(revenue * 20),

    customer: Math.round(customer * 20),

    operations: Math.round(operations * 20),

    employees: Math.round(employees * 20),

    technology: Math.round(technology * 20),

  };

}