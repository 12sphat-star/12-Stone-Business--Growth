export function calculateBusinessScore(formData) {

  const score = (value) => Number(value || 0);

  const revenue =
    (
      score(formData.revenueGrowth) +
      score(formData.newCustomers) +
      score(formData.followUp) +
      score(formData.retention) +
      score(formData.referrals) +
      score(formData.salesProcess)
    ) / 6;

  const customer =
    (
      score(formData.websiteScore) +
      score(formData.reviews) +
      score(formData.response) +
      score(formData.communication) +
      score(formData.customerFollowup) +
      score(formData.customerSatisfaction)
    ) / 6;

  const operations =
    (
      score(formData.scheduling) +
      score(formData.workflow) +
      score(formData.automation) +
      score(formData.crm) +
      score(formData.reporting) +
      score(formData.operationsScore)
    ) / 6;

  const employees =
    (
      score(formData.recruiting) +
      score(formData.retentionEmployees) +
      score(formData.leadership) +
      score(formData.morale) +
      score(formData.benefits) +
      score(formData.teamStrength)
    ) / 6;

  const technology =
    (
      score(formData.websiteTech) +
      score(formData.crmTech) +
      score(formData.ai) +
      score(formData.texting) +
      score(formData.phoneSystem) +
      score(formData.technologyScore)
    ) / 6;

  const overall =
    (
      revenue +
      customer +
      operations +
      employees +
      technology
    ) / 5;

  return {

    overall: Math.round(overall * 20),

    revenue: Math.round(revenue * 20),

    customer: Math.round(customer * 20),

    operations: Math.round(operations * 20),

    employees: Math.round(employees * 20),

    technology: Math.round(technology * 20)

  };

}